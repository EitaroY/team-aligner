"use client";

import { useState } from "react";
import type { AudienceType, Report } from "@/types";
import type { RoadmapData } from "@/types/roadmap";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { ThemeToggle } from "./ThemeToggle";

const audienceLabels: Record<AudienceType, string> = {
  ceo: "CEO",
  engineering: "Engineering",
  product: "Product",
  business: "Business",
  hr: "HR",
  custom: "Custom",
};

export function ReportView({
  report,
  roadmap,
}: {
  report: Report;
  roadmap: RoadmapData;
}) {
  const [audience, setAudience] = useState<AudienceType>("ceo");
  const [copied, setCopied] = useState<"link" | "content" | null>(null);

  const content = report.audiences[audience];

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied("link");
    setTimeout(() => setCopied(null), 2000);
  }

  async function copyContent() {
    await navigator.clipboard.writeText(content);
    setCopied("content");
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">TeamAligner Report</h1>
          <p className="text-xs text-muted-foreground">
            Generated {new Date(report.generatedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to dashboard
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8 space-y-6">
        {/* Audience selector */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">Audience:</span>
          <div className="flex rounded-md border border-border overflow-hidden">
            {(Object.keys(audienceLabels) as AudienceType[]).map((key) => (
              <button
                key={key}
                onClick={() => setAudience(key)}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  audience === key
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {audienceLabels[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Roadmap */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-base font-semibold mb-4">Roadmap</h2>
          <RoadmapTimeline data={roadmap} />
        </div>

        {/* Rendered report content */}
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="prose-sm max-w-none [&_h1]:text-xl [&_h1]:font-bold [&_h1]:mb-4 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-1 [&_p]:text-sm [&_p]:text-foreground/80 [&_p]:my-2 [&_li]:text-sm [&_li]:text-foreground/80 [&_ul]:my-2 [&_ol]:my-2 [&_strong]:text-foreground [&_table]:text-xs [&_th]:text-left [&_th]:p-2 [&_th]:border-b [&_th]:border-border [&_td]:p-2 [&_td]:border-b [&_td]:border-border/50 [&_code]:text-xs [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded">
            <MarkdownRenderer content={content} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied === "link" ? "Copied!" : "Copy Link"}
          </button>
          <button
            onClick={copyContent}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied === "content" ? "Copied!" : "Copy Content"}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Simple markdown-to-JSX renderer for demo purposes */
function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let tableLines: string[] = [];
  let inTable = false;

  function flushTable() {
    if (tableLines.length < 2) return;
    const headers = tableLines[0]
      .split("|")
      .filter(Boolean)
      .map((h) => h.trim());
    const rows = tableLines.slice(2).map((row) =>
      row
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim())
    );
    elements.push(
      <table key={`table-${elements.length}`}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>
                  <InlineMarkdown text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
    tableLines = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.includes("|") && line.trim().startsWith("|")) {
      inTable = true;
      tableLines.push(line);
      continue;
    } else if (inTable) {
      flushTable();
      inTable = false;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i}>
          <InlineMarkdown text={line.slice(4)} />
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i}>
          <InlineMarkdown text={line.slice(3)} />
        </h2>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i}>
          <InlineMarkdown text={line.slice(2)} />
        </h1>
      );
    } else if (line.startsWith("- ")) {
      // Collect consecutive list items
      const listItems: string[] = [line.slice(2)];
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        listItems.push(lines[i].slice(2));
      }
      elements.push(
        <ul key={i}>
          {listItems.map((item, j) => (
            <li key={j}>
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ul>
      );
    } else if (line.match(/^\d+\.\s/)) {
      const listItems: string[] = [line.replace(/^\d+\.\s/, "")];
      while (i + 1 < lines.length && lines[i + 1].match(/^\d+\.\s/)) {
        i++;
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
      }
      elements.push(
        <ol key={i}>
          {listItems.map((item, j) => (
            <li key={j}>
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ol>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p key={i}>
          <InlineMarkdown text={line} />
        </p>
      );
    }
  }

  if (inTable) flushTable();

  return <>{elements}</>;
}

function InlineMarkdown({ text }: { text: string }) {
  // Handle **bold** and `code`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={i}>{part.slice(1, -1)}</code>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

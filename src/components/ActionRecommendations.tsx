"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { actionRecommendations } from "@/data/mock";
import { ActionItem } from "./ActionItem";
import type { ActionRecommendation } from "@/types";

function SortableTodoItem({
  action,
  index,
  onRemove,
}: {
  action: ActionRecommendation;
  index: number;
  onRemove: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: action.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={isDragging ? "opacity-50" : ""}
    >
      <ActionItem
        action={action}
        mode="todo"
        index={index}
        onToggle={onRemove}
        dragHandleProps={listeners as unknown as React.HTMLAttributes<HTMLElement>}
      />
    </div>
  );
}

export function ActionRecommendations({
  onGenerateReport,
  isGenerating,
}: {
  onGenerateReport: () => void;
  isGenerating: boolean;
}) {
  const [todoIds, setTodoIds] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const todoItems = todoIds
    .map((id) => actionRecommendations.find((a) => a.id === id))
    .filter((a): a is ActionRecommendation => a !== undefined);

  const inboxItems = actionRecommendations
    .filter((a) => !todoIds.includes(a.id))
    .sort((a, b) => b.impactScore - a.impactScore);

  function addToTodo(id: string) {
    setTodoIds((prev) => [...prev, id]);
  }

  function removeFromTodo(id: string) {
    setTodoIds((prev) => prev.filter((i) => i !== id));
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTodoIds((prev) => {
      const oldIndex = prev.indexOf(active.id as string);
      const newIndex = prev.indexOf(over.id as string);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  return (
    <section className="space-y-4">
      <h2 className="text-base font-medium">Actions</h2>

      {/* Todo section */}
      {todoIds.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Todo
            </span>
            <span className="text-[10px] text-muted-foreground tabular-nums">
              {todoIds.length} planned
            </span>
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={todoIds}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {todoItems.map((action, index) => (
                  <SortableTodoItem
                    key={action.id}
                    action={action}
                    index={index}
                    onRemove={() => removeFromTodo(action.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      )}

      {/* Inbox section */}
      {inboxItems.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Inbox
            </span>
            <span className="text-[10px] text-muted-foreground tabular-nums">
              {inboxItems.length} recommendations
            </span>
          </div>
          <div className="space-y-2">
            {inboxItems.map((action) => (
              <ActionItem
                key={action.id}
                action={action}
                mode="inbox"
                onToggle={() => addToTodo(action.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Generate Report button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onGenerateReport}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-70"
        >
          {isGenerating ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Generating Report...
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Generate Roadmap Report
            </>
          )}
        </button>
      </div>
    </section>
  );
}

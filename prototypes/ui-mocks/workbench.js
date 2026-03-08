const state = {
  githubConnected: false,
  monitoringConnected: false,
  loaded: false,
  features: [
    {
      id: "F-201",
      title: "Onboarding Setup Assistant",
      usageRate: 34,
      usageDelta: -9,
      customerImpact: 91,
      userExpectation: 88,
      strategicFit: 82,
      devCostWeeks: 3,
      platformLeverage: 73
    },
    {
      id: "F-202",
      title: "Enterprise Role Template",
      usageRate: 18,
      usageDelta: +4,
      customerImpact: 84,
      userExpectation: 80,
      strategicFit: 90,
      devCostWeeks: 5,
      platformLeverage: 87
    },
    {
      id: "F-203",
      title: "KPI Definition Guardrail",
      usageRate: 42,
      usageDelta: +2,
      customerImpact: 73,
      userExpectation: 69,
      strategicFit: 93,
      devCostWeeks: 2,
      platformLeverage: 89
    },
    {
      id: "F-204",
      title: "Decision Log Auto Explain",
      usageRate: 22,
      usageDelta: +7,
      customerImpact: 79,
      userExpectation: 77,
      strategicFit: 86,
      devCostWeeks: 4,
      platformLeverage: 91
    },
    {
      id: "F-205",
      title: "Slack Digest for Alignment",
      usageRate: 47,
      usageDelta: +5,
      customerImpact: 68,
      userExpectation: 72,
      strategicFit: 74,
      devCostWeeks: 2,
      platformLeverage: 65
    },
    {
      id: "F-206",
      title: "Risk Scenario Simulator",
      usageRate: 12,
      usageDelta: +1,
      customerImpact: 75,
      userExpectation: 71,
      strategicFit: 88,
      devCostWeeks: 6,
      platformLeverage: 95
    }
  ],
  ticketOrder: []
};

const metricTemplate = [
  { key: "activeTeams", label: "Active Teams", value: "128", delta: "+11% MoM", dir: "up" },
  { key: "weeklyDecisions", label: "Weekly Decisions", value: "386", delta: "+8% WoW", dir: "up" },
  { key: "misalignmentCases", label: "Misalignment Cases", value: "24", delta: "-19% WoW", dir: "up" },
  { key: "cycleTime", label: "Decision Cycle", value: "2.1 days", delta: "-0.4 days", dir: "up" }
];

function nowScore(feature) {
  const speed = Math.max(0, 100 - feature.devCostWeeks * 12);
  return Math.round(
    feature.customerImpact * 0.35 +
      feature.userExpectation * 0.25 +
      feature.strategicFit * 0.2 +
      speed * 0.2
  );
}

function futureScore(feature) {
  const sustainability = Math.max(0, 100 - feature.devCostWeeks * 8);
  return Math.round(
    feature.customerImpact * 0.28 +
      feature.userExpectation * 0.2 +
      feature.strategicFit * 0.26 +
      feature.platformLeverage * 0.18 +
      sustainability * 0.08
  );
}

function effortLabel(weeks) {
  if (weeks <= 2) {
    return "S";
  }
  if (weeks <= 4) {
    return "M";
  }
  return "L";
}

function updateTimestamp() {
  const txt = new Date().toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  document.querySelector('[data-role="updated-at"]').textContent = `Updated: ${txt}`;
}

function bindConnections() {
  const githubStatus = document.querySelector('[data-role="github-status"]');
  const monitoringStatus = document.querySelector('[data-role="monitoring-status"]');

  document.querySelector('[data-action="connect-github"]').addEventListener("click", () => {
    state.githubConnected = true;
    githubStatus.textContent = "Connected";
    githubStatus.classList.add("connected");
    updateTimestamp();
  });

  document.querySelector('[data-action="connect-monitoring"]').addEventListener("click", () => {
    state.monitoringConnected = true;
    monitoringStatus.textContent = "Connected";
    monitoringStatus.classList.add("connected");
    updateTimestamp();
  });
}

function renderMetrics() {
  const container = document.querySelector('[data-role="metrics"]');
  container.innerHTML = "";
  metricTemplate.forEach((metric) => {
    const card = document.createElement("div");
    card.className = "metric";
    card.innerHTML = `
      <div class="label">${metric.label}</div>
      <div class="value">${metric.value}</div>
      <div class="delta ${metric.dir}">${metric.delta}</div>
    `;
    container.appendChild(card);
  });
}

function renderUtilization() {
  const tbody = document.querySelector('[data-role="utilization-table"] tbody');
  tbody.innerHTML = "";

  const sorted = [...state.features].sort((a, b) => b.usageRate - a.usageRate);

  sorted.forEach((feature) => {
    const tr = document.createElement("tr");
    const expectation = `${feature.userExpectation}/100`;
    tr.innerHTML = `
      <td>${feature.title}</td>
      <td>${feature.usageRate}%</td>
      <td>${feature.usageDelta > 0 ? "+" : ""}${feature.usageDelta}%</td>
      <td>${expectation}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderPriorities() {
  const nowContainer = document.querySelector('[data-role="now-priority"]');
  const futureContainer = document.querySelector('[data-role="future-priority"]');

  nowContainer.innerHTML = "";
  futureContainer.innerHTML = "";

  const nowTop = [...state.features]
    .sort((a, b) => nowScore(b) - nowScore(a))
    .slice(0, 3);

  const futureTop = [...state.features]
    .sort((a, b) => futureScore(b) - futureScore(a))
    .slice(0, 3);

  nowTop.forEach((feature, i) => {
    const el = document.createElement("div");
    el.className = "priority-item";
    el.innerHTML = `
      <strong>${i + 1}. ${feature.title}</strong>
      <div class="score">score: ${nowScore(feature)}</div>
      <div class="meta">customer ${feature.customerImpact} / expectation ${feature.userExpectation} / cost ${feature.devCostWeeks}w</div>
    `;
    nowContainer.appendChild(el);
  });

  futureTop.forEach((feature, i) => {
    const el = document.createElement("div");
    el.className = "priority-item";
    el.innerHTML = `
      <strong>${i + 1}. ${feature.title}</strong>
      <div class="score">score: ${futureScore(feature)}</div>
      <div class="meta">strategy ${feature.strategicFit} / leverage ${feature.platformLeverage} / cost ${feature.devCostWeeks}w</div>
    `;
    futureContainer.appendChild(el);
  });
}

function ensureTicketOrder() {
  if (state.ticketOrder.length > 0) {
    return;
  }
  state.ticketOrder = [...state.features]
    .sort((a, b) => nowScore(b) - nowScore(a))
    .map((feature) => feature.id);
}

function moveTicket(index, direction) {
  const next = index + direction;
  if (next < 0 || next >= state.ticketOrder.length) {
    return;
  }
  const tmp = state.ticketOrder[index];
  state.ticketOrder[index] = state.ticketOrder[next];
  state.ticketOrder[next] = tmp;
  renderTickets();
}

function renderTickets() {
  const list = document.querySelector('[data-role="ticket-list"]');
  list.innerHTML = "";

  state.ticketOrder.forEach((id, index) => {
    const feature = state.features.find((f) => f.id === id);
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <div class="ticket-head">
        <div>
          <div class="ticket-rank">Priority #${index + 1}</div>
          <div class="ticket-title">${feature.id} ${feature.title}</div>
        </div>
        <div class="ticket-controls">
          <button class="btn" data-action="up">↑</button>
          <button class="btn" data-action="down">↓</button>
        </div>
      </div>
      <div class="ticket-meta">Now ${nowScore(feature)} / Future ${futureScore(feature)} / Effort ${feature.devCostWeeks}w (${effortLabel(feature.devCostWeeks)})</div>
      <div class="ticket-meta">customer value ${feature.customerImpact} | user expectation ${feature.userExpectation} | usage ${feature.usageRate}%</div>
    `;

    card.querySelector('[data-action="up"]').addEventListener("click", () => moveTicket(index, -1));
    card.querySelector('[data-action="down"]').addEventListener("click", () => moveTicket(index, 1));

    list.appendChild(card);
  });
}

function sortBy(mode) {
  if (!state.loaded) {
    document.querySelector('[data-role="report-output"]').textContent =
      "Load data first, then sort tickets.";
    return;
  }
  state.ticketOrder = [...state.features]
    .sort((a, b) => {
      if (mode === "future") {
        return futureScore(b) - futureScore(a);
      }
      return nowScore(b) - nowScore(a);
    })
    .map((feature) => feature.id);
  renderTickets();
}

function composePhases(orderedFeatures) {
  const nowPhase = [];
  const futurePhase = [];
  let nowEffort = 0;

  orderedFeatures.forEach((feature) => {
    if (nowEffort + feature.devCostWeeks <= 8 && nowPhase.length < 3) {
      nowPhase.push(feature);
      nowEffort += feature.devCostWeeks;
    } else {
      futurePhase.push(feature);
    }
  });

  return { nowPhase, futurePhase, nowEffort };
}

function reportHeader(audience) {
  if (audience === "engineering") {
    return "[Engineering Roadmap Draft]";
  }
  if (audience === "business") {
    return "[Business Roadmap Draft]";
  }
  return "[Executive Roadmap Draft]";
}

function generateReport() {
  if (!state.loaded) {
    document.querySelector('[data-role="report-output"]').textContent =
      "Run \"Load latest snapshot\" before generating a report.";
    return;
  }

  const audience = document.querySelector('[data-role="audience"]').value;
  const prompt = document.querySelector('[data-role="custom-prompt"]').value.trim();
  const orderedFeatures = state.ticketOrder.map((id) => state.features.find((f) => f.id === id));
  const { nowPhase, futurePhase, nowEffort } = composePhases(orderedFeatures);

  const totalEffort = orderedFeatures.reduce((sum, item) => sum + item.devCostWeeks, 0);
  const avgNowScore = Math.round(
    nowPhase.reduce((sum, item) => sum + nowScore(item), 0) / Math.max(nowPhase.length, 1)
  );

  let body = "";

  if (audience === "executive") {
    body = [
      "Goal: keep decision velocity high while prioritizing low-usage, high-impact improvements.",
      `Now investment (${nowEffort}w): ${nowPhase.map((x) => x.title).join(" / ")}`,
      `Future investment: ${futurePhase.map((x) => x.title).join(" / ")}`,
      `Expected outcome: Now average priority score ${avgNowScore}, focused on high expectation segments.",
      `Total delivery effort: ${totalEffort}w`
    ].join("\n");
  } else if (audience === "engineering") {
    body = [
      "Execution strategy: sequence high-score, low-dependency features first to shorten learning loops.",
      "Now:",
      ...nowPhase.map((x, i) => `${i + 1}. ${x.id} ${x.title} (${x.devCostWeeks}w, now ${nowScore(x)})`),
      "Future:",
      ...futurePhase.map((x, i) => `${i + 1}. ${x.id} ${x.title} (${x.devCostWeeks}w, future ${futureScore(x)})`),
      `Total effort: ${totalEffort}w`
    ].join("\n");
  } else {
    body = [
      "Objective: improve features with high expectation but weak adoption to reduce expansion and retention risk.",
      `Now messaging focus: ${nowPhase.map((x) => x.title).join(" / ")}`,
      `Future messaging focus: ${futurePhase.map((x) => x.title).join(" / ")}`,
      "Share the ordering rationale with score-based evidence across Sales and CS.",
      `Overall effort: ${totalEffort}w`
    ].join("\n");
  }

  const suffix = prompt ? `\n\nPrompt override applied:\n${prompt}` : "";
  const report = `${reportHeader(audience)}\n\n${body}${suffix}`;

  document.querySelector('[data-role="report-output"]').textContent = report;
}

function loadSnapshot() {
  if (!state.githubConnected || !state.monitoringConnected) {
    document.querySelector('[data-role="report-output"]').textContent =
      "Connect both GitHub and User Monitoring before loading.";
    return;
  }

  state.loaded = true;
  updateTimestamp();
  renderMetrics();
  renderUtilization();
  renderPriorities();
  ensureTicketOrder();
  renderTickets();
  generateReport();
}

function bindActions() {
  document.querySelector('[data-action="load-snapshot"]').addEventListener("click", loadSnapshot);
  document.querySelector('[data-action="sort-now"]').addEventListener("click", () => sortBy("now"));
  document.querySelector('[data-action="sort-future"]').addEventListener("click", () => sortBy("future"));
  document.querySelector('[data-action="generate-report"]').addEventListener("click", generateReport);
}

updateTimestamp();
bindConnections();
bindActions();

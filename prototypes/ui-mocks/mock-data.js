const recommendationPool = [
  {
    id: "R-1",
    title: "推奨: オンボーディング導線の短縮を最優先",
    reason: "新規登録直後の離脱増加が主要因。顧客要望とsupport logsが一致している。",
    owner: "Growth Squad",
    eta: "7日"
  },
  {
    id: "R-2",
    title: "推奨: Enterprise向け権限制御を第2優先で前倒し",
    reason: "営業情報で失注理由の36%が権限要件。受注機会損失の影響が大きい。",
    owner: "Platform Squad",
    eta: "14日"
  },
  {
    id: "R-3",
    title: "推奨: KPI定義の不整合を先に修正し判断精度を回復",
    reason: "複数ダッシュボードでNorth Starの算出式が不一致。説明責任リスクが高い。",
    owner: "Data + PMO",
    eta: "5日"
  }
];

const signals = [
  { label: "Activation", value: "-6.8%", cls: "bad" },
  { label: "Expansion MRR", value: "+4.1%", cls: "good" },
  { label: "P1 Incidents", value: "+3", cls: "bad" },
  { label: "NPS (SMB)", value: "-2.3", cls: "warn" }
];

function renderNow() {
  const now = new Date();
  const txt = now.toLocaleString("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  document.querySelectorAll('[data-role="now"]').forEach((el) => {
    el.textContent = `更新: ${txt}`;
  });
}

function renderSignals() {
  document.querySelectorAll('[data-role="signals"]').forEach((container) => {
    container.innerHTML = "";
    signals.forEach((s) => {
      const span = document.createElement("span");
      span.className = `badge ${s.cls}`;
      span.textContent = `${s.label} ${s.value}`;
      container.appendChild(span);
    });
  });
}

function bindRecommendationSwitch() {
  let idx = 0;
  const titleNodes = document.querySelectorAll('[data-role="rec-title"]');
  const reasonNodes = document.querySelectorAll('[data-role="rec-reason"]');
  const ownerNodes = document.querySelectorAll('[data-role="rec-owner"]');
  const etaNodes = document.querySelectorAll('[data-role="rec-eta"]');

  function apply() {
    const current = recommendationPool[idx];
    titleNodes.forEach((n) => (n.textContent = current.title));
    reasonNodes.forEach((n) => (n.textContent = current.reason));
    ownerNodes.forEach((n) => (n.textContent = current.owner));
    etaNodes.forEach((n) => (n.textContent = current.eta));
  }

  document.querySelectorAll('[data-action="cycle-recommendation"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      idx = (idx + 1) % recommendationPool.length;
      apply();
    });
  });

  apply();
}

renderNow();
renderSignals();
bindRecommendationSwitch();

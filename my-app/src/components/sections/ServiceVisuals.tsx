import type { ServiceVisual } from "../../data/site";

/*
  Six illustrations, one per service. Pure SVG + CSS: no images, no runtime cost
  beyond compositor animations, and they pause off screen ([data-inview]).
  They are illustrative interfaces, not product screenshots.
*/

const AppVisual = () => (
  <div className="sv sv-app" aria-hidden="true">
    <div className="sv-app-window">
      <div className="sv-app-bar">
        <i />
        <i />
        <i />
        <span className="x-meta">app.yourproduct.com</span>
      </div>
      <div className="sv-app-body">
        <div className="sv-app-side">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={i === 1 ? "is-on" : ""} />
          ))}
        </div>
        <div className="sv-app-main">
          <div className="sv-app-kpis">
            <span>
              <b />
              <em />
            </span>
            <span>
              <b />
              <em />
            </span>
            <span>
              <b />
              <em />
            </span>
          </div>
          <div className="sv-app-chart">
            {[38, 55, 42, 68, 60, 78, 72, 90, 84].map((h, i) => (
              <span
                key={i}
                style={{ "--h": `${h}%`, "--i": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="sv-float sv-float-a">
      <span className="x-dot" /> Deployed to staging
    </div>
    <div className="sv-float sv-float-b">
      <span className="sv-avatar" />
      <span className="sv-lines">
        <b />
        <em />
      </span>
      <span className="sv-cta">Sign up</span>
    </div>
    <div className="sv-float sv-float-c">
      <span className="sv-toggle" /> Weekly demo
    </div>
  </div>
);

const MODULES = [
  { x: 60, y: 60, l: "Leads" },
  { x: 260, y: 40, l: "Accounts" },
  { x: 440, y: 80, l: "Approvals" },
  { x: 440, y: 230, l: "Billing" },
  { x: 250, y: 260, l: "Reports" },
  { x: 60, y: 220, l: "Inventory" },
];

const ModulesVisual = () => (
  <div className="sv sv-modules" aria-hidden="true">
    <svg viewBox="0 0 520 310">
      {MODULES.map((m, i) => (
        <path
          key={`l${i}`}
          className="sv-flow"
          style={{ "--i": i } as React.CSSProperties}
          d={`M${m.x + 30} ${m.y + 16} C ${(m.x + 290) / 2} ${m.y + 16}, ${(m.x + 290) / 2} 155, 260 155`}
        />
      ))}
      <g className="sv-hub">
        <rect x="205" y="130" width="110" height="50" rx="12" />
        <text x="260" y="160" textAnchor="middle">
          Workflow
        </text>
      </g>
      {MODULES.map((m, i) => (
        <g
          key={m.l}
          className="sv-mod"
          style={{ "--i": i } as React.CSSProperties}
        >
          <rect x={m.x - 20} y={m.y} width="100" height="32" rx="8" />
          <circle cx={m.x - 6} cy={m.y + 16} r="3.5" />
          <text x={m.x + 4} y={m.y + 20}>
            {m.l}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

const AiVisual = () => {
  const cols = [
    { x: 70, ys: [70, 140, 210], labels: ["Docs", "Chats", "Data"] },
    { x: 230, ys: [50, 110, 170, 230], labels: [] },
    { x: 390, ys: [100, 180], labels: ["Answer", "Action"] },
  ];
  const edges: [number, number, number, number][] = [];
  for (let c = 0; c < cols.length - 1; c++)
    cols[c].ys.forEach((y1) =>
      cols[c + 1].ys.forEach((y2) =>
        edges.push([cols[c].x, y1, cols[c + 1].x, y2]),
      ),
    );
  return (
    <div className="sv sv-ai" aria-hidden="true">
      <svg viewBox="0 0 470 280">
        {edges.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className="sv-edge"
            style={{ "--i": i % 7 } as React.CSSProperties}
          />
        ))}
        {cols.map((c, ci) =>
          c.ys.map((y, yi) => (
            <g
              key={`${ci}-${yi}`}
              className={`sv-node sv-node-${ci}`}
              style={{ "--i": yi + ci } as React.CSSProperties}
            >
              <circle cx={c.x} cy={y} r={ci === 1 ? 7 : 9} />
              {c.labels[yi] && (
                <text
                  x={ci === 0 ? c.x - 18 : c.x + 18}
                  y={y + 4}
                  textAnchor={ci === 0 ? "end" : "start"}
                >
                  {c.labels[yi]}
                </text>
              )}
            </g>
          )),
        )}
      </svg>
      <div className="sv-ai-chat">
        <span className="sv-ai-typing">
          <i />
          <i />
          <i />
        </span>
        <span className="x-meta">source: policy.pdf · p.4</span>
      </div>
    </div>
  );
};

const SYSTEMS = [
  { x: 70, y: 50, l: "CRM" },
  { x: 70, y: 150, l: "ERP" },
  { x: 70, y: 250, l: "Database" },
  { x: 530, y: 50, l: "WhatsApp" },
  { x: 530, y: 150, l: "Razorpay" },
  { x: 530, y: 250, l: "Stripe" },
];

const IntegrationsVisual = () => (
  <div className="sv sv-int" aria-hidden="true">
    <svg viewBox="0 0 600 300">
      {SYSTEMS.map((s, i) => {
        const left = s.x < 300;
        const sx = left ? s.x + 52 : s.x - 52;
        const ex = left ? 245 : 355;
        return (
          <g key={s.l}>
            <path
              className="sv-wire"
              d={`M${sx} ${s.y} H ${(sx + ex) / 2} V 150 H ${ex}`}
            />
            <path
              className="sv-packet"
              style={{ "--i": i } as React.CSSProperties}
              d={`M${sx} ${s.y} H ${(sx + ex) / 2} V 150 H ${ex}`}
            />
          </g>
        );
      })}
      <g className="sv-gw">
        <rect x="245" y="110" width="110" height="80" rx="14" />
        <text x="300" y="146" textAnchor="middle" className="sv-gw-t">
          API
        </text>
        <text x="300" y="166" textAnchor="middle" className="sv-gw-s">
          gateway
        </text>
      </g>
      {SYSTEMS.map((s) => (
        <g key={s.l} className="sv-sys">
          <rect x={s.x - 52} y={s.y - 18} width="104" height="36" rx="9" />
          <text x={s.x} y={s.y + 5} textAnchor="middle">
            {s.l}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

const LOG = [
  ["feat", "checkout: add UPI flow"],
  ["fix", "approvals: retry on timeout"],
  ["test", "e2e: onboarding happy path"],
  ["chore", "deploy staging · v0.9.3"],
];

const TeamVisual = () => (
  <div className="sv sv-team" aria-hidden="true">
    <div className="sv-term">
      <div className="sv-term-bar x-meta">~/product — git log</div>
      <ul>
        {LOG.map(([k, m], i) => (
          <li
            key={m}
            style={{ "--i": i } as React.CSSProperties}
            className="x-meta"
          >
            <span className={`sv-k sv-k-${k}`}>{k}</span> {m}
          </li>
        ))}
        <li
          className="x-meta sv-caret"
          style={{ "--i": LOG.length } as React.CSSProperties}
        >
          $ <span />
        </li>
      </ul>
    </div>
    <div className="sv-board">
      {["Product", "Design", "Engineering", "QA"].map((r, i) => (
        <div
          key={r}
          className="sv-role"
          style={{ "--i": i } as React.CSSProperties}
        >
          <span className="sv-role-dot">{r[0]}</span>
          <span className="x-meta">{r}</span>
          <span className="sv-role-bar">
            <i />
          </span>
        </div>
      ))}
    </div>
  </div>
);

const BlueprintVisual = () => (
  <div className="sv sv-bp" aria-hidden="true">
    <svg viewBox="0 0 560 300">
      <defs>
        <pattern
          id="bp-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path d="M20 0H0V20" fill="none" className="sv-bp-grid" />
        </pattern>
      </defs>
      <rect width="560" height="300" fill="url(#bp-grid)" />
      <g className="sv-bp-draw">
        <rect
          x="40"
          y="40"
          width="140"
          height="70"
          rx="6"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <rect
          x="240"
          y="40"
          width="140"
          height="70"
          rx="6"
          style={{ "--i": 1 } as React.CSSProperties}
        />
        <rect
          x="240"
          y="190"
          width="140"
          height="70"
          rx="6"
          style={{ "--i": 2 } as React.CSSProperties}
        />
        <rect
          x="440"
          y="115"
          width="90"
          height="70"
          rx="35"
          style={{ "--i": 3 } as React.CSSProperties}
        />
        <path d="M180 75 H240" style={{ "--i": 4 } as React.CSSProperties} />
        <path d="M310 110 V190" style={{ "--i": 5 } as React.CSSProperties} />
        <path
          d="M380 75 C 420 75, 420 150, 440 150"
          style={{ "--i": 6 } as React.CSSProperties}
        />
        <path
          d="M380 225 C 420 225, 420 150, 440 150"
          style={{ "--i": 7 } as React.CSSProperties}
        />
      </g>
      <g className="sv-bp-label">
        <text x="110" y="80" textAnchor="middle">
          Client
        </text>
        <text x="310" y="80" textAnchor="middle">
          Service
        </text>
        <text x="310" y="230" textAnchor="middle">
          Queue
        </text>
        <text x="485" y="155" textAnchor="middle">
          Store
        </text>
        <text x="40" y="285" className="sv-bp-note">
          REV 03 · build vs buy: build
        </text>
        <path d="M40 130 H180" className="sv-bp-dim" />
        <text x="110" y="146" textAnchor="middle" className="sv-bp-note">
          boundary
        </text>
      </g>
    </svg>
  </div>
);

export default function ServiceVisualFor({ kind }: { kind: ServiceVisual }) {
  switch (kind) {
    case "app":
      return <AppVisual />;
    case "modules":
      return <ModulesVisual />;
    case "ai":
      return <AiVisual />;
    case "integrations":
      return <IntegrationsVisual />;
    case "team":
      return <TeamVisual />;
    case "blueprint":
      return <BlueprintVisual />;
  }
}

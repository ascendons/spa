import { useRef } from "react";
import {
  BRIEFGUARD,
  CRM,
  DPP,
  IMPAKT,
  LOGISTICS,
  PRODUCT_URLS,
  listify,
} from "../../data/site";
import { useInViewAttr } from "../../lib/motion";
import { Button } from "../ui/ui";
import briefguardShot from "../../assets/products/briefguard.webp";
import dppShot from "../../assets/products/dpp.webp";
import impaktShot from "../../assets/products/impakt.webp";
import "./ProductsShowcase.css";

/** Illustrative CRM interface built from the documented feature set (no screenshot exists yet). */
export function CrmMockup() {
  const cols = [
    { name: "New", n: 3, cards: ["Website enquiry", "Bulk order request"] },
    { name: "Qualified", n: 2, cards: ["New outlet rollout"] },
    { name: "Proposal", n: 2, cards: ["Annual renewal", "Pilot · 3 branches"] },
    { name: "Won", n: 1, cards: ["Service contract"] },
  ];
  return (
    <div className="crm" data-anim aria-hidden="true">
      <div className="crm-top">
        <span className="crm-title">Sales pipeline</span>
        <span className="crm-branch x-meta">
          <span className="x-dot" /> Branch: West region ▾
        </span>
      </div>
      <div className="crm-cols">
        {cols.map((c, ci) => (
          <div key={c.name} className="crm-col">
            <p className="crm-col-head x-meta">
              {c.name} <span>{c.n}</span>
            </p>
            {c.cards.map((card, i) => (
              <div
                key={card}
                className={`crm-card ${ci === 1 && i === 0 ? "crm-card--moving" : ""}`}
              >
                <b>{card}</b>
                <span className="crm-meta">
                  <i
                    className="crm-av"
                    style={
                      { "--h": (ci * 70 + i * 40) % 360 } as React.CSSProperties
                    }
                  />
                  <em />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="crm-toast crm-toast--approval">
        <span className="crm-toast-icon">✓</span>
        <span>
          <b>Discount approved</b>
          <em className="x-meta">Regional manager · 2-step approval</em>
        </span>
      </div>
      <div className="crm-toast crm-toast--wa">
        <span className="crm-toast-icon crm-toast-icon--wa">◎</span>
        <span>
          <b>Follow-up sent on WhatsApp</b>
          <em className="x-meta">Automation · stage changed</em>
        </span>
      </div>
    </div>
  );
}

/** Illustrative LR register built from the verified feature set (the public URL is the client's marketing site, not the app). */
function LogisticsMockup() {
  const rows = [
    { lr: "LR-24871", route: "Surat → Pune", series: "Paid", status: "In transit", tone: "move" },
    { lr: "LR-24870", route: "Surat → Indore", series: "To-pay", status: "Delivered · POD", tone: "ok" },
    { lr: "LR-24869", route: "Vapi → Nagpur", series: "Billed", status: "Loaded · LC-1182", tone: "move" },
    { lr: "LR-24868", route: "Surat → Jaipur", series: "Billed", status: "Booked", tone: "idle" },
  ];
  return (
    <span className="lgx" aria-hidden="true">
      <span className="lgx-top">
        <b>LR register</b>
        <span className="x-meta">Branch: Surat ▾</span>
      </span>
      <span className="lgx-rows">
        {rows.map((r) => (
          <span key={r.lr} className="lgx-row">
            <span className="lgx-lr">{r.lr}</span>
            <span className="lgx-route">{r.route}</span>
            <span className="lgx-series x-meta">{r.series}</span>
            <span className={`lgx-status lgx-status--${r.tone}`}>{r.status}</span>
          </span>
        ))}
      </span>
      <span className="lgx-note x-meta">Illustrative interface</span>
    </span>
  );
}

type MoreProduct = {
  name: string;
  kind: string;
  summary: string;
  points: readonly string[];
  href: string;
  host: string;
  alt: string;
  image?: string;
  w?: number;
  h?: number;
  mockup?: React.ReactNode;
};

const MORE_PRODUCTS: MoreProduct[] = [
  {
    name: DPP.name,
    kind: DPP.kind,
    summary: DPP.summary,
    points: DPP.highlights,
    href: PRODUCT_URLS.dpp,
    host: "dpp.ascendons.in",
    image: dppShot,
    w: 1554,
    h: 616,
    alt: "Ascendons DPP homepage: 'One product passport. Connected supply chains. Trusted product data.' beside an 86% DPP readiness assessment and a phone showing a passport for a recycled denim jacket.",
  },
  {
    name: IMPAKT.name,
    kind: IMPAKT.kind,
    summary: IMPAKT.summary,
    points: IMPAKT.highlights,
    href: PRODUCT_URLS.impakt,
    host: "impakt.ascendons.in",
    image: impaktShot,
    w: 1554,
    h: 676,
    alt: "Impakt homepage: 'Every life you touch, measured with care.' beside a photo of students with a field-report notification and an enrolment counter.",
  },
  {
    name: LOGISTICS.name,
    kind: LOGISTICS.kind,
    summary: LOGISTICS.summary,
    points: LOGISTICS.highlights,
    href: PRODUCT_URLS.logistics,
    host: "app.parshuramexpress.com",
    alt: "",
    mockup: <LogisticsMockup />,
  },
];

export default function ProductsShowcase({
  withHeader = true,
}: {
  withHeader?: boolean;
}) {
  const root = useRef<HTMLElement>(null);
  useInViewAttr(root);

  return (
    <section
      ref={root}
      className="x-section pr-section"
      aria-labelledby={withHeader ? "pr-title" : undefined}
    >
      <div className="x-wrap">
        {withHeader && (
          <div className="x-head x-head--split">
            <div>
              <h2 id="pr-title" className="x-h2">
                We don't just build products for clients. We build our own.
              </h2>
            </div>
            <p className="x-lede">
              The same team that works on client projects designs, ships and
              runs these. What we learn operating them goes straight into your
              build.
            </p>
          </div>
        )}

        {/* BriefGuard */}
        <article className="pr-product">
          <div className="pr-stage pr-stage--bg">
            <div className="pr-stage-inner">
              <div className="pr-browser">
                <div className="pr-browser-bar">
                  <i />
                  <i />
                  <i />
                  <span className="x-meta">briefguard.ascendons.in</span>
                </div>
                <img
                  src={briefguardShot}
                  alt="BriefGuard homepage: 'Everything legal. One intelligent platform.' beside a draft where one citation is verified and one is flagged as fabricated."
                  width="1600"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pr-callout pr-callout--ok" aria-hidden="true">
                <span className="pr-callout-icon">✓</span>
                <span>
                  <b>Citation verified</b>
                  <em className="x-meta">Checked against the judgment</em>
                </span>
              </div>
              <div className="pr-callout pr-callout--warn" aria-hidden="true">
                <span className="pr-callout-icon">!</span>
                <span>
                  <b>Citation flagged</b>
                  <em className="x-meta">Not found in the cited judgment</em>
                </span>
              </div>
            </div>
          </div>

          <div className="pr-info">
            <div className="pr-info-head">
              <p className="pr-kind x-meta">{BRIEFGUARD.kind}</p>
              <h3 className="pr-name">{BRIEFGUARD.name}</h3>
              <p className="x-lede">{BRIEFGUARD.summary}</p>
            </div>
            <dl className="pr-features">
              {BRIEFGUARD.features.map((f) => (
                <div key={f.title}>
                  <dt>{f.title}</dt>
                  <dd>{f.body}</dd>
                </div>
              ))}
            </dl>
            <div className="pr-actions">
              <Button href={PRODUCT_URLS.briefguard} icon="external">
                Explore BriefGuard
              </Button>
              <p className="pr-audience x-meta">
                Made for {listify(BRIEFGUARD.audience).toLowerCase()}.
              </p>
            </div>
          </div>
        </article>

        {/* CRM */}
        <article className="pr-product pr-product--flip" id="crm">
          <div className="pr-stage pr-stage--crm">
            <div className="pr-stage-inner">
              <CrmMockup />
            </div>
            <p className="pr-note x-meta">Illustrative interface</p>
          </div>

          <div className="pr-info">
            <div className="pr-info-head">
              <p className="pr-kind x-meta">{CRM.kind}</p>
              <h3 className="pr-name">{CRM.name}</h3>
              <p className="x-lede">{CRM.summary}</p>
            </div>
            <dl className="pr-features">
              {CRM.features.map((f) => (
                <div key={f.title}>
                  <dt>{f.title}</dt>
                  <dd>{f.body}</dd>
                </div>
              ))}
            </dl>
            <div className="pr-actions">
              <Button href={PRODUCT_URLS.crm} icon="external">
                Explore Ascendons CRM
              </Button>
              <p className="pr-audience x-meta">
                Connects to {listify(CRM.integrations)}.
              </p>
            </div>
          </div>
        </article>

        {/* More products — DPP and Impakt (live-site screenshots) and Logistics (illustrative) */}
        <div className="pr-more">
          <p className="pr-more-label x-meta">More from the studio</p>
          <div className="pr-more-grid">
            {MORE_PRODUCTS.map((p) => (
              <article key={p.name} className="pr-card x-panel">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-card-shot"
                  aria-label={`Visit ${p.name}`}
                >
                  <span className="pr-browser-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span className="x-meta">{p.host}</span>
                  </span>
                  {p.mockup ?? (
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </a>
                <div className="pr-card-body">
                  <p className="pr-kind x-meta">{p.kind}</p>
                  <h3 className="pr-card-name">{p.name}</h3>
                  <p className="x-body">{p.summary}</p>
                  <ul className="pr-card-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <Button href={p.href} icon="external" variant="ghost">
                    Explore {p.name}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

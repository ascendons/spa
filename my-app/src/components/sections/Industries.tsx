import { useId, useRef, useState } from "react";
import { INDUSTRIES, type IndustryGlyph } from "../../data/site";
import { isFinePointer } from "../../lib/motion";
import "./Industries.css";

const GLYPHS: Record<IndustryGlyph, React.ReactNode> = {
  rocket: (
    <>
      <path d="M100 30c26 18 38 48 34 86l-20 22H86l-20-22c-4-38 8-68 34-86z" />
      <circle cx="100" cy="80" r="12" />
      <path d="M66 116l-22 18 6 26 24-14M134 116l22 18-6 26-24-14" />
      <path className="ind-flame" d="M90 146c0 14 10 26 10 26s10-12 10-26" />
    </>
  ),
  grid: (
    <>
      <rect x="36" y="36" width="52" height="52" rx="8" />
      <rect x="112" y="36" width="52" height="52" rx="8" />
      <rect x="36" y="112" width="52" height="52" rx="8" />
      <rect
        x="112"
        y="112"
        width="52"
        height="52"
        rx="8"
        className="ind-accent"
      />
      <path d="M88 62h24M62 88v24M138 88v24M88 138h24" className="ind-flow" />
    </>
  ),
  scale: (
    <>
      <path d="M100 34v130M64 164h72M40 64h120" />
      <path d="M40 64l-22 48h44zM160 64l-22 48h44z" />
      <path
        d="M18 112a22 10 0 0044 0M138 112a22 10 0 0044 0"
        className="ind-accent"
      />
      <circle cx="100" cy="34" r="6" />
    </>
  ),
  pulse: (
    <>
      <rect x="26" y="40" width="148" height="120" rx="14" />
      <path
        d="M40 104h28l10-30 16 56 14-44 10 18h42"
        className="ind-flow ind-accent"
      />
    </>
  ),
  heart: (
    <>
      <path d="M100 160S36 120 36 78c0-22 16-38 36-38 13 0 22 7 28 16 6-9 15-16 28-16 20 0 36 16 36 38 0 42-64 82-64 82z" />
      <circle cx="58" cy="168" r="5" className="ind-accent" />
      <circle cx="100" cy="178" r="5" className="ind-accent" />
      <circle cx="142" cy="168" r="5" className="ind-accent" />
    </>
  ),
  cart: (
    <>
      <path d="M26 44h22l20 84h86l16-60H58" />
      <circle cx="78" cy="152" r="10" />
      <circle cx="144" cy="152" r="10" />
      <path d="M92 92h52" className="ind-flow ind-accent" />
    </>
  ),
};

export default function Industries() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();
  const current = INDUSTRIES[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = INDUSTRIES.length;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (i + 1) % n
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? (i - 1 + n) % n
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? n - 1
              : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="x-section ind-section" aria-labelledby="ind-title">
      <div className="x-wrap">
        <div className="x-head x-head--split">
          <div>
            <h2 id="ind-title" className="x-h2">
              Different industries. The same problem underneath.
            </h2>
          </div>
          <p className="x-lede">
            Work that runs on spreadsheets, inboxes and memory. Here's where
            we've seen it, and what we build instead.
          </p>
        </div>

        <div className="ind-grid">
          <div
            className="ind-tabs"
            role="tablist"
            aria-label="Industries"
            aria-orientation="vertical"
          >
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`${base}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`${base}-panel`}
                tabIndex={i === active ? 0 : -1}
                className="ind-tab"
                onClick={() => setActive(i)}
                onPointerEnter={() => isFinePointer() && setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div
            id={`${base}-panel`}
            role="tabpanel"
            aria-labelledby={`${base}-tab-${active}`}
            className="ind-panel x-panel"
          >
            <div key={current.id} className="ind-panel-in">
              <svg
                className="ind-glyph"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                {GLYPHS[current.glyph]}
              </svg>
              <div className="ind-copy">
                <h3 className="x-h3">{current.name}</h3>
                <div className="ind-ps">
                  <p className="ind-label x-meta">The problem</p>
                  <p className="ind-problem">{current.problem}</p>
                </div>
                <div className="ind-ps">
                  <p className="ind-label ind-label--teal x-meta">
                    What we build
                  </p>
                  <p className="ind-solution">{current.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

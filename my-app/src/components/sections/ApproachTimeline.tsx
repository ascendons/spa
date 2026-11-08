import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PHASES } from "../../data/site";
import { prefersReducedMotion } from "../../lib/motion";
import "./ApproachTimeline.css";

// Week spans for the Gantt strip (1-indexed weeks, inclusive). Evolve runs past launch.
const SPANS: [number, number][] = [
  [1, 1],
  [1, 2],
  [2, 5],
  [5, 6],
  [6, 7],
];

export default function ApproachTimeline() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setActive(PHASES.length - 1);
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tl-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".tl-list",
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
      // onEnter / onLeaveBack also fire when a fast scroll jumps a trigger.
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          onEnter: () => setActive(i),
          onLeaveBack: () => setActive(Math.max(0, i - 1)),
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="x-section x-paper tl-section"
      aria-labelledby="tl-title"
    >
      <div className="x-wrap tl-grid">
        <div className="tl-aside">
          <div className="tl-sticky">
            <h2 id="tl-title" className="x-h2">
              From first conversation to production launch.
            </h2>

            <div className="tl-model">
              <p className="tl-model-figure">
                4–6 <span>weeks</span>
              </p>
              <p className="tl-model-label">
                A typical MVP, idea to launch, with a fixed scope and price and
                a working demo every week.
              </p>

              <div className="tl-gantt" aria-hidden="true">
                <div className="tl-gantt-weeks x-meta">
                  {[1, 2, 3, 4, 5, 6].map((w) => (
                    <span key={w}>W{w}</span>
                  ))}
                  <span>→</span>
                </div>
                {PHASES.map((p, i) => (
                  <div key={p.n} className="tl-gantt-row">
                    <span className="tl-gantt-name x-meta">{p.title}</span>
                    <span className="tl-gantt-track">
                      <span
                        className={`tl-gantt-bar ${i === active ? "is-active" : ""} ${i <= active ? "is-done" : ""} ${i === 4 ? "is-open" : ""}`}
                        style={{
                          gridColumn: `${SPANS[i][0]} / ${SPANS[i][1] + 1}`,
                        }}
                      />
                    </span>
                  </div>
                ))}
              </div>
              <p className="tl-model-note">
                Larger systems, integrations and dedicated-team work are scoped
                individually.
              </p>
            </div>
          </div>
        </div>

        <ol className="tl-list">
          <span className="tl-rail" aria-hidden="true">
            <span className="tl-progress" />
          </span>
          {PHASES.map((p, i) => (
            <li
              key={p.n}
              className={`tl-item ${i === active ? "is-active" : ""} ${i < active ? "is-past" : ""}`}
            >
              <span className="tl-node" aria-hidden="true" />
              <p className="tl-meta x-meta">
                <span>Phase {p.n}</span>
                <span>{p.when}</span>
              </p>
              <h3 className="tl-title">{p.title}</h3>
              <p className="tl-body">{p.body}</p>
              <p className="tl-output x-meta">
                <span>Output</span> {p.output}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

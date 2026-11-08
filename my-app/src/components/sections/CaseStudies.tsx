import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../data/site";
import "./CaseStudies.css";

type Props = { withHeader?: boolean; headingLevel?: "h2" | "h3" };

/** Hub-and-spoke diagram of the systems a case study connected. */
function ArchDiagram({ hub, nodes }: { hub: string; nodes: string[] }) {
  const pos = [
    [70, 60],
    [430, 60],
    [70, 240],
    [430, 240],
  ];
  return (
    <svg
      className="cs-arch"
      viewBox="0 0 500 300"
      role="img"
      aria-label={`${hub} connected to ${nodes.join(", ")}`}
    >
      {nodes.map((_, i) => (
        <path
          key={i}
          className="cs-arch-wire"
          style={{ "--i": i } as React.CSSProperties}
          d={`M${pos[i][0]} ${pos[i][1]} C 250 ${pos[i][1]}, ${pos[i][0]} 150, 250 150`}
        />
      ))}
      <g className="cs-arch-hub">
        <circle cx="250" cy="150" r="44" />
        <text x="250" y="154" textAnchor="middle">
          {hub}
        </text>
      </g>
      {nodes.map((n, i) => (
        <g key={n} className="cs-arch-node">
          <rect
            x={pos[i][0] - 62}
            y={pos[i][1] - 17}
            width="124"
            height="34"
            rx="9"
          />
          <text x={pos[i][0]} y={pos[i][1] + 5} textAnchor="middle">
            {n}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function CaseStudies({
  withHeader = true,
  headingLevel = "h3",
}: Props) {
  const H = headingLevel;
  return (
    <section
      className="x-section x-paper cs-section"
      aria-labelledby={withHeader ? "cs-title" : undefined}
    >
      <div className="x-wrap">
        {withHeader && (
          <div className="x-head">
            <div>
              <h2 id="cs-title" className="x-h2">
                Systems that run every day, for real organisations.
              </h2>
            </div>
          </div>
        )}

        <div className="cs-list">
          {CASE_STUDIES.map((c) => (
            <article key={c.id} className="cs" id={c.id}>
              <div className="cs-cover">
                <div className="cs-cover-top">
                  <span className="x-meta">{c.sector}</span>
                </div>
                <ArchDiagram
                  hub={c.id === "whatsapp" ? "Automation" : "Platform"}
                  nodes={c.architecture}
                />
              </div>

              <div className="cs-body">
                <H className="cs-title">{c.title}</H>

                <div className="cs-block">
                  <p className="cs-label x-meta">The problem</p>
                  <p className="cs-text">{c.problem}</p>
                </div>

                <div className="cs-block">
                  <p className="cs-label x-meta">What we built</p>
                  <dl className="cs-solution">
                    {c.solution.map(([t, d]) => (
                      <div key={t}>
                        <dt>{t}</dt>
                        <dd>{d}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="cs-result">
                  <p className="cs-label x-meta">Result</p>
                  <p>{c.result}</p>
                </div>

                <Link to={c.link} className="x-link">
                  How we build this
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

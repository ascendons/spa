import { useRef } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/site";
import { useInViewAttr } from "../../lib/motion";
import ServiceVisualFor from "./ServiceVisuals";
import "./ServicesSection.css";

type Props = {
  /** Show the section header (the /services page supplies its own). */
  withHeader?: boolean;
};

export default function ServicesSection({ withHeader = true }: Props) {
  const ref = useRef<HTMLElement>(null);
  useInViewAttr(ref);

  return (
    <section
      ref={ref}
      className="x-section svc-section"
      aria-labelledby={withHeader ? "svc-title" : undefined}
    >
      <div className="x-wrap">
        {withHeader && (
          <div className="x-head x-head--split">
            <div>
              <h2 id="svc-title" className="x-h2">
                Engineering the next generation of digital products.
              </h2>
            </div>
            <p className="x-lede">
              Six ways we work with founders and businesses, from a first
              version to the systems a company runs on.
            </p>
          </div>
        )}

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className={`svc x-panel svc--${s.visual}`}
              data-anim
            >
              <div className="svc-visual">
                <ServiceVisualFor kind={s.visual} />
              </div>
              <div className="svc-text">
                <h3 className="x-h3">{s.title}</h3>
                <p className="x-body">{s.description}</p>
                <ul className="svc-points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link to={s.cta.to} className="x-link svc-cta">
                  {s.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

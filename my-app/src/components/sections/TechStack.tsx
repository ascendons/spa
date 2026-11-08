import { STACK } from "../../data/site";
import "./TechStack.css";

export default function TechStack() {
  return (
    <section className="x-section st-section" aria-labelledby="st-title">
      <div className="x-wrap">
        <div className="x-head">
          <div>
            <h2 id="st-title" className="x-h2">
              A stack we've run in production, layer by layer.
            </h2>
          </div>
        </div>

        <div className="st-scene">
          <div className="st-stack">
            {STACK.map((l) => (
              <div key={l.layer} className="st-layer">
                <div className="st-layer-head">
                  <h3>{l.layer}</h3>
                  <p>{l.tagline}</p>
                </div>
                <ul className="st-items">
                  {l.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

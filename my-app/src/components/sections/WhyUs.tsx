import { useRef } from "react";
import { PROOF, REASONS } from "../../data/site";
import { useCountUp } from "../../lib/motion";
import "./WhyUs.css";

/** A published figure set inside the sentence it belongs to. */
function ProofLine({ value, suffix, before, after }: (typeof PROOF)[number]) {
  const num = useRef<HTMLSpanElement>(null);
  useCountUp(num, value);
  return (
    <p className="why-proof">
      {before}{" "}
      <strong>
        <span ref={num}>{value.toLocaleString("en-US")}</span>
        {suffix}
      </strong>{" "}
      {after}
    </p>
  );
}

export default function WhyUs() {
  return (
    <section className="x-section why-section" aria-labelledby="why-title">
      <div className="x-wrap">
        <h2 id="why-title" className="x-h2 why-title">
          Small enough to move fast. Experienced enough to build it right.
        </h2>

        <div className="why-proofs">
          {PROOF.map((p) => (
            <ProofLine key={p.after} {...p} />
          ))}
        </div>

        <ul className="why-list">
          {REASONS.map((r) => (
            <li key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

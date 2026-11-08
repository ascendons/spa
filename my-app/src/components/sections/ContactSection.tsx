import { useEffect, useId, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CONTACT, PROJECT_TYPES, type ProjectTypeValue } from "../../data/site";
import { submitLead, type SubmitStatus } from "../../utils/submitLead";
import "./ContactSection.css";

type Props = {
  /** Lead subject, so enquiries can be traced to the page they came from. */
  source: string;
  headingLevel?: "h1" | "h2";
};

const isType = (v: string | null): v is ProjectTypeValue =>
  PROJECT_TYPES.some((t) => t.value === v);

export default function ContactSection({ source, headingLevel = "h2" }: Props) {
  const H = headingLevel;
  const id = useId();
  const [params] = useSearchParams();
  const initial = params.get("type");
  const [type, setType] = useState<ProjectTypeValue>(
    isType(initial) ? initial : "mvp",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // Hero / service links pass ?type=… — keep the selection in sync.
  useEffect(() => {
    if (isType(initial)) setType(initial);
  }, [initial]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const label = PROJECT_TYPES.find((t) => t.value === type)?.label ?? "";
    // Field names match the existing Google Apps Script lead endpoint.
    const body = new FormData();
    body.append("name", form.name);
    body.append("email", form.email);
    body.append("company", form.company);
    body.append("problem", `[${label}] ${form.problem}`);
    body.append("message", form.problem);
    body.append("subject", `${source} — ${label}`);
    const ok = await submitLead(body);
    setStatus(ok ? "success" : "error");
    if (ok) setForm({ name: "", email: "", company: "", problem: "" });
  };

  return (
    <section
      id="contact"
      className="x-section ct-section"
      aria-labelledby={`${id}-title`}
    >
      <div className="ct-bg" aria-hidden="true">
        <span className="ct-orb ct-orb--a" />
        <span className="ct-orb ct-orb--b" />
      </div>

      <div className="x-wrap ct-layout">
        <div className="ct-copy">
          <H id={`${id}-title`} className="x-display ct-title">
            Have an idea? Let's make it real.
          </H>
          <p className="x-lede">
            Tell us what you're building, what isn't working, or where you want
            your business to go. We'll help you figure out the next step.
          </p>

          <ul className="ct-direct">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="ct-direct-link">
                <span>
                  <span className="x-meta ct-direct-label">Email</span>
                  {CONTACT.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-direct-link"
              >
                <span>
                  <span className="x-meta ct-direct-label">WhatsApp</span>
                  {CONTACT.phoneDisplay}
                </span>
              </a>
            </li>
          </ul>
          <p className="ct-promise x-meta">We reply within one business day.</p>
        </div>

        <div className="ct-card">
          {status === "success" ? (
            <div className="ct-success" role="status">
              <span className="ct-success-mark" aria-hidden="true">
                ✓
              </span>
              <h3 className="x-h3">Thanks, it's with us.</h3>
              <p className="x-body">
                We'll reply within one business day. If it's urgent, message us
                on{" "}
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-inline"
                >
                  WhatsApp
                </a>
                .
              </p>
              <button
                type="button"
                className="x-link"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={onSubmit} noValidate={false}>
              <fieldset className="ct-types">
                <legend className="ct-legend">What are you looking for?</legend>
                <div className="ct-type-list">
                  {PROJECT_TYPES.map((t) => (
                    <label key={t.value} className="ct-type">
                      <input
                        type="radio"
                        name="projectType"
                        value={t.value}
                        checked={type === t.value}
                        onChange={() => setType(t.value)}
                      />
                      <span>{t.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="ct-row">
                <label className="ct-field">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={onChange}
                  />
                </label>
                <label className="ct-field">
                  <span>Work email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={form.email}
                    onChange={onChange}
                  />
                </label>
              </div>
              <label className="ct-field">
                <span>
                  Company <em>(optional)</em>
                </span>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={onChange}
                />
              </label>
              <label className="ct-field">
                <span>Tell us about the project</span>
                <textarea
                  name="problem"
                  rows={4}
                  required
                  placeholder="What you want to build, who it's for, and any timeline."
                  value={form.problem}
                  onChange={onChange}
                />
              </label>

              <div className="ct-foot">
                <button
                  type="submit"
                  className="x-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Start a Conversation"}
                </button>
                {status === "error" && (
                  <p className="ct-error" role="alert">
                    That didn't send. Please try again, or email{" "}
                    <a href={`mailto:${CONTACT.email}`} className="ct-inline">
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { CONTACT } from "../data/site";
import "./pages.css";

const STORAGE_KEY = "privacy_policy_accepted_v1";

const SECTIONS = [
  {
    title: "Overview",
    body: "We respect your privacy. We use cookies and similar technologies to provide, protect and improve our services. This page describes how we collect and use personal data when you use our website.",
  },
  {
    title: "What we collect",
    body: "We collect information you provide directly (for example, when you contact us) and information automatically collected (for example, cookies and analytics). We do not sell personal information to third-parties.",
  },
  {
    title: "How we use data",
    body: "We use collected information to provide and improve our services, personalize content, and respond to requests. We may also use aggregated data for analytics and internal research.",
  },
];

const Privacy = () => {
  const navigate = useNavigate();

  const acceptAndReturn = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (err) {
      console.error(err);
    }
    navigate(-1);
  };

  return (
    <div className="x-page">
      <SEO
        title="Privacy Policy"
        description="Learn how Ascendons collects, uses, and safeguards personal data and respects user privacy."
        canonicalPath="/privacy"
      />
      <article className="x-section pg-legal">
        <div className="x-wrap pg-legal-wrap">
          <h1 className="x-h2">Privacy Policy</h1>
          <p className="x-meta pg-muted">Last updated: November 30, 2025</p>

          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="x-h3">{s.title}</h2>
              <p className="x-body">{s.body}</p>
            </section>
          ))}
          <section>
            <h2 className="x-h3">Contact</h2>
            <p className="x-body">
              If you have privacy-related questions, reach out to{" "}
              <a href={`mailto:${CONTACT.email}`} className="x-link">
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

          <div className="pg-actions">
            <button type="button" className="x-btn" onClick={acceptAndReturn}>
              Accept and return
            </button>
            <button
              type="button"
              className="x-btn x-btn--ghost"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Privacy;

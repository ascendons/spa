import SEO from "../components/SEO";
import PageHero from "../components/sections/PageHero";
import { Button } from "../components/ui/ui";
import "./pages.css";

const PROBLEMS = [
  {
    title: "Manual Onboarding",
    body: "Paper-based or email-driven onboarding processes are slow, error-prone, and don't scale. Organizations wait weeks to get onboarded.",
  },
  {
    title: "Compliance Risk",
    body: "Missing documentation, incomplete audit trails, and lack of verification create compliance and governance risks that can impact funding and reputation.",
  },
  {
    title: "Inefficient Workflows",
    body: "Approval processes rely on email chains and manual checklists. Delays pile up, and there's no visibility into where requests are stuck.",
  },
];

const CAPABILITIES = [
  {
    title: "Organization Onboarding",
    body: "Streamlined registration process with multi-step forms, document upload, and automated verification workflows. Organizations can self-register and track their application status in real-time.",
  },
  {
    title: "Document Upload & Verification",
    body: "Secure document upload with automatic validation, format checks, and verification workflows. Support for multiple document types with version control and audit trails.",
  },
  {
    title: "Admin Approvals",
    body: "Configurable approval workflows with multi-level approvals, role-based permissions, and automated notifications. Track approval status and history with full audit trails.",
  },
  {
    title: "Role-Based Access",
    body: "Granular permission system with roles for admins, reviewers, organizations, and donors. Control who can view, edit, or approve what—with fine-grained access controls.",
  },
  {
    title: "Secure Payment Integrations",
    body: "Integrated payment gateways for donations, fees, and transactions. Support for multiple payment methods with secure processing, receipts, and financial reporting.",
  },
  {
    title: "Audit-Ready Workflows",
    body: "Complete audit trails for all actions, document changes, and approvals. Export-ready reports for compliance, governance, and financial audits.",
  },
];

const REASONS = [
  {
    title: "Faster Onboarding",
    body: "Reduce onboarding time from weeks to days with automated workflows and self-service registration.",
  },
  {
    title: "Better Governance",
    body: "Complete visibility into all processes, approvals, and transactions with full audit trails and reporting.",
  },
  {
    title: "Scalable Architecture",
    body: "Built to handle growth—from hundreds to thousands of organizations without performance degradation.",
  },
];

const FundraisingPlatforms = () => {
  return (
    <div className="x-page">
      <SEO
        title="Fundraising & Workflow Platforms for Nonprofits"
        description="Scalable platforms for nonprofits and institutions: automated onboarding, document verification, multi-level approvals, payment gateways, and audit-ready workflows."
        canonicalPath="/solutions/fundraising-workflow-platforms"
        keywords="nonprofit software platforms, NGO fundraising platform, institutional workflow automation, NGO donor management"
      />
      <PageHero
        title="Fundraising & Workflow Platforms"
        lede="Complete platform solutions for nonprofits and institutions. From organization onboarding to secure payments, we build systems that handle complex workflows, compliance, and scale."
      >
        <div className="pg-actions">
          <Button to="/contact">Discuss Your Platform</Button>
          <Button href="#capabilities" variant="ghost">
            Core capabilities
          </Button>
        </div>
      </PageHero>

      {/* The challenge */}
      <section
        className="x-section x-section--tight"
        aria-labelledby="fr-problem-title"
      >
        <div className="x-wrap">
          <div className="x-head x-head--split">
            <div>
              <h2 id="fr-problem-title" className="x-h2">
                Manual Processes Don't Scale for Nonprofits
              </h2>
            </div>
            <p className="x-lede">
              Nonprofits and institutions struggle with manual onboarding,
              document verification, and approval workflows. Spreadsheets and
              email chains create compliance risks, slow down operations, and
              make it impossible to scale. You need a platform that handles
              everything from organization registration to payment
              processing—with full audit trails and role-based access.
            </p>
          </div>
          <div className="sol-problems">
            {PROBLEMS.map((p) => (
              <article key={p.title} className="sol-problem">
                <h3 className="x-h3">{p.title}</h3>
                <p className="x-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        className="x-section x-section--tight x-paper"
        aria-labelledby="fr-approach-title"
      >
        <div className="x-wrap sol-statement">
          <div>
            <h2 id="fr-approach-title" className="x-h2">
              Platform-Driven Approach
            </h2>
          </div>
          <p className="sol-statement-body">
            We build complete fundraising and workflow platforms that handle
            organization onboarding, document verification, admin approvals,
            role-based access, secure payments, and audit-ready workflows—all in
            one integrated system. Every feature is designed for compliance,
            scalability, and real-world operations.
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <section
        id="capabilities"
        className="x-section"
        aria-labelledby="fr-cap-title"
      >
        <div className="x-wrap">
          <div className="x-head">
            <h2 id="fr-cap-title" className="x-h2">
              Everything You Need in One Platform
            </h2>
          </div>
          <div className="sol-cards sol-cards--3">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="sol-card x-panel">
                <h3 className="x-h3">{c.title}</h3>
                <p className="x-body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="x-section x-paper" aria-labelledby="fr-why-title">
        <div className="x-wrap">
          <div className="x-head">
            <h2 id="fr-why-title" className="x-h2">
              Why Choose Our Platform Approach
            </h2>
          </div>
          <ul className="sol-steps">
            {REASONS.map((r) => (
              <li key={r.title} className="sol-step">
                <h3 className="sol-step-title">{r.title}</h3>
                <p className="sol-step-body">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="x-section x-section--tight sol-cta"
        aria-labelledby="fr-cta-title"
      >
        <div className="x-wrap">
          <div className="sol-cta-inner">
            <h2 id="fr-cta-title" className="x-h2">
              Discuss Your Platform
            </h2>
            <p className="x-lede">
              Ready to build a fundraising and workflow platform that scales?
              Let's discuss your requirements, compliance needs, and how we can
              deliver a system that transforms your operations.
            </p>
            <div className="pg-actions">
              <Button to="/contact">Discuss Your Platform</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundraisingPlatforms;

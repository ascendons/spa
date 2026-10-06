import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SEO from "../components/SEO";

const BRIEFGUARD_URL = "https://briefguard.ascendons.in";

const briefguardFeatures = [
  {
    title: "Citation Verification",
    description:
      "Each citation is checked against the actual judgment, so fabricated or misattributed authorities are caught before filing.",
  },
  {
    title: "Drafting in 11 Indian Languages",
    description:
      "AI-assisted drafting grounded in Indian case law, with awareness of BNS, BNSS and IPC.",
  },
  {
    title: "Word and Google Docs",
    description: "Works inside Microsoft Word and Google Docs.",
  },
  {
    title: "Practice Management",
    description:
      "Matters, deadlines and a multi-user workspace with role-based access and track changes.",
  },
];

const briefguardAudience = [
  "Law firms & chambers",
  "Independent advocates",
  "In-house counsel",
  "Legal researchers",
];

const crmFeatures = [
  {
    title: "Configurable Process",
    description:
      "Pipelines, stages, fields and approvals configured to match how your sales and operations teams work.",
  },
  {
    title: "Access and Audit",
    description:
      "Role-based access, multi-branch and multi-team hierarchies, and audit trails for every change.",
  },
  {
    title: "Automation",
    description:
      "Lead assignment, follow-up reminders, approvals, and WhatsApp or email notifications.",
  },
  {
    title: "Integrations",
    description:
      "Integrations with WhatsApp Cloud API, email, ERPs, payment gateways and your existing databases.",
  },
];

const Products: React.FC = () => {
  return (
    <>
      <SEO
        title="Products | BriefGuard & Ascendons CRM"
        description="Discover software products built and maintained by Ascendons: BriefGuard legal operating system and customizable Ascendons Enterprise CRM."
        canonicalPath="/products"
        keywords="BriefGuard, legal operating system, Indian law AI, Ascendons CRM, custom CRM software, legal tech India"
      />
      <section className="home-section">
        <div className="home-content">
          {/* <p className="hero-eyebrow slide-up">Ascendons products</p> */}
          <h1 className="home-heading slide-up">Our Products</h1>
          <p className="hero-subheading slide-up">
            Alongside client work, we build and run our own software. The same
            team works on both.
          </p>
        </div>
      </section>

      {/* BRIEFGUARD */}
      <section className="text-section">
        <div className="what-we-do-container">
          <p className="subpart1 slide-up">FOR LEGAL TEAMS</p>
          <br></br>
          <h2 className="subpart2 slide-up">BriefGuard</h2>
          <p className="subpart3 slide-up">
            A legal operating system for India covering research, drafting,
            review and practice management, with citation verification built in.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          {briefguardFeatures.map((feature) => (
            <div key={feature.title} className="solution-card slide-up">
              <h3 className="solution-title">{feature.title}</h3>
              <p className="solution-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="tech-stack">
          <strong>Who it's for:</strong> {briefguardAudience.join(" · ")}
        </p>

        <div style={{ marginTop: "2.5rem" }}>
          <a
            href={BRIEFGUARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="home-button"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Visit BriefGuard
          </a>
        </div>
      </section>

      {/* CRM */}
      <section className="text-section" data-bg-gray="true">
        <div className="what-we-do-container">
          <p className="subpart1 slide-up">FOR LARGE TEAMS</p>
          <h2 className="subpart2 slide-up">Ascendons CRM</h2>
          <p className="subpart3 slide-up">
            A CRM for larger organisations that need their sales and operations
            process reflected in the software, rather than adapting to a fixed
            template.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          {crmFeatures.map((feature) => (
            <div key={feature.title} className="solution-card slide-up">
              <h3 className="solution-title">{feature.title}</h3>
              <p className="solution-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <Link
            to="/contact"
            className="home-button"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Request a demo
          </Link>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="cta-section visible">
        <div className="cta-content">
          <h2 className="cta-heading">Need something built?</h2>
          <p className="cta-description">
            The team behind these products also builds MVPs and business systems
            for clients.
          </p>
          <Link
            to="/contact"
            className="home-button"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
};

export default Products;

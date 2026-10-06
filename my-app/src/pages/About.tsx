import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Product Engineering Studio"
        description="Learn about Ascendons, a product engineering studio based in Surat, India. We build rapid MVPs, enterprise CRMs, and flagship products like BriefGuard."
        canonicalPath="/about"
        keywords="about Ascendons, software company Surat, product engineering team, MVP developers India, BriefGuard creators"
      />
      <section className="home-section">
        <div className="home-content">
          <h1 className="home-heading">About us</h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="text-section">
        <div className="max-w-5xl mx-auto px-4">
          {/* About Us Text */}
          <h2
            className="subpart2 text-left mb-8"
            style={{ fontSize: "2.5rem" }}
          >
            Who We Are
          </h2>
          <p className="subpart3 text-left mb-6">
            <span className="font-bold">ASCENDONS</span> is a product
            engineering studio based in Surat, India. We build MVPs for founders
            in 4–6 weeks, and CRMs, internal systems and automation for
            established businesses. We also offer technology consulting.
          </p>
          <p className="subpart3 text-left mb-6">
            We also build and run our own products, including{" "}
            <a
              href="https://briefguard.ascendons.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
              style={{ color: "#1e40af" }}
            >
              BriefGuard
            </a>
            , a legal operating system for India, and{" "}
            <Link
              to="/products"
              className="font-bold"
              style={{ color: "#1e40af" }}
            >
              Ascendons CRM
            </Link>{" "}
            for large teams. The same team works on our products and on client
            projects.
          </p>
          <p className="subpart3 text-left mb-12">
            For clients, we've delivered fundraising platforms for NGOs managing
            300+ partner organizations, custom CRMs that replaced expensive
            enterprise software, and automation systems handling thousands of
            daily conversations.
          </p>

          {/* What We Offer */}
          <h3
            className="subpart2 text-left mb-6"
            style={{ fontSize: "2.5rem" }}
          >
            Our Core Expertise:
          </h3>
          <div className="grid-2-col mb-12">
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                MVP & Product Development
              </h4>
              <p className="solution-description text-left">
                MVPs in 4–6 weeks, with a fixed scope, weekly demos and a stack
                that can grow with the product.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Technology Consulting
              </h4>
              <p className="solution-description text-left">
                Architecture reviews, build-vs-buy decisions, automation
                roadmaps and advice on stalled projects.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Communication Automation
              </h4>
              <p className="solution-description text-left">
                Intelligent automation systems for customer engagement across
                multiple channels. Handle lead qualification, support workflows,
                order tracking, and transactional communications at enterprise
                scale.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Custom CRMs & Software
              </h4>
              <p className="solution-description text-left">
                Build CRMs and custom software solutions tailored to your exact
                workflow, not forced into existing templates.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                RAG-Powered Chatbots
              </h4>
              <p className="solution-description text-left">
                Intelligent chatbots that understand context, learn from your
                documents, and provide accurate answers without hallucinations.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Fundraising & NGO Platforms
              </h4>
              <p className="solution-description text-left">
                Complete platforms for NGOs including marketplaces, fundraising
                systems, organization management, and workflow automation.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Workflow Optimization
              </h4>
              <p className="solution-description text-left">
                Analyze your processes, identify bottlenecks, and build
                automation systems that eliminate repetitive tasks and save
                hours every week.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Custom Platforms & Marketplaces
              </h4>
              <p className="solution-description text-left">
                Build platforms and marketplaces from scratch with multi-tenant
                architecture, secure payments, and role-based access controls.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}

          <h3
            className="subpart2 text-left mb-6"
            style={{ fontSize: "2.5rem" }}
          >
            Why Organizations Choose Us
          </h3>
          <div className="grid-2-col grid-2-col-fixed mb-12">
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Real-World Experience
              </h4>
              <p className="solution-description text-left">
                We've built WhatsApp automation handling 5,000+ daily
                conversations, fundraising platforms for NGOs managing hundreds
                of organizations, and custom CRMs that replaced expensive
                enterprise software.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                NGO & Nonprofit Specialists
              </h4>
              <p className="solution-description text-left">
                We understand the unique challenges nonprofits face—compliance,
                donor management, fundraising workflows, and scaling operations
                with limited resources.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Short Timelines
              </h4>
              <p className="solution-description text-left">
                Weekly releases on a stack we have already used in production,
                so new products reach users within weeks.
              </p>
            </div>
            <div className="about-card">
              <h4
                className="solution-title text-left mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Custom Solutions, Not Templates
              </h4>
              <p className="solution-description text-left">
                Your workflow is unique. We build systems that fit your exact
                needs, integrate with your tools, and grow with your
                organization—not force you into existing templates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

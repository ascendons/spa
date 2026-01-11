import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-content">
          <div className="home-heading">About us</div>
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
            We Build Automation & Platforms That Actually Work
          </h2>
          <p className="subpart3 text-left mb-6">
            Welcome to <span className="font-bold">ASCENDONS</span>, your
            trusted partner in transforming ideas into innovative digital
            solutions. We specialize in crafting cutting-edge mobile apps,
            websites, and custom software tailored to meet your unique business
            needs. Whether you're a startup looking to build your first app or
            an established business seeking to streamline operations with a
            custom inventory management system, we’ve got you covered.
          </p>
          <p className="subpart3 text-left mb-12">
            We've delivered fundraising platforms for NGOs managing hundreds of
            partner organizations, custom CRMs that replaced expensive
            enterprise software, and automation systems handling thousands of
            daily interactions. Our focus is building production-ready solutions
            that scale, integrate seamlessly, and deliver measurable business
            outcomes.
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
                We've built WhatsApp automation handling 10,000+ daily
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
                Automation That Actually Works
              </h4>
              <p className="solution-description text-left">
                We don't build demos—we build production-ready systems that
                handle real users, real workflows, and real scale. Every
                solution is battle-tested and maintained.
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

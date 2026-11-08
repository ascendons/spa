import SEO from "../components/SEO";
import PageHero from "../components/sections/PageHero";
import ServicesSection from "../components/sections/ServicesSection";
import ApproachTimeline from "../components/sections/ApproachTimeline";
import TechStack from "../components/sections/TechStack";
import { Button } from "../components/ui/ui";
import { ENGAGEMENT_MODELS } from "../data/site";
import "./pages.css";

const Services = () => {
  return (
    <div className="x-page">
      <SEO
        title="What We Build | MVPs, CRMs, AI Automation & Integrations"
        description="MVP and product development, custom CRMs and business systems, AI and workflow automation, enterprise integrations, dedicated product engineering teams and technology consulting."
        canonicalPath="/services"
        keywords="MVP development, custom CRM development, business systems, AI automation, WhatsApp automation, enterprise integrations, dedicated engineering team, technology consulting"
      />
      <PageHero
        title="Engineering the next generation of digital products."
        lede="From a founder's first version to the systems a business runs on, and the integrations and AI that connect them."
      >
        <div className="pg-actions">
          <Button to="/contact">Let's Build Something</Button>
          <Button href="#engage" variant="ghost">
            Ways to work with us
          </Button>
        </div>
      </PageHero>

      <ServicesSection withHeader={false} />

      <section
        id="engage"
        className="x-section x-section--tight pg-engage"
        aria-labelledby="engage-title"
      >
        <div className="x-wrap">
          <div className="x-head">
            <h2 id="engage-title" className="x-h2">
              Three ways to work with us.
            </h2>
          </div>
          <div className="pg-models">
            {ENGAGEMENT_MODELS.map((m) => (
              <article key={m.title} className="pg-model x-panel">
                <h3 className="x-h3">{m.title}</h3>
                <p className="x-body">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApproachTimeline />
      <TechStack />
    </div>
  );
};

export default Services;

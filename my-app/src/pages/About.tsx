import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/sections/PageHero";
import WhyUs from "../components/sections/WhyUs";
import Industries from "../components/sections/Industries";
import { PRODUCT_URLS } from "../data/site";
import "./pages.css";

const About = () => {
  return (
    <div className="x-page">
      <SEO
        title="About Ascendons | Product Engineering Studio in Surat, India"
        description="Ascendons is a product engineering studio in Surat, India. We build MVPs in 4–6 weeks, CRMs, internal systems and automation for established businesses, and run our own products including BriefGuard."
        canonicalPath="/about"
        keywords="about Ascendons, product engineering studio, software company Surat, MVP developers India, BriefGuard creators"
      />
      <PageHero
        title="A studio that builds products, and runs its own."
        lede="We turn ambitious ideas into production-ready software products and help businesses build smarter digital operations."
      />

      <section className="x-section x-paper" aria-labelledby="story-title">
        <div className="x-wrap pg-story">
          <div>
            <h2 id="story-title" className="x-h2">
              Product engineering, from Surat to wherever you are.
            </h2>
          </div>
          <div className="pg-story-body">
            <p>
              Ascendons is a product engineering studio based in Surat, India.
              We build MVPs for founders in 4–6 weeks, and CRMs, internal
              systems and automation for established businesses. We also offer
              technology consulting.
            </p>
            <p>
              We build and run our own products too:{" "}
              <a
                href={PRODUCT_URLS.briefguard}
                target="_blank"
                rel="noopener noreferrer"
              >
                BriefGuard
              </a>
              , a legal operating system for India;{" "}
              <Link to="/products#crm">Ascendons CRM</Link> for larger teams;{" "}
              <a
                href={PRODUCT_URLS.dpp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ascendons DPP
              </a>
              , a Digital Product Passport platform for manufacturers; and{" "}
              <a
                href={PRODUCT_URLS.impakt}
                target="_blank"
                rel="noopener noreferrer"
              >
                Impakt
              </a>
              , monitoring and evaluation for NGOs. The same team works on our
              products and on client projects.
            </p>
            <p>
              For clients, we've delivered a fundraising platform serving 300+
              partner organisations, custom CRMs, and WhatsApp automation
              handling 5,000+ conversations a day.
            </p>
          </div>
        </div>
      </section>

      <WhyUs />
      <Industries />
    </div>
  );
};

export default About;

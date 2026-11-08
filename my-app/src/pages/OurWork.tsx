import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/sections/PageHero";
import CaseStudies from "../components/sections/CaseStudies";
import { BRIEFGUARD, CRM, DPP, IMPAKT } from "../data/site";
import "./pages.css";

const OurWork = () => {
  return (
    <div className="x-page">
      <SEO
        title="Our Work & Case Studies | Ascendons"
        description="Case studies from Ascendons: WhatsApp automation handling 5,000+ conversations a day, and a fundraising and admin platform serving 300+ partner organisations."
        canonicalPath="/our-work"
        keywords="Ascendons case studies, WhatsApp automation case study, nonprofit platform development, fundraising platform, workflow automation results"
      />
      <PageHero
        title="Systems that run every day, for real organisations."
        lede="The problem we were handed, what we built, how it connects, and what it does today."
      />

      <CaseStudies withHeader={false} headingLevel="h2" />

      <section
        className="x-section x-section--tight"
        aria-labelledby="own-title"
      >
        <div className="x-wrap">
          <div className="x-head">
            <h2 id="own-title" className="x-h2">
              Software we build, ship and operate ourselves.
            </h2>
          </div>
          <ul className="pg-index">
            {[
              { p: BRIEFGUARD, to: "/products" },
              { p: CRM, to: "/products#crm" },
              { p: DPP, to: "/products#dpp" },
              { p: IMPAKT, to: "/products#impakt" },
            ].map(({ p, to }) => (
              <li key={p.name}>
                <Link to={to} className="pg-index-row">
                  <span className="pg-index-title">{p.name}</span>
                  <span className="pg-index-desc">{p.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurWork;

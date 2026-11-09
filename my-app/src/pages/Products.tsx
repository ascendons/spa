import SEO from "../components/SEO";
import PageHero from "../components/sections/PageHero";
import ProductsShowcase from "../components/sections/ProductsShowcase";
import { Button } from "../components/ui/ui";
import { DPP, IMPAKT, LOGISTICS, PRODUCT_URLS, listify } from "../data/site";
import "./pages.css";

type Detail = typeof DPP | typeof IMPAKT | typeof LOGISTICS;

/** Full feature list for a product, taken from its live site. */
function ProductDetail({
  id,
  product,
  href,
  paper = false,
  audienceLabel = "For",
}: {
  id: string;
  product: Detail;
  href: string;
  paper?: boolean;
  audienceLabel?: string;
}) {
  return (
    <section
      id={id}
      className={`x-section ${paper ? "x-paper" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="x-wrap">
        <div className="x-head x-head--split">
          <div>
            <h2 id={`${id}-title`} className="x-h2">
              {product.name}
            </h2>
            <p className="pg-kind">{product.kind}</p>
          </div>
          <p className="x-lede">{product.summary}</p>
        </div>
        <div className="pg-feature-grid">
          {product.features.map((f) => (
            <article key={f.title} className="pg-feature">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
        <div className="pg-actions pg-actions--split">
          <Button href={href} icon="external">
            Explore {product.name}
          </Button>
          <p className="x-meta pg-muted">
            {audienceLabel} {listify(product.audience).toLowerCase()}.
          </p>
        </div>
      </div>
    </section>
  );
}

const Products = () => {
  return (
    <div className="x-page">
      <SEO
        title="Products | BriefGuard, Ascendons CRM, DPP, Impakt & Logistics"
        description="Software built and run by Ascendons: BriefGuard, a legal operating system for India; Ascendons CRM, a configurable CRM and business operations platform; Ascendons DPP for Digital Product Passports; Impakt, monitoring & evaluation for NGOs; and Ascendons Logistics, transport management for road carriers."
        canonicalPath="/products"
        keywords="BriefGuard, legal operating system, citation verification, Indian law AI, Ascendons CRM, configurable CRM, Ascendons DPP, Digital Product Passport, ESPR, Impakt, NGO monitoring and evaluation, M&E software, Ascendons Logistics, transport management software, LR booking, lorry challan, fleet management"
      />
      <PageHero
        title="We don't just build products for clients. We build our own."
        lede="Alongside client work, we build and run our own software. The same team works on both, so client builds carry real production experience."
      />

      <ProductsShowcase withHeader={false} />

      <ProductDetail id="dpp" product={DPP} href={PRODUCT_URLS.dpp} paper />
      <ProductDetail
        id="impakt"
        product={IMPAKT}
        href={PRODUCT_URLS.impakt}
        audienceLabel="Built for programmes across"
      />
      <ProductDetail
        id="logistics"
        product={LOGISTICS}
        href={PRODUCT_URLS.logistics}
        paper
        audienceLabel="Built for"
      />
    </div>
  );
};

export default Products;

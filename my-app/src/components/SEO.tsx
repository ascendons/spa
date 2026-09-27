import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const BASE_URL = "https://www.ascendons.in";

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = "",
  keywords,
  ogType = "website",
  schema,
}) => {
  useEffect(() => {
    // 1. Title
    const fullTitle = title.includes("Ascendons") ? title : `${title} | Ascendons`;
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement("meta");
        const parts = selector.replace(/[\[\]"']/g, "").split("=");
        if (parts.length === 2) {
          meta.setAttribute(parts[0], parts[1]);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute(attr, value);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;

    // Meta descriptions and titles
    setMetaTag('meta[name="description"]', "content", description);
    setMetaTag('meta[name="title"]', "content", fullTitle);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', "content", keywords);
    }

    // OpenGraph
    setMetaTag('meta[property="og:title"]', "content", fullTitle);
    setMetaTag('meta[property="og:description"]', "content", description);
    setMetaTag('meta[property="og:url"]', "content", canonicalUrl);
    setMetaTag('meta[property="og:type"]', "content", ogType);

    // Twitter
    setMetaTag('meta[property="twitter:title"]', "content", fullTitle);
    setMetaTag('meta[property="twitter:description"]', "content", description);
    setMetaTag('meta[property="twitter:url"]', "content", canonicalUrl);

    // Canonical link
    setLinkTag("canonical", canonicalUrl);

    // Inject per-page Schema JSON-LD if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.setAttribute("data-page-seo-schema", "true");
      scriptTag.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    // Cleanup per-page schema when unmounting
    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, canonicalPath, keywords, ogType, schema]);

  return null;
};

export default SEO;

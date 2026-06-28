import { useEffect } from "react";

/**
 * Per-page SEO tags for a client-rendered SPA.
 *
 * Why a custom component instead of react-helmet-async:
 * - Zero new dependencies / no pnpm-lock.yaml changes required on your end.
 * - This site has no SSR today, so a meta library's main advantage
 *   (head tags present in the server-rendered HTML) doesn't apply yet.
 *   If/when prerendering is added (see Phase 5 discussion), this same
 *   component slots in without changes — the effect just becomes a
 *   hydration no-op for tags already correct in the static HTML.
 *
 * What this does NOT fix on its own:
 * - Crawlers that don't execute JavaScript still see index.html's
 *   generic homepage tags for every route, because there's no
 *   server/static differentiation yet. That gap is Phase 5
 *   (prerendering), tracked separately.
 *
 * Usage — render once, near the top of every page component:
 *   <SEO
 *     title="Sadhyata Infra Limited | SADHYATA Group"
 *     description="..."
 *     path="/businesses/infra"
 *   />
 */

const SITE_NAME = "SADHYATA Group";
// Canonical tags must always point at the real production domain,
// regardless of where the page is currently being viewed from
// (staging, preview deploys, etc.) — so this is intentionally hardcoded,
// not derived from window.location.
const SITE_URL = "https://sadhyata.com";

interface SEOProps {
  /** Full, exact title text — this component does not auto-append anything. */
  title: string;
  /** ~150-160 chars recommended for full display in search results. */
  description: string;
  /** Route path starting with "/", e.g. "/businesses/infra". */
  path: string;
  /** Open Graph type. Defaults to "website"; use "article" for future blog/news content. */
  type?: "website" | "article";
  /** Absolute URL to a social-preview image, if one exists for this page. */
  image?: string;
}

function upsertMetaByAttr(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const SEO = ({ title, description, path, type = "website", image }: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    upsertMetaByAttr("name", "description", description);
    upsertCanonical(canonicalUrl);

    upsertMetaByAttr("property", "og:site_name", SITE_NAME);
    upsertMetaByAttr("property", "og:title", title);
    upsertMetaByAttr("property", "og:description", description);
    upsertMetaByAttr("property", "og:url", canonicalUrl);
    upsertMetaByAttr("property", "og:type", type);

    upsertMetaByAttr("name", "twitter:title", title);
    upsertMetaByAttr("name", "twitter:description", description);

    if (image) {
      upsertMetaByAttr("property", "og:image", image);
      upsertMetaByAttr("name", "twitter:image", image);
    }
  }, [title, description, path, type, image]);

  return null;
};

export default SEO;

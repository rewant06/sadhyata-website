import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Centralized scroll behavior for every route change in the app.
 *
 * Problem this solves:
 * - React Router does NOT reset scroll position on navigation by default,
 *   so clicking a link while scrolled down can land you mid-page on the
 *   next route.
 * - Hash links (e.g. "/#businesses") only worked from one component
 *   (Header) and only when already on "/", because the scroll logic was
 *   duplicated and inconsistent across Header, Footer, and
 *   SubsidiaryPageLayout.
 *
 * This component is mounted once, inside <BrowserRouter>, and handles
 * every case from one place:
 * - No hash in the URL -> scroll to top.
 * - Hash present -> smooth-scroll to that element, retrying for a short
 *   window since lazy-loaded route components may not have mounted into
 *   the DOM yet at the exact moment navigation completes.
 */
const SCROLL_RETRY_INTERVAL_MS = 100;
const SCROLL_RETRY_MAX_ATTEMPTS = 20; // ~2s total, covers lazy-chunk load time

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const targetId = hash.replace("#", "");
    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tryScrollToElement = () => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < SCROLL_RETRY_MAX_ATTEMPTS) {
        timeoutId = setTimeout(tryScrollToElement, SCROLL_RETRY_INTERVAL_MS);
      }
    };

    tryScrollToElement();

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;

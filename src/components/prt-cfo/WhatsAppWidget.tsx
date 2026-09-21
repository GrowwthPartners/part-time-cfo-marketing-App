import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const SCROLL_THRESHOLD = 0.3;
const REVEAL_DELAY_MS = 15000;
const WHATSAPP_URL =
  "https://wa.me/6598615600?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20Part-Time%20CFO%20services.%20Can%20you%20share%20more%20details%3F";
const WHATSAPP_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

const bindMediaQueryListener = (
  mediaQuery: MediaQueryList,
  listener: (event: MediaQueryListEvent) => void,
) => {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }

  mediaQuery.addListener(listener);
  return () => mediaQuery.removeListener(listener);
};

export const WhatsAppWidget = () => {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();

    const unbind = bindMediaQueryListener(mediaQuery, updateIsMobile);
    return unbind;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let hasRevealed = false;

    const revealWidget = () => {
      if (hasRevealed) return;

      hasRevealed = true;
      setIsVisible(true);
    };

    if (!isMobile) {
      const revealTimer = window.setTimeout(revealWidget, 0);

      return () => {
        hasRevealed = true;
        window.clearTimeout(revealTimer);
      };
    }

    const hideTimer = window.setTimeout(() => {
      if (!hasRevealed) {
        setIsVisible(false);
      }
    }, 0);
    const revealTimer = window.setTimeout(revealWidget, REVEAL_DELAY_MS);

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrollDepth = window.scrollY / scrollableHeight;

      if (scrollDepth >= SCROLL_THRESHOLD) {
        revealWidget();
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      hasRevealed = true;
      window.clearTimeout(hideTimer);
      window.clearTimeout(revealTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, pathname]);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Growwth Partners on WhatsApp"
      className={`fixed right-7 z-40 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
    >
      <img
        src={WHATSAPP_ICON_URL}
        alt="Chat on WhatsApp"
        width="60"
        height="60"
        loading="lazy"
        className="h-[60px] w-[60px] rounded-full bg-[#25D366] p-2.5 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
      />
    </a>
  );
};

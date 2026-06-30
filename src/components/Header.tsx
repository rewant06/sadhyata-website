import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// NOTE: if your logo file in src/assets/ has a different name, update the path below.
import sadhyataLogo from "../assets/sadhyata-logo.jpeg";

const navItems = [
  { label: "Home",           href: "/#home" },
  { label: "About",          href: "/#about" },
  { label: "Leadership",     href: "/leadership" },
  { label: "Our Businesses", href: "/#businesses" },
  { label: "Foundation",     href: "/foundation" },
  { label: "Sustainability", href: "/#sustainability" },
  { label: "Investors",      href: "/investors" },
  // "Media" disabled: no /#media section exists on the page yet.
  // Re-enable once the Media/Press section is built (see open question
  // with client) — just uncomment the line below.
  // { label: "Media",        href: "/#media" },
  { label: "Careers",        href: "/careers" },
  { label: "Contact",        href: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy shadow-lg py-1.5 md:py-2"
          : "bg-navy/80 backdrop-blur-md py-3 md:py-4"
      }`}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo — src/assets/ import, Vite hashes the filename at build time */}
        <Link to="/" className="flex items-center">
          <img
            src={sadhyataLogo}
            alt="SADHYATA Group"
            /*
             * The logo is a 1024×1024 square; the wordmark occupies y:40–60%.
             * aspect-[4/1] + object-cover + object-center mathematically shows
             * y:37.5–62.5% of the source — the wordmark, no white padding.
             */
            className={`object-cover object-center aspect-[4/1] transition-all duration-300 ${
              scrolled ? "h-8 md:h-9" : "h-9 md:h-11"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="relative text-primary-foreground/70 hover:text-primary-foreground text-[13px] px-3 py-2 tracking-wide transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-navy border-t border-gold/10 px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-primary-foreground/70 hover:text-gold active:text-gold text-sm py-2.5 px-2 tracking-wide transition-colors border-l-2 border-transparent hover:border-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

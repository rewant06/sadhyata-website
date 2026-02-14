import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sadhyata-logo.jpeg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Our Businesses", href: "#businesses" },
  { label: "Governance", href: "#governance" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Investors", href: "#investors" },
  { label: "Media", href: "#media" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Sadhyata Group" className="h-10 w-auto rounded" />
          <div className="hidden sm:block">
            <span className="text-primary-foreground font-serif text-xl font-semibold tracking-wide">
              SADHYATA
            </span>
            <span className="text-gold-light text-xs block tracking-[0.3em] uppercase">
              Group
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors text-sm px-3 py-2 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-navy border-t border-gold/10 px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-primary-foreground/80 hover:text-gold transition-colors text-sm py-2 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

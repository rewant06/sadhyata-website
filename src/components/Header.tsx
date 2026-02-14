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
          ? "bg-navy shadow-lg py-1.5 md:py-2"
          : "bg-navy/80 backdrop-blur-md py-3 md:py-4"
      }`}
    >
      {/* Top accent line — like Tata/Adani gold stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo — clean corporate wordmark style */}
        <a href="#home" className="flex items-center gap-2.5 md:gap-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="Sadhyata Group"
              className={`rounded transition-all duration-300 ${
                scrolled ? "h-8 md:h-9" : "h-9 md:h-11"
              }`}
            />
            {/* Subtle gold border ring on hover */}
            <div className="absolute inset-0 rounded ring-1 ring-gold/0 group-hover:ring-gold/40 transition-all duration-300" />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-primary-foreground font-serif font-bold tracking-[0.15em] leading-none transition-all duration-300 ${
                scrolled ? "text-base md:text-lg" : "text-lg md:text-xl"
              }`}
            >
              SADHYATA
            </span>
            <span className="text-gold text-[9px] md:text-[10px] tracking-[0.35em] uppercase leading-tight mt-0.5 font-medium">
              Group
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-primary-foreground/70 hover:text-primary-foreground text-[13px] px-3 py-2 tracking-wide transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-navy border-t border-gold/10 px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-primary-foreground/70 hover:text-gold active:text-gold text-sm py-2.5 px-2 tracking-wide transition-colors border-l-2 border-transparent hover:border-gold"
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

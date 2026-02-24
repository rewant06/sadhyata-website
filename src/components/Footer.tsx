import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy pt-12 pb-6 px-4 md:pt-16 md:pb-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 mb-10 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:mb-12">
          {/* Brand — text only */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-primary-foreground font-serif text-lg font-bold tracking-[0.18em] sm:text-xl">SADHYATA</span>
              <span className="text-gold text-[9px] block tracking-[0.4em] uppercase sm:text-[10px]">Group</span>
            </div>
            <p className="text-primary-foreground/50 text-xs leading-relaxed sm:text-sm">
              A purpose-driven Indian conglomerate building institutions for India's future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground text-sm mb-3 md:mb-4">Quick Links</h4>
            {[
              { label: "About", href: "/#about" },
              { label: "Leadership", href: "/#leadership" },
              { label: "Our Businesses", href: "/#businesses" },
              { label: "Foundation", href: "/foundation" },
            ].map((l) =>
              l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                <Link key={l.label} to={l.href}
                  className="block text-primary-foreground/50 hover:text-gold text-xs py-1 transition-colors sm:text-sm">{l.label}</Link>
              ) : (
                <a key={l.label} href={l.href}
                  className="block text-primary-foreground/50 hover:text-gold text-xs py-1 transition-colors sm:text-sm">{l.label}</a>
              )
            )}
          </div>

          <div>
            <h4 className="font-serif font-semibold text-primary-foreground text-sm mb-3 md:mb-4">Resources</h4>
            {["Sustainability", "Investors", "Media", "Careers"].map((l) => (
              <a key={l} href={`/#${l.toLowerCase()}`}
                className="block text-primary-foreground/50 hover:text-gold text-xs py-1 transition-colors sm:text-sm">{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground text-sm mb-3 md:mb-4">Contact</h4>
            <p className="text-primary-foreground/50 text-xs leading-relaxed sm:text-sm">
              Email: info@sadhyata.com
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4 flex flex-col gap-3 items-center text-center md:flex-row md:justify-between md:pt-6 md:gap-4">
          <p className="text-primary-foreground/30 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} SADHYATA Private Limited. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-[11px] sm:text-xs">
            Building Institutions That Power India's Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

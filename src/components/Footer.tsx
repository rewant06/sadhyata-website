import logo from "@/assets/sadhyata-logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sadhyata" className="h-9 rounded" />
              <div>
                <span className="text-primary-foreground font-serif text-lg font-semibold tracking-wide">SADHYATA</span>
                <span className="text-gold-light text-[10px] block tracking-[0.3em] uppercase">Group</span>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              A purpose-driven Indian conglomerate building institutions for India's future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground text-sm mb-4">Quick Links</h4>
            {["About", "Leadership", "Our Businesses", "Governance"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="block text-primary-foreground/50 hover:text-gold text-sm py-1 transition-colors">{l}</a>
            ))}
          </div>

          <div>
            <h4 className="font-serif font-semibold text-primary-foreground text-sm mb-4">Resources</h4>
            {["Sustainability", "Investors", "Media", "Careers"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="block text-primary-foreground/50 hover:text-gold text-sm py-1 transition-colors">{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground text-sm mb-4">Contact</h4>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Email: ankesh@sadhyata.com
            </p>
            <p className="text-primary-foreground/50 text-sm mt-1">
              Phone: +91 9031017714
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} SADHYATA Private Limited. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs">
            Building Institutions That Power India's Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

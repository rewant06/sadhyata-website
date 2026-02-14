import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Indian infrastructure at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="gold-divider mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
            Building Institutions That Power{" "}
            <span className="text-gradient-gold">India's Future</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            A purpose-driven Indian conglomerate operating across infrastructure, energy, 
            finance, technology, and social development — anchored by strong governance 
            and a nation-first vision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#businesses"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-medium text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              Explore Our Businesses
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3.5 border border-gold/40 text-primary-foreground/90 font-medium text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-colors"
            >
              About SADHYATA Group
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gold/20 border-t border-gold/10 pt-8"
        >
          {[
            { value: "13+", label: "Subsidiaries" },
            { value: "10+", label: "Sectors" },
            { value: "2023", label: "Incorporated" },
            { value: "Pan India", label: "Presence" },
          ].map((stat) => (
            <div key={stat.label} className="md:px-8 first:pl-0">
              <div className="text-2xl md:text-3xl font-serif font-semibold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/50 text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

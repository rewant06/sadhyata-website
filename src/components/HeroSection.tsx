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

      {/* Content — mobile-first */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-12 md:px-12 lg:px-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="gold-divider mb-6 md:mb-8" />
          <h1 className="text-3xl font-serif font-semibold text-primary-foreground leading-tight mb-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:mb-6">
            Building Institutions That Power{" "}
            <span className="text-gradient-gold">India's Future</span>
          </h1>
          <p className="text-primary-foreground/70 text-base leading-relaxed mb-8 max-w-2xl font-light md:text-lg lg:text-xl md:mb-10">
            A purpose-driven Indian conglomerate operating across infrastructure, energy, 
            finance, technology, and social development — anchored by strong governance 
            and a nation-first vision.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#businesses"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-medium text-sm tracking-wider uppercase hover:bg-gold-light transition-colors sm:px-8 sm:py-3.5"
            >
              Explore Our Businesses
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 border border-gold/40 text-primary-foreground/90 font-medium text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-colors sm:px-8 sm:py-3.5"
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
          className="mt-12 grid grid-cols-2 gap-4 border-t border-gold/10 pt-6 md:mt-20 md:grid-cols-4 md:gap-0 md:divide-x md:divide-gold/20 md:pt-8"
        >
          {[
            { value: "13+", label: "Subsidiaries" },
            { value: "10+", label: "Sectors" },
            { value: "2020", label: "Established" },
            { value: "Pan India", label: "Presence" },
          ].map((stat) => (
            <div key={stat.label} className="md:px-8 first:pl-0">
              <div className="text-xl font-serif font-semibold text-gold mb-1 sm:text-2xl md:text-3xl">
                {stat.value}
              </div>
              <div className="text-primary-foreground/50 text-xs tracking-wider uppercase sm:text-sm">
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

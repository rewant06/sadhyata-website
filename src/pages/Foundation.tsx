import { motion } from "framer-motion";
import { Heart, Trees, UtensilsCrossed, GraduationCap, Landmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const focusAreas = [
  {
    icon: Landmark,
    title: "Temple Infrastructure Restoration",
    desc: "Channeling resources toward the infrastructural rejuvenation of Hindu temples, helping restore them as vibrant centres of faith, community, and heritage.",
  },
  {
    icon: Trees,
    title: "Tree Plantation Initiatives",
    desc: "Conducting extensive tree plantation drives and leading grassroots environmental sustainability initiatives across India.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Distribution Programs",
    desc: "Providing food to the underprivileged through organized grassroots distribution programs.",
  },
  {
    icon: GraduationCap,
    title: "Educational Support",
    desc: "Offering educational support to truly deserving individuals, fostering learning and personal growth.",
  },
  {
    icon: Heart,
    title: "Gurukul-Inspired Institutions",
    desc: "Establishing Gurukul-inspired educational institutions guided by the teachings of Vedic Shastras, nurturing intellectual integrity, discipline, and inner peace.",
  },
];

const Foundation = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-navy pt-28 pb-14 px-4 sm:pt-32 sm:pb-20 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Social Impact
            </span>
            <h1 className="text-3xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Sadhyata Foundation
            </h1>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-xl font-serif italic text-gold-light mb-6 sm:text-2xl md:text-3xl">
              Social Impact. Cultural Revival. National Service.
            </p>
            <p className="text-primary-foreground/60 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
              Incorporated in 2023 under Section 8 of the Companies Act as a not-for-profit organization, 
              Sadhyata Foundation is the Group's spiritual and social conscience — dedicated to nation-building 
              through cultural revival, social reform, and holistic development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Purpose
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 sm:text-3xl md:text-4xl">
              A Conscience for the Nation
            </h2>
            <div className="gold-divider mb-6 md:mb-8" />
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed md:text-base">
              <p>
                At its core, the Foundation channels financial and strategic resources toward the 
                infrastructural rejuvenation of Hindu temples, helping restore them as vibrant centres 
                of faith, community, and heritage.
              </p>
              <p>
                Committed to environmental sustainability, SADHYATA Foundation is also conducting extensive 
                tree plantation drives and leading grassroots initiatives that provide food to the underprivileged 
                and educational support to truly deserving individuals.
              </p>
              <p>
                Drawing from India's ancient Gurukul tradition — a system that nurtured intellectual integrity, 
                discipline, and inner peace — the Foundation envisions establishing Gurukul-inspired educational 
                institutions, guided by the teachings of Vedic Shastras.
              </p>
              <p>
                This vision is deeply rooted in the personal journey of our Chairman, Shri Karnjeet Kumar Singh, 
                himself a product of the Gurukul system, who believes that individual cultural development is the 
                foundation of national awakening. With an unwavering commitment to reviving Sanatan Dharma, 
                nurturing historical consciousness, and fostering unity, SADHYATA Foundation aims to contribute 
                meaningfully to building a culturally sovereign and spiritually awakened nation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              What We Do
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-4 sm:text-3xl md:text-4xl">
              Core Focus Areas
            </h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 border border-border hover:border-gold/30 transition-colors sm:p-8"
              >
                <area.icon className="w-7 h-7 text-gold mb-3 sm:w-8 sm:h-8 sm:mb-4" />
                <h3 className="font-serif font-semibold text-navy text-sm mb-2 sm:text-base">{area.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Vision
            </span>
            <h2 className="text-2xl font-serif font-semibold text-primary-foreground mt-3 mb-6 sm:text-3xl md:text-4xl">
              Building a Culturally Sovereign Future
            </h2>
            <div className="gold-divider mx-auto mb-6 md:mb-8" />
            <p className="text-primary-foreground/60 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              To contribute to cultural preservation, environmental sustainability, and holistic national 
              upliftment — nurturing a generation rooted in India's timeless values while embracing 
              progress with purpose and discipline.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Foundation;

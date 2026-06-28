import { motion } from "framer-motion";
import { Heart, Trees, UtensilsCrossed, GraduationCap, Landmark, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

const registrations = [
  {
    label: "CIN",
    value: "U88900JH2023NPL021038",
    note: "Section 8 Company under the Companies Act",
  },
  {
    label: "PAN",
    value: "ABLCS4807Q",
    note: null,
  },
  {
    label: "CSR Registration No.",
    value: "CSR00097318",
    note: "Ministry of Corporate Affairs",
  },
  {
    label: "NGO Darpan ID",
    value: "JH/2025/0492819",
    note: "NITI Aayog Portal",
  },
  {
    label: "12A Registration",
    value: "ABLCS4807QE20251",
    note: "Provisional — Income Tax Act",
  },
  {
    label: "80G Registration",
    value: "ABLCS4807QF20251",
    note: "Provisional — Eligible for donor tax deduction",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Foundation = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
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
              Incorporated in 2023 under Section 8 of the Companies Act as a
              not-for-profit organisation, Sadhyata Foundation is the Group's
              spiritual and social conscience — dedicated to nation-building
              through cultural revival, social reform, and holistic development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
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
                At its core, the Foundation channels financial and strategic
                resources toward the infrastructural rejuvenation of Hindu
                temples, helping restore them as vibrant centres of faith,
                community, and heritage.
              </p>
              <p>
                Committed to environmental sustainability, SADHYATA Foundation
                is also conducting extensive tree plantation drives and leading
                grassroots initiatives that provide food to the underprivileged
                and educational support to truly deserving individuals.
              </p>
              <p>
                Drawing from India's ancient Gurukul tradition — a system that
                nurtured intellectual integrity, discipline, and inner peace —
                the Foundation envisions establishing Gurukul-inspired
                educational institutions, guided by the teachings of Vedic
                Shastras.
              </p>
              <p>
                This vision is deeply rooted in the personal journey of our
                Chairman, Shri Karnjeet Kumar Singh, himself a product of the
                Gurukul system, who believes that individual cultural development
                is the foundation of national awakening. With an unwavering
                commitment to reviving Sanatan Dharma, nurturing historical
                consciousness, and fostering unity, SADHYATA Foundation aims to
                contribute meaningfully to building a culturally sovereign and
                spiritually awakened nation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Focus Areas ───────────────────────────────────────────────── */}
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
                <h3 className="font-serif font-semibold text-navy text-sm mb-2 sm:text-base">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statutory Registration ────────────────────────────────────── */}
      <section className="section-padding bg-navy-dark">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-1 mb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                  Statutory Details
                </span>
                <h2 className="text-2xl font-serif font-semibold text-primary-foreground mt-3 sm:text-3xl">
                  Legal &amp; Registration Information
                </h2>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/40 text-[11px] tracking-wider uppercase">
                <FileText className="w-3.5 h-3.5" />
                Section 8 Company
              </div>
            </div>

            <div className="gold-divider mb-8" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              {registrations.map((reg, i) => (
                <motion.div
                  key={reg.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-navy border border-primary-foreground/10 p-4 sm:p-5 hover:border-gold/20 transition-colors"
                >
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-medium mb-2">
                    {reg.label}
                  </p>
                  <p className="text-primary-foreground font-mono text-sm font-medium tracking-wide break-all">
                    {reg.value}
                  </p>
                  {reg.note && (
                    <p className="text-primary-foreground/40 text-[11px] mt-1.5 leading-relaxed">
                      {reg.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-primary-foreground/30 text-[11px] mt-6 leading-relaxed">
              80G registration enables donors to claim tax deductions on
              contributions to Sadhyata Foundation under the Income Tax Act,
              1961. Both 12A and 80G registrations are currently provisional and
              valid as per the Income Tax Department notification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Vision ────────────────────────────────────────────────────── */}
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
              To contribute to cultural preservation, environmental
              sustainability, and holistic national upliftment — nurturing a
              generation rooted in India's timeless values while embracing
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
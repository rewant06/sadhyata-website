import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Vertical {
  title: string;
  points: string[];
}

interface SubsidiaryPageProps {
  name: string;
  tagline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  verticals?: Vertical[];
  verticalsSectionTitle?: string;
  operationalPhilosophy?: string[];
  operationalTitle?: string;
  vision: string;
  mission?: string;
  icon: LucideIcon;
}

const SubsidiaryPageLayout = ({
  name,
  tagline,
  heroDescription,
  aboutTitle,
  aboutParagraphs,
  verticals,
  verticalsSectionTitle,
  operationalPhilosophy,
  operationalTitle,
  vision,
  mission,
  icon: Icon,
}: SubsidiaryPageProps) => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-navy pt-28 pb-14 px-4 sm:pt-32 sm:pb-20 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#businesses"
              className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-xs tracking-wider uppercase mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Our Businesses
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <Icon className="w-8 h-8 text-gold sm:w-10 sm:h-10" />
              <h1 className="text-2xl font-serif font-semibold text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                {name}
              </h1>
            </div>
            <div className="gold-divider mb-6" />
            <p className="text-xl font-serif italic text-gold-light mb-4 sm:text-2xl">
              {tagline}
            </p>
            <p className="text-primary-foreground/60 max-w-3xl leading-relaxed text-sm md:text-base">
              {heroDescription}
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
              About
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 sm:text-3xl md:text-4xl">
              {aboutTitle}
            </h2>
            <div className="gold-divider mb-6 md:mb-8" />
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed md:text-base">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Verticals */}
      {verticals && verticals.length > 0 && (
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
                {verticalsSectionTitle || "Core Business Verticals"}
              </h2>
              <div className="gold-divider mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {verticals.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card p-5 border border-border hover:border-gold/30 transition-colors sm:p-6"
                >
                  <h3 className="font-serif font-semibold text-navy text-sm mb-3 sm:text-base">{v.title}</h3>
                  <ul className="space-y-1.5">
                    {v.points.map((pt, j) => (
                      <li key={j} className="text-muted-foreground text-xs leading-relaxed flex items-start gap-2 sm:text-sm">
                        <span className="text-gold mt-1 text-[8px]">●</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Operational Philosophy */}
      {operationalPhilosophy && operationalPhilosophy.length > 0 && (
        <section className="section-padding bg-warm-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Our Approach
              </span>
              <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 sm:text-3xl md:text-4xl">
                {operationalTitle || "Operational Philosophy"}
              </h2>
              <div className="gold-divider mb-6 md:mb-8" />
              <ul className="space-y-3">
                {operationalPhilosophy.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3 md:text-base">
                    <span className="text-gold mt-1 font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* Vision & Mission */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Vision
            </span>
            <h2 className="text-xl font-serif font-semibold text-primary-foreground mt-3 mb-6 italic sm:text-2xl md:text-3xl">
              "{vision}"
            </h2>
            {mission && (
              <>
                <div className="gold-divider mx-auto mb-6" />
                <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                  Mission
                </span>
                <p className="text-primary-foreground/60 mt-3 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
                  {mission}
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubsidiaryPageLayout;

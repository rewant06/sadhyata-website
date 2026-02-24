import { motion } from "framer-motion";

const GroupOverview = () => {
  return (
    <section id="about" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              About The Group
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 leading-tight sm:text-3xl md:text-4xl">
              The Strategic Nucleus of a Future-Ready Conglomerate
            </h2>
            <div className="gold-divider mb-6 md:mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
              SADHYATA Private Limited is the ultimate holding company of the SADHYATA Group, 
              established to drive vision-led expansion, structured governance, and long-term 
              value creation across multiple sectors. Incorporated in March 2020, the Group 
              operates through a portfolio of specialized subsidiaries.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              From infrastructure and energy to finance, technology, agriculture, fashion, 
              and social impact — SADHYATA is building a future-ready ecosystem designed to 
              serve India's growth ambitions with discipline, scale, and purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {[
              { icon: "🏛️", title: "Governance-Led", desc: "Centralized oversight with operational independence" },
              { icon: "📊", title: "Multi-Sector", desc: "Diversified across 10+ strategic verticals" },
              { icon: "🇮🇳", title: "Nation-First", desc: "Enterprise as a vehicle for national development" },
              { icon: "🔒", title: "Compliance", desc: "Rigorous regulatory adherence at every level" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-4 border border-border hover:border-gold/30 transition-colors sm:p-6"
              >
                <div className="text-xl mb-2 sm:text-2xl sm:mb-3">{item.icon}</div>
                <h3 className="font-serif font-semibold text-navy text-xs mb-1 sm:text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-[11px] leading-relaxed sm:text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GroupOverview;

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "Foundation Laid",
    desc: "SADHYATA Projects Private Limited established, marking the beginning of the Group's entrepreneurial journey.",
  },
  {
    year: "2023",
    title: "Holding Company Formed",
    desc: "Incorporation of SADHYATA Private Limited as the Group Holding Company, pivoting toward institutional governance.",
  },
  {
    year: "2023–24",
    title: "Sector Expansion",
    desc: "Formation of sector-specific subsidiaries across infrastructure, energy, agrotech, hospitality, retail, manufacturing, technology, and finance.",
  },
  {
    year: "2025",
    title: "Operational Readiness",
    desc: "Launch of specialized mining and broking arms. Achievement of operational readiness across all verticals.",
  },
];

const Timeline = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Our Journey
          </span>
          <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-4 sm:text-3xl md:text-4xl">
            Milestones of Growth
          </h2>
          <div className="gold-divider mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20 md:left-1/2 md:-translate-x-px" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start mb-10 last:mb-0 md:mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-2 z-10 md:left-1/2" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="text-gold font-serif text-lg font-bold sm:text-xl">{m.year}</span>
                <h3 className="font-serif font-semibold text-navy text-base mt-1 mb-2 sm:text-lg">{m.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

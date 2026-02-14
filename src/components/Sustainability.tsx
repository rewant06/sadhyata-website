import { motion } from "framer-motion";
import { Leaf, Users, BookOpen, Globe } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Environmental Stewardship", desc: "Sustainable operations and green initiatives across all business verticals." },
  { icon: Users, title: "Social Upliftment", desc: "Inclusive growth programs empowering communities and livelihoods." },
  { icon: BookOpen, title: "Cultural Revival", desc: "Preserving India's heritage through education and Gurukul traditions." },
  { icon: Globe, title: "Responsible Growth", desc: "Ethical governance ensuring long-term societal and economic impact." },
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="section-padding bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Purpose Beyond Profit
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mt-3 mb-4">
            Sustainability & Nation Building
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
            SADHYATA believes that enterprise must serve a higher purpose. Through sustainable 
            operations, ethical governance, and social initiatives led by SADHYATA Foundation, 
            the Group remains committed to inclusive growth and responsible nation-building.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 border border-primary-foreground/10 hover:border-gold/30 transition-colors"
            >
              <p.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-primary-foreground text-base mb-2">{p.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

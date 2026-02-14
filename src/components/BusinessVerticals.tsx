import { motion } from "framer-motion";
import {
  Building2, Mountain, Zap, Factory, Wheat, ShoppingBag,
  Hotel, Monitor, Landmark, TrendingUp, BarChart3, Heart,
} from "lucide-react";

const verticals = [
  { icon: Building2, name: "Infrastructure", desc: "Large-scale infrastructure development across India", company: "SADHYATA Infra Limited" },
  { icon: Mountain, name: "Mining", desc: "Responsible mineral exploration and extraction", company: "SADHYATA Mines Pvt Ltd" },
  { icon: Zap, name: "Energy & Power", desc: "Conventional and renewable energy solutions", company: "SADHYATA Energy Limited" },
  { icon: Factory, name: "Manufacturing", desc: "Industrial manufacturing and fabrication", company: "SADHYATA Bharat Limited" },
  { icon: Wheat, name: "Agriculture", desc: "Agrotech and food processing innovations", company: "SADHYATA Agrotech Limited" },
  { icon: ShoppingBag, name: "Retail & Brands", desc: "Consumer brands and fashion retail", company: "SADHYATA Brands Limited" },
  { icon: Hotel, name: "Hospitality", desc: "Premium hospitality and lifestyle experiences", company: "SADHYATA Hotels Limited" },
  { icon: Monitor, name: "Technology", desc: "Digital infrastructure and IT consulting", company: "SADHYATA Consultancy Ltd" },
  { icon: Landmark, name: "Financial Services", desc: "Capital management and financial solutions", company: "SADHYATA Capital Pvt Ltd" },
  { icon: TrendingUp, name: "Investments", desc: "Strategic investment and portfolio management", company: "SADHYATA Investment Pvt Ltd" },
  { icon: BarChart3, name: "Broking", desc: "Capital markets and broking services", company: "SADHYATA Broking Pvt Ltd" },
  { icon: Heart, name: "Foundation", desc: "Social development and cultural revival", company: "SADHYATA Foundation" },
];

const BusinessVerticals = () => {
  return (
    <section id="businesses" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Our Portfolio
          </span>
          <h2 className="text-2xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-3xl md:text-4xl">
            Diversified Businesses, Unified Vision
          </h2>
          <div className="gold-divider mx-auto mb-4 md:mb-6" />
          <p className="text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Each subsidiary operates with sectoral independence while aligned to SADHYATA's 
            philosophy of structured growth, accountability, and national service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
          {verticals.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-5 border border-primary-foreground/10 hover:border-gold/40 transition-all duration-300 cursor-pointer sm:p-6"
            >
              <v.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform sm:w-7 sm:h-7 sm:mb-4" />
              <h3 className="font-serif font-semibold text-primary-foreground text-sm mb-1 sm:text-base">
                {v.name}
              </h3>
              <p className="text-primary-foreground/50 text-xs mb-2 leading-relaxed sm:mb-3">{v.desc}</p>
              <span className="text-gold/60 text-[11px] tracking-wider uppercase">{v.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;

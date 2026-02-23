import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2, Mountain, Zap, Factory, Wheat, ShoppingBag,
  Hotel, Monitor, Landmark, TrendingUp, BarChart3, Shirt,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const verticals = [
  { icon: Building2, name: "Infrastructure", desc: "Large-scale infrastructure development across India", company: "SADHYATA Infra Limited", slug: "infra" },
  { icon: Mountain, name: "Mining", desc: "Responsible mineral exploration and extraction", company: "SADHYATA Mines Pvt Ltd", slug: "mines" },
  { icon: Zap, name: "Energy & Power", desc: "Conventional and renewable energy solutions", company: "SADHYATA Energy Limited", slug: "energy" },
  { icon: Factory, name: "Manufacturing", desc: "Industrial manufacturing and fabrication", company: "SADHYATA Bharat Limited", slug: "bharat" },
  { icon: Wheat, name: "Agriculture", desc: "Agrotech and food processing innovations", company: "SADHYATA Agrotech Limited", slug: "agrotech" },
  { icon: ShoppingBag, name: "Retail & Brands", desc: "Consumer brands and fashion retail", company: "SADHYATA Brands Limited", slug: "brands" },
  { icon: Hotel, name: "Hospitality", desc: "Premium hospitality and lifestyle experiences", company: "SADHYATA Hotels Limited", slug: "hotels" },
  { icon: Monitor, name: "Technology", desc: "Digital infrastructure and IT consulting", company: "SADHYATA Consultancy Ltd", slug: "consultancy" },
  { icon: Landmark, name: "Financial Services", desc: "Capital management and financial solutions", company: "SADHYATA Capital Pvt Ltd", slug: "capital" },
  { icon: TrendingUp, name: "Investments", desc: "Strategic investment and portfolio management", company: "SADHYATA Investment Pvt Ltd", slug: "investment" },
  { icon: BarChart3, name: "Broking", desc: "Capital markets and broking services", company: "SADHYATA Broking Pvt Ltd", slug: "broking" },
  { icon: Shirt, name: "Fashion", desc: "Ethnic & contemporary apparel retail", company: "SADHYATA Fashion Limited", slug: "fashion" },
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
            >
              <Link
                to={`/businesses/${v.slug}`}
                className="group block p-5 border border-primary-foreground/10 hover:border-gold/40 transition-all duration-300 sm:p-6"
              >
                <v.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform sm:w-7 sm:h-7 sm:mb-4" />
                <h3 className="font-serif font-semibold text-primary-foreground text-sm mb-1 sm:text-base">
                  {v.name}
                </h3>
                <p className="text-primary-foreground/50 text-xs mb-2 leading-relaxed sm:mb-3">{v.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold/60 text-[11px] tracking-wider uppercase">{v.company}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;

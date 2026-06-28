import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import chairmanImg from "@/assets/chairman-portrait.jpeg";

const ChairmanMessage = () => {
  return (
    <section id="leadership" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 items-center lg:grid-cols-5 lg:gap-12"
        >
          {/* Chairman Portrait */}
          <div className="flex justify-center lg:col-span-2">
            <div className="relative w-48 sm:w-64 md:w-72">
              <div className="absolute inset-0 border border-gold/30 translate-x-3 translate-y-3 z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src={chairmanImg}
                  alt="Shri Karnjeet Kumar Singh – Founder & Group Executive Chairman of SADHYATA Group"
                  className="w-full h-auto block grayscale-[15%]"
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 bg-navy px-4 py-3 text-center">
                <span className="text-primary-foreground font-serif font-semibold text-xs sm:text-sm block">
                  Shri Karnjeet Kumar Singh
                </span>
                <span className="text-gold text-[10px] sm:text-xs tracking-wider uppercase">
                  Founder &amp; Group Executive Chairman
                </span>
              </div>
            </div>
          </div>

          {/* Quote + CTA */}
          <div className="lg:col-span-3">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Chairman's Message
            </span>
            <div className="gold-divider mt-3 mb-6 md:mb-8" />

            <blockquote className="text-xl font-serif text-navy leading-snug mb-6 italic sm:text-2xl md:text-3xl md:mb-8">
              "At SADHYATA, we are not building companies in isolation — we are
              building platforms of national value. Our ambition is to create
              institutions that endure, empower, and elevate India's economic
              and cultural future."
            </blockquote>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="gold-divider" />
                <div>
                  <p className="text-navy font-semibold text-sm">
                    Shri Karnjeet Kumar Singh
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Founder &amp; Group Executive Chairman
                  </p>
                </div>
              </div>

              {/* Link to full leadership page */}
              <Link
                to="/leadership"
                className="group inline-flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase font-medium hover:text-gold-light transition-colors shrink-0"
                aria-label="View full SADHYATA leadership team"
              >
                Full Leadership Team
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
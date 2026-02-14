import { motion } from "framer-motion";

const ChairmanMessage = () => {
  return (
    <section id="leadership" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 items-center lg:grid-cols-5 lg:gap-12"
        >
          {/* Portrait placeholder */}
          <div className="flex justify-center lg:col-span-2">
            <div className="w-48 h-60 bg-navy/5 border border-gold/20 flex items-center justify-center sm:w-64 sm:h-80">
              <div className="text-center px-6">
                <div className="w-16 h-16 rounded-full bg-navy/10 mx-auto mb-3 flex items-center justify-center sm:w-20 sm:h-20 sm:mb-4">
                  <span className="font-serif text-navy text-xl font-bold sm:text-2xl">KS</span>
                </div>
                <span className="text-navy font-serif font-semibold text-xs sm:text-sm">
                  Shri Karnjeet Kumar Singh
                </span>
                <span className="block text-muted-foreground text-[11px] mt-1 sm:text-xs">
                  Founder & Group Executive Chairman
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-3">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Chairman's Message
            </span>
            <div className="gold-divider mt-3 mb-6 md:mb-8" />
            <blockquote className="text-xl font-serif text-navy leading-snug mb-6 italic sm:text-2xl md:text-3xl md:mb-8">
              "At SADHYATA, we are not building companies in isolation — we are building 
              platforms of national value. Our ambition is to create institutions that endure, 
              empower, and elevate India's economic and cultural future."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="gold-divider" />
              <div>
                <p className="text-navy font-semibold text-sm">Shri Karnjeet Kumar Singh</p>
                <p className="text-muted-foreground text-xs">Founder & Group Executive Chairman</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanMessage;

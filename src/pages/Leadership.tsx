import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Portrait assets — processed by Vite, content-hashed at build
import chairmanImg from "@/assets/chairman-portrait.jpeg";
import ankeshImg   from "@/assets/ankesh-raj-executive-director.jpeg";
import kajalImg    from "@/assets/kajal-chetri-hr-director.jpeg";
import sandeepImg  from "@/assets/sandeep-tiwari-general-counsel.jpeg";

// ─── Data ────────────────────────────────────────────────────────────────────

const chairman = {
  name:  "Shri Karnjeet Kumar Singh",
  title: "Founder & Group Executive Chairman",
  image: chairmanImg,
  quote:
    "At SADHYATA, we are not building companies in isolation — we are building platforms of national value. Our ambition is to create institutions that endure, empower, and elevate India's economic and cultural future.",
  bio: [
    "Shri Karnjeet Kumar Singh is the Founder and Group Executive Chairman of SADHYATA Private Limited. A visionary entrepreneur and institution builder, he established the Group with a conviction that enterprise must serve a higher national purpose.",
    "A product of India's Gurukul tradition, his philosophy blends disciplined governance with cultural consciousness. Under his leadership, SADHYATA has grown into a diversified conglomerate spanning 13 subsidiaries across infrastructure, energy, mining, finance, technology, agriculture, hospitality, and social development.",
    "His guiding principle: build institutions that last, empower communities, and contribute to India's sovereign economic and cultural future.",
  ],
};

const kmps = [
  {
    id: 1,
    name:        "Shri Ankesh Raj",
    title:       "Group Executive Director",
    designation: "Management",
    image:       ankeshImg,
    bio:
      "Shri Ankesh Raj holds a Bachelor of Computer Applications (BCA) and has been associated with the Sadhyata Group since 2024. He oversees management operations, strategy execution, and cross-subsidiary coordination, working directly under the Chairman to drive the Group's operational agenda across its diverse verticals.",
  },
  {
    id: 2,
    name:        "Miss Kajal Chetri",
    title:       "Group Executive Director",
    designation: "Human Resource",
    image:       kajalImg,
    bio:
      "Miss Kajal Chetri is an MBA in Human Resource Management and has been associated with the Sadhyata Group since 2024. She leads the Group's human capital strategy — covering talent acquisition, workforce development, organizational culture, and HR compliance — across the Group's subsidiaries and operating entities.",
  },
  {
    id: 3,
    name:        "Shri Sandeep Singh Tiwari",
    title:       "General Counsel",
    designation: "Advocate, Supreme Court of India",
    image:       sandeepImg,
    bio:
      "Shri Sandeep Singh Tiwari is a distinguished senior advocate and legal scholar with over 26 years of extensive experience. A practising advocate before the Supreme Court of India, he is also a philosopher, author, and critic. He advises the Group on legal strategy, corporate governance, compliance, and risk — bringing rare depth of jurisprudential knowledge to the organization.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const Leadership = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Leadership | SADHYATA Group"
        description="Meet the leadership of SADHYATA Group — Founder & Chairman Shri Karnjeet Kumar Singh and the key managerial team driving governance and growth across all subsidiaries."
        path="/leadership"
      />
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              SADHYATA Group
            </span>
            <h1 className="text-3xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Our Leadership
            </h1>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              The people shaping SADHYATA's vision, governance, and growth
              across every subsidiary and initiative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Chairman ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 items-start lg:grid-cols-5 lg:gap-14"
          >
            {/* Portrait */}
            <div className="flex justify-center lg:col-span-2">
              <div className="relative w-56 sm:w-72">
                {/* Gold shadow frame */}
                <div className="absolute inset-0 border border-gold/30 translate-x-3 translate-y-3 z-0" />
                <div className="relative z-10 overflow-hidden">
                  <img
                    src={chairman.image}
                    alt={`${chairman.name}, ${chairman.title} of SADHYATA Group`}
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </div>
                {/* Name plate */}
                <div className="relative z-10 bg-navy px-4 py-3 text-center">
                  <span className="text-primary-foreground font-serif font-semibold text-xs sm:text-sm block">
                    {chairman.name}
                  </span>
                  <span className="text-gold text-[10px] sm:text-xs tracking-wider uppercase">
                    {chairman.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Founder's Message
              </span>
              <div className="gold-divider mt-3 mb-6" />

              {/* Quote */}
              <blockquote className="text-lg font-serif italic text-navy leading-snug mb-6 border-l-2 border-gold pl-5 sm:text-xl md:text-2xl">
                "{chairman.quote}"
              </blockquote>

              {/* Bio paragraphs */}
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed md:text-base">
                {chairman.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── KMP Section ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Management
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-4 sm:text-3xl md:text-4xl">
              Key Managerial Persons
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed md:text-base">
              Our core management team brings together expertise in operations,
              human capital, and legal governance.
            </p>
          </motion.div>

          {/* KMP Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {kmps.map((person, i) => (
              <motion.article
                key={person.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border hover:border-gold/30 transition-colors duration-300 overflow-hidden flex flex-col"
                aria-label={`${person.name}, ${person.title}`}
              >
                {/* Portrait — fixed aspect ratio for visual consistency */}
                <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4/5" }}>
                  <img
                    src={person.image}
                    alt={`${person.name} — ${person.title} (${person.designation}) at SADHYATA Group`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
                </div>

                {/* Card content */}
                <div className="p-5 flex flex-col flex-1 sm:p-6">
                  <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-medium mb-1">
                    {person.title}
                  </span>
                  <h3 className="font-serif font-semibold text-navy text-base mb-0.5 sm:text-lg">
                    {person.name}
                  </h3>
                  <p className="text-muted-foreground/70 text-xs italic mb-3 sm:text-sm">
                    {person.designation}
                  </p>
                  <div className="w-8 h-px bg-gold/40 mb-3" />
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1 sm:text-sm">
                    {person.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values strip ──────────────────────────────────────────────────── */}
      <section className="bg-navy py-10 px-4 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-medium">
            Governance · Discipline · Transparency · Nation-First Vision
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;

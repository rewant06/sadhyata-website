import { motion } from "framer-motion";
import {
  Briefcase, TrendingUp, Users, ShieldCheck,
  BookOpen, Globe, Mail, Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyJoinUs = [
  {
    icon:  TrendingUp,
    title: "Fast-Growing Conglomerate",
    desc:  "Be part of a group expanding across 13 sectors simultaneously — rare scope for exposure and career velocity.",
  },
  {
    icon:  Users,
    title: "Cross-Sector Learning",
    desc:  "Work alongside teams in infrastructure, finance, technology, agri-business, and more — all under one roof.",
  },
  {
    icon:  ShieldCheck,
    title: "Governance-First Culture",
    desc:  "We operate with transparency and institutional discipline. You'll grow in an environment that takes compliance seriously.",
  },
  {
    icon:  BookOpen,
    title: "Nation-Building Mission",
    desc:  "Your work contributes to India's economic and cultural development — not just quarterly earnings.",
  },
  {
    icon:  Globe,
    title: "Pan-India Presence",
    desc:  "Opportunities across Jharkhand, Bihar, Delhi NCR, and expanding national operations.",
  },
  {
    icon:  Star,
    title: "Entrepreneurial Environment",
    desc:  "Early-stage conglomerate with institutional ambition. High ownership, high impact — for those who want to build.",
  },
];

const departments = [
  { sector: "Infrastructure & Construction",  roles: ["Site Engineers", "Project Managers", "Quantity Surveyors"] },
  { sector: "Finance & Capital Markets",       roles: ["Financial Analysts", "Compliance Officers", "NBFC Operations"] },
  { sector: "Legal & Governance",              roles: ["In-house Counsel", "Company Secretarial", "Regulatory Affairs"] },
  { sector: "Technology & Consultancy",        roles: ["Software Developers", "Cloud Infrastructure", "IT Consultants"] },
  { sector: "Human Resources",                 roles: ["HR Business Partners", "Talent Acquisition", "L&D Specialists"] },
  { sector: "Mining & Energy",                 roles: ["Mining Engineers", "Environmental Officers", "Operations Managers"] },
  { sector: "Agri-Business & Food Processing", roles: ["Agri Managers", "Supply Chain", "Quality Assurance"] },
  { sector: "Hospitality & Brands",            roles: ["Operations Leads", "Brand Managers", "Retail Managers"] },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-navy pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Join Us
            </span>
            <h1 className="text-3xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Build India's Future
              <br />
              <span className="text-gradient-gold">With Us</span>
            </h1>
            <div className="gold-divider mb-5" />
            <p className="text-primary-foreground/60 max-w-2xl leading-relaxed text-sm md:text-base">
              SADHYATA Group is growing fast across 13 sectors. We're looking
              for people who want to build institutions, not just fill roles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why join ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Culture
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-4 sm:text-3xl md:text-4xl">
              Why SADHYATA?
            </h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {whyJoinUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border hover:border-gold/30 transition-colors p-5 sm:p-6"
              >
                <item.icon className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-serif font-semibold text-navy text-sm mb-2 sm:text-base">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Sectors ──────────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Opportunities
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-4 sm:text-3xl md:text-4xl">
              Sectors We're Hiring In
            </h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed md:text-base">
              We hire continuously across all subsidiaries. If your profile
              matches any of these areas, we want to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.sector}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border p-4 sm:p-5"
              >
                <div className="flex items-start gap-2.5 mb-3">
                  <Briefcase className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <h3 className="font-serif font-semibold text-navy text-xs leading-snug sm:text-sm">
                    {dept.sector}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {dept.roles.map((role) => (
                    <li
                      key={role}
                      className="text-muted-foreground text-[11px] flex items-start gap-2 sm:text-xs"
                    >
                      <span className="text-gold/60 mt-1 text-[8px]">●</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experienced Professionals ─────────────────────────────────── */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid gap-8 items-center lg:grid-cols-2 lg:gap-12"
          >
            <div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Senior Talent
              </span>
              <h2 className="text-2xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-3xl">
                For Experienced &amp; Retired Professionals
              </h2>
              <div className="gold-divider mb-5" />
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4 md:text-base">
                SADHYATA Group welcomes applications from seasoned professionals
                and retired officers from the IAS, IPS, Armed Forces, PSUs, and
                senior corporate backgrounds.
              </p>
              <p className="text-primary-foreground/60 text-sm leading-relaxed md:text-base">
                Your decades of institutional knowledge, network, and governance
                experience have direct value in a growing conglomerate. We have
                positions in advisory, compliance, government liaison, and
                independent board roles.
              </p>
            </div>

            <div className="bg-navy-light border border-primary-foreground/10 p-6 sm:p-8">
              <h3 className="font-serif font-semibold text-primary-foreground text-lg mb-3">
                Areas of Interest for Senior Profiles
              </h3>
              <div className="gold-divider mb-5" />
              <ul className="space-y-2.5">
                {[
                  "Independent Board Advisory",
                  "Government & Regulatory Liaison",
                  "Corporate Governance & Compliance",
                  "Strategic Project Oversight",
                  "Mentorship & Leadership Development",
                ].map((role) => (
                  <li
                    key={role}
                    className="text-primary-foreground/60 text-sm flex items-start gap-2.5"
                  >
                    <span className="text-gold/60 mt-1 text-[8px] shrink-0">●</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Apply Now
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-4 sm:text-3xl">
              Send Your Application
            </h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 md:text-base">
              Send your CV and a brief note on the role or sector you're
              interested in. We review every application personally.
            </p>

            <div className="flex flex-col gap-3 items-center sm:flex-row sm:justify-center">
              <a
                href="mailto:hr@sadhyata.com?subject=Career Application — SADHYATA Group"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-primary-foreground font-medium text-sm tracking-wider uppercase hover:bg-navy-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                hr@sadhyata.com
              </a>
            </div>

            <p className="text-muted-foreground/60 text-xs mt-4">
              Please mention the department or subsidiary you're applying for in
              the subject line.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

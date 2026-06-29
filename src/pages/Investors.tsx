import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone, MapPin, FileText } from "lucide-react";
import type { ElementType } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// ─── Data ─────────────────────────────────────────────────────────────────────

const rta = {
  name:      "M/s KFin Technologies Limited",
  role:      "Registrar & Transfer Agent",
  address:   "Selenium Building, Tower-B, Plot No 31 & 32, Financial District, Nanakramguda, Serilingampally, Hyderabad, Rangareddi — 500 032, Telangana, India",
  tollFree:  "1800 309 4001",
  email:     "einward.ris@kfintech.com",
  whatsapp:  "+91 910 009 4099",
  portal:    { label: "KPRISM Investor Portal", url: "https://kprism.kfintech.com" },
  website:   { label: "www.kfintech.com",        url: "https://www.kfintech.com" },
  ris:       { label: "RIS Portal",              url: "https://ris.kfintech.com" },
};

const trustee = {
  name:     "Vistra ITCL (India) Limited",
  role:     "Debenture Trustee",
  address:  "IL&FS Financial Centre, Plot No. C-22, G Block, 7th Floor, Bandra Kurla Complex, Bandra (East), Mumbai — 400 051, Maharashtra, India",
  tel:      "+91 22 2659 3535",
  fax:      "+91 22 2659 3536",
  email:    "itcl@vistragroup.com",
  grievanceEmail: "itclinvestorgrievances@vistragroup.com",
};

const companyContact = {
  email:     "investors@sadhyata.com",
  secretary: "Group Company Secretary",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const DetailRow = ({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: ElementType;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
    <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
    <div className="min-w-0">
      <p className="text-[11px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-sm text-navy hover:text-gold transition-colors break-all inline-flex items-center gap-1"
        >
          {value}
          {external && <ExternalLink className="w-3 h-3 shrink-0" />}
        </a>
      ) : (
        <p className="text-sm text-navy break-words">{value}</p>
      )}
    </div>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────

const Investors = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Investor Centre | SADHYATA Group"
        description="SADHYATA Group Investor Centre — registrar & transfer agent, debenture trustee details, demat/listing information, and investor relations contact."
        path="/investors"
      />
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
              SADHYATA Group
            </span>
            <h1 className="text-3xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              Investor Centre
            </h1>
            <div className="gold-divider mb-5" />
            <p className="text-primary-foreground/60 max-w-2xl leading-relaxed text-sm md:text-base">
              Shareholder services, demat information, and contact details for
              registered intermediaries and the Group's investor relations team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Demat / Listing notice ────────────────────────────────────── */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Securities
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 sm:text-3xl">
              Demat &amp; Listing
            </h2>
            <div className="gold-divider mb-8" />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  heading: "CDSL",
                  body: "SADHYATA Group securities are listed on Central Depository Services (India) Limited (CDSL), enabling electronic holding and transfer of shares.",
                },
                {
                  heading: "NSDL",
                  body: "The Group has completed its agreement with National Securities Depository Limited (NSDL), extending dematerialized trading availability to NSDL account holders.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="bg-card border border-border p-5 sm:p-6"
                >
                  <h3 className="font-serif font-semibold text-navy text-base mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Share Registry
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 sm:text-3xl">
              Registrar &amp; Transfer Agent
            </h2>
            <div className="gold-divider mb-8" />

            <div className="bg-card border border-border p-5 sm:p-8">
              <div className="flex flex-col gap-1 mb-5 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif font-semibold text-navy text-lg sm:text-xl">
                  {rta.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[11px] tracking-wider uppercase self-start sm:self-auto">
                  {rta.role}
                </span>
              </div>

              <div className="space-y-0">
                <DetailRow
                  icon={MapPin}
                  label="Registered Address"
                  value={rta.address}
                />
                <DetailRow
                  icon={Phone}
                  label="Toll Free"
                  value={rta.tollFree}
                  href={`tel:${rta.tollFree.replace(/\s/g, "")}`}
                />
                <DetailRow
                  icon={Mail}
                  label="Email"
                  value={rta.email}
                  href={`mailto:${rta.email}`}
                />
                <DetailRow
                  icon={Phone}
                  label="WhatsApp"
                  value={rta.whatsapp}
                  href={`https://wa.me/${rta.whatsapp.replace(/[^0-9]/g, "")}`}
                  external
                />
                <DetailRow
                  icon={ExternalLink}
                  label="Investor Portal (KPRISM)"
                  value={rta.portal.label}
                  href={rta.portal.url}
                  external
                />
                <DetailRow
                  icon={ExternalLink}
                  label="RIS Portal"
                  value={rta.ris.label}
                  href={rta.ris.url}
                  external
                />
                <DetailRow
                  icon={ExternalLink}
                  label="Website"
                  value={rta.website.label}
                  href={rta.website.url}
                  external
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Debenture Trustee ─────────────────────────────────────────── */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Debt Securities
            </span>
            <h2 className="text-2xl font-serif font-semibold text-navy mt-3 mb-6 sm:text-3xl">
              Debenture Trustee
            </h2>
            <div className="gold-divider mb-8" />

            <div className="bg-card border border-border p-5 sm:p-8">
              <div className="flex flex-col gap-1 mb-5 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif font-semibold text-navy text-lg sm:text-xl">
                  {trustee.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[11px] tracking-wider uppercase self-start sm:self-auto">
                  {trustee.role}
                </span>
              </div>

              <div className="space-y-0">
                <DetailRow
                  icon={MapPin}
                  label="Registered Address"
                  value={trustee.address}
                />
                <DetailRow
                  icon={Phone}
                  label="Telephone"
                  value={trustee.tel}
                  href={`tel:${trustee.tel.replace(/\s/g, "")}`}
                />
                <DetailRow
                  icon={Phone}
                  label="Fax"
                  value={trustee.fax}
                />
                <DetailRow
                  icon={Mail}
                  label="Business Email"
                  value={trustee.email}
                  href={`mailto:${trustee.email}`}
                />
                <DetailRow
                  icon={Mail}
                  label="Investor Grievances"
                  value={trustee.grievanceEmail}
                  href={`mailto:${trustee.grievanceEmail}`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Investor Relations
            </span>
            <h2 className="text-2xl font-serif font-semibold text-primary-foreground mt-3 mb-4 sm:text-3xl">
              Get in Touch
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-primary-foreground/60 max-w-xl mx-auto text-sm leading-relaxed mb-8 md:text-base">
              For investor queries, shareholder grievances, or any matters
              related to Group securities, contact our {companyContact.secretary}.
            </p>
            <a
              href={`mailto:${companyContact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-medium text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              {companyContact.email}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────────────── */}
      <section className="bg-navy-dark py-6 px-4 md:px-12 lg:px-20 border-t border-primary-foreground/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary-foreground/30 text-[11px] leading-relaxed text-center">
            <FileText className="inline w-3 h-3 mr-1 -mt-0.5" />
            The information on this page is provided for general reference. For
            official disclosures, please contact the Company Secretary or the
            Registrar &amp; Transfer Agent directly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;

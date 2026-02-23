import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { BarChart3 } from "lucide-react";

const SadhyataBroking = () => (
  <SubsidiaryPageLayout
    icon={BarChart3}
    name="Sadhyata Broking Private Limited"
    tagline="Structured Brokerage. Transparent Execution. Institutional Trust."
    heroDescription="Sadhyata Broking Private Limited is the financial market intermediation arm of the Sadhyata Group, incorporated in 2025 to provide secure, technology-enabled, and compliance-driven brokerage services across equity, derivatives, commodities, and investment products."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Sadhyata Broking Private Limited has been established with a long-term vision to become a trusted and technology-forward brokerage platform serving retail investors, high-net-worth individuals (HNIs), corporate clients, and institutional participants.",
      "The company is structured to operate with regulatory discipline, transparent fee models, risk-managed execution systems, and digital-first client servicing architecture. Our objective is not merely to facilitate trades, but to build long-term investor relationships anchored in trust, research, and governance.",
    ]}
    verticals={[
      { title: "Equity Broking", points: ["Cash market trading", "Delivery & intraday trading", "Institutional and retail execution", "Algorithmic trading enablement (future roadmap)"] },
      { title: "Derivatives Trading", points: ["Equity Futures & Options", "Index Derivatives", "Hedging solutions for corporates", "Risk management advisory"] },
      { title: "Commodity & Currency Trading", points: ["Commodity derivatives participation", "Currency futures & hedging solutions", "Industrial risk management support"] },
      { title: "Investment & Wealth Solutions", points: ["Mutual fund distribution", "Bonds & fixed-income products", "Portfolio advisory services (future roadmap)"] },
      { title: "Technology & Trading Infrastructure", points: ["Web-based trading platform", "Mobile trading application", "Real-time market data feeds", "Secure client dashboard"] },
    ]}
    operationalPhilosophy={[
      "Margin monitoring systems and automated risk alerts",
      "Exposure limits and surveillance monitoring",
      "Compliance audit trails and transparent fee disclosure",
      "Investor protection and regulatory alignment as core priorities",
    ]}
    operationalTitle="Risk Management Philosophy"
    vision="To become a trusted, technology-driven brokerage institution delivering transparent, disciplined, and research-backed market access to investors across India."
    mission="To facilitate secure capital market participation through robust compliance, digital innovation, structured advisory, and long-term investor relationship building."
  />
);

export default SadhyataBroking;

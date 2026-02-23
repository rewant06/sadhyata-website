import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { TrendingUp } from "lucide-react";

const SadhyataInvestment = () => (
  <SubsidiaryPageLayout
    icon={TrendingUp}
    name="Sadhyata Investment Private Limited"
    tagline="Capital Deployment with Precision and Purpose"
    heroDescription="Sadhyata Investment Private Limited is the Group's dedicated investment and asset management vehicle, incorporated in 2023 as a step-down subsidiary under Sadhyata Capital."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "It is structured to manage strategic investments, optimize liquidity, and drive long-term financial growth.",
    ]}
    verticals={[
      { title: "Core Focus Areas", points: ["Equity and debt investments", "Hybrid instruments", "Infrastructure-focused capital vehicles", "Alternative Investment Fund (AIF) roadmap", "Private equity syndication planning"] },
    ]}
    verticalsSectionTitle="Investment Focus"
    vision="To become a multi-asset investment platform deploying capital with structured risk management and measurable impact."
  />
);

export default SadhyataInvestment;

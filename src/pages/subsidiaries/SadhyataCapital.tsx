import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import SEO from "@/components/SEO";
import { Landmark } from "lucide-react";

const SadhyataCapital = () => (
  <>
    <SEO
      title="Sadhyata Capital Private Limited | SADHYATA Group"
      description="Sadhyata Capital Private Limited is SADHYATA Group's financial services platform, structuring capital allocation and project finance on its path to becoming a regulated NBFC."
      path="/businesses/capital"
    />
    <SubsidiaryPageLayout
    icon={Landmark}
    name="Sadhyata Capital Private Limited"
    tagline="Structured Finance. Institutional Discipline."
    heroDescription="Sadhyata Capital Private Limited, incorporated in 2023, is the financial services platform of the Group, structured to evolve into a regulated Non-Banking Financial Company (NBFC)."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "It serves as the Group's internal capital structuring engine while preparing for external lending and advisory services. Provides capital discipline across subsidiaries and prepares for external financial market participation.",
    ]}
    verticals={[
      { title: "Core Areas", points: ["Internal capital allocation", "Project finance structuring", "SME and retail lending roadmap", "Structured credit solutions", "Wealth and advisory services (future expansion)"] },
      { title: "Digital Framework", points: ["Loan origination platforms", "Risk scoring models", "Compliance-ready lending architecture", "Digital servicing capabilities"] },
    ]}
    verticalsSectionTitle="Business Framework"
    vision="To build a trusted financial institution anchored in transparency, prudence, and scalable credit delivery."
    />
  </>
);

export default SadhyataCapital;

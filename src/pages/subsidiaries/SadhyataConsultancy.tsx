import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import SEO from "@/components/SEO";
import { Monitor } from "lucide-react";

const SadhyataConsultancy = () => (
  <>
    <SEO
      title="Sadhyata Consultancy Limited | SADHYATA Group"
      description="Sadhyata Consultancy Limited is SADHYATA Group's technology arm — enterprise software, ERP/CRM platforms, cloud hosting, and AI integration for the Group and enterprise clients."
      path="/businesses/consultancy"
    />
    <SubsidiaryPageLayout
    icon={Monitor}
    name="Sadhyata Consultancy Limited"
    tagline="Digital Backbone of the Group"
    heroDescription="Sadhyata Consultancy Limited is the technology and consulting arm of the Sadhyata Group, incorporated in 2023. Serving as the digital transformation enabler for all subsidiaries and future external enterprise clients."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Sadhyata Consultancy Limited delivers enterprise-grade technology solutions, from software development and ERP platforms to cloud infrastructure and AI integration, powering the digital backbone of the entire Group ecosystem.",
    ]}
    verticals={[
      { title: "Core Capabilities", points: ["Enterprise software development", "ERP & CRM platforms", "Data center establishment", "Cloud hosting services", "AI & automation integration"] },
    ]}
    verticalsSectionTitle="Technology Services"
    vision="To become a sovereign technology and cloud infrastructure provider for Indian enterprises."
    />
  </>
);

export default SadhyataConsultancy;

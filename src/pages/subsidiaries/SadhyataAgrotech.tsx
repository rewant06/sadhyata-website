import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import SEO from "@/components/SEO";
import { Wheat } from "lucide-react";

const SadhyataAgrotech = () => (
  <>
    <SEO
      title="Sadhyata Agrotech Limited | SADHYATA Group"
      description="Sadhyata Agrotech Limited is SADHYATA Group's agri-business arm — dairy, agro-processing, packaged foods, and spice exports connecting India's farms to global markets."
      path="/businesses/agrotech"
    />
    <SubsidiaryPageLayout
    icon={Wheat}
    name="Sadhyata Agrotech Limited"
    tagline="From Farms to Global Markets"
    heroDescription="Sadhyata Agrotech Limited, incorporated in 2023, is focused on agricultural innovation, food processing, and agro exports. The company bridges rural production with national and international markets."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Sadhyata Agrotech Limited is committed to integrating sustainable sourcing, value-added processing, and export expansion to create a meaningful agri-business enterprise connecting India's farms to the world.",
    ]}
    verticals={[
      { title: "Core Business Areas", points: ["Dairy projects (Jharkhand focus)", "Agro-processing units", "Packaged foods and premium dairy products", "Makhana & Indian spice exports", "FMCG private-label roadmap"] },
    ]}
    verticalsSectionTitle="Business Segments"
    vision="To become a leading agri-business enterprise connecting India's farms to the world."
    />
  </>
);

export default SadhyataAgrotech;

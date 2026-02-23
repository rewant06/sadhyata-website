import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { ShoppingBag } from "lucide-react";

const SadhyataBrands = () => (
  <SubsidiaryPageLayout
    icon={ShoppingBag}
    name="Sadhyata Brands Limited"
    tagline="Redefining Organized Retail"
    heroDescription="Sadhyata Brands Limited is the Group's retail and omni-channel commerce arm, incorporated in 2023. Focused on tier-2 and tier-3 city expansion, combining scale with localized merchandising."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Sadhyata Brands Limited is building a trusted national retail brand delivering value, convenience, and quality to consumers across India through modern retail formats and digital commerce.",
    ]}
    verticals={[
      { title: "Core Strategy", points: ["Hypermarkets", "Convenience retail stores", "Private label product development", "Digital commerce platform", "Integrated warehousing & logistics"] },
    ]}
    verticalsSectionTitle="Retail Model"
    vision="To build a trusted national retail brand delivering value, convenience, and quality."
  />
);

export default SadhyataBrands;

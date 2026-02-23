import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { Hotel } from "lucide-react";

const SadhyataHotels = () => (
  <SubsidiaryPageLayout
    icon={Hotel}
    name="Sadhyata Hotels Limited"
    tagline="Premium Hospitality with Global Aspirations"
    heroDescription="Sadhyata Hotels Limited, incorporated in 2023, marks the Group's entry into the premium hospitality and nightlife segment. The venture is designed to combine Indian hospitality ethos with global service standards."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Sadhyata Hotels Limited is built on a strategic vision to create lifestyle-forward hospitality assets that serve both business and leisure travellers. From premium urban venues to full-service hotels, the brand aims to deliver memorable experiences rooted in Indian warmth and international quality.",
    ]}
    verticals={[
      { title: "Core Business Model", points: ["High-end bars and nightlife venues (Delhi NCR launch phase)", "Full-service urban hotels", "Metro city expansion across India", "International expansion roadmap (Singapore, Dubai, Malaysia, Indonesia, Mauritius)"] },
      { title: "Strategic Position", points: ["Lifestyle branding platform", "Premium asset-based hospitality growth", "Business and leisure travel integration"] },
    ]}
    verticalsSectionTitle="Business Segments"
    vision="To establish a nationally respected and internationally recognized hospitality brand."
  />
);

export default SadhyataHotels;

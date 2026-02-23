import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { Shirt } from "lucide-react";

const SadhyataFashion = () => (
  <SubsidiaryPageLayout
    icon={Shirt}
    name="Sadhyata Fashion Limited"
    tagline="Where Tradition Meets Contemporary Retail"
    heroDescription="Sadhyata Fashion Limited, incorporated in 2023, is the Group's apparel and fashion retail vertical, building culturally rooted yet modern fashion brands serving metro and tier-2 markets."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Sadhyata Fashion Limited integrates design, manufacturing, and retail into a vertically integrated fashion ecosystem. With artisan collaborations and exclusive brand outlets, the company celebrates India's textile heritage while delivering contemporary style.",
    ]}
    verticals={[
      { title: "Core Business Model", points: ["Ethnic & contemporary apparel", "Vertical integration (design to retail)", "Artisan collaborations", "Exclusive brand outlets", "Digital-first fashion commerce"] },
    ]}
    verticalsSectionTitle="Fashion Ecosystem"
    vision="To become a nationally recognized apparel brand combining tradition, affordability, and scale."
  />
);

export default SadhyataFashion;

import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import SEO from "@/components/SEO";
import { Shirt } from "lucide-react";

const SadhyataFashion = () => (
  <>
    <SEO
      title="Sadhyata Fashion Limited | SADHYATA Group"
      description="Sadhyata Fashion Limited is SADHYATA Group's apparel arm — ethnic and contemporary fashion brands blending artisan craftsmanship with modern retail across India."
      path="/businesses/fashion"
    />
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
  </>
);

export default SadhyataFashion;

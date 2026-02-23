import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { Factory } from "lucide-react";

const SadhyataBharat = () => (
  <SubsidiaryPageLayout
    icon={Factory}
    name="Sadhyata Bharat Limited"
    tagline="Industrial Strength for a Self-Reliant Nation"
    heroDescription="Sadhyata Bharat Limited is the Group's industrial manufacturing arm, established in 2023 to drive vertically integrated heavy industry development aligned with India's Atmanirbhar Bharat mission."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "This entity focuses on high-capacity production facilities designed to serve infrastructure, construction, industrial, and strategic sectors.",
    ]}
    verticals={[
      { title: "Sponge Iron Plant (300 TPD)", points: ["Raw material base for steel manufacturing"] },
      { title: "TMT Bar Manufacturing", points: ["High-grade reinforcement steel for construction and infrastructure projects"] },
      { title: "Cement Production Facility", points: ["Integrated cement manufacturing to support real estate and industrial demand"] },
      { title: "Industrial Fasteners & Components", points: ["Precision-engineered industrial components"] },
      { title: "Defence Manufacturing", points: ["Exploratory roadmap to contribute to India's strategic defence autonomy"] },
    ]}
    operationalPhilosophy={[
      "Vertical integration from mineral sourcing (via Mines)",
      "Industrial automation and process efficiency",
      "Export-oriented production capability",
      "Compliance with environmental and industrial standards",
    ]}
    vision="To emerge as a nationally significant industrial manufacturing enterprise delivering scale, strength, and sovereignty."
  />
);

export default SadhyataBharat;

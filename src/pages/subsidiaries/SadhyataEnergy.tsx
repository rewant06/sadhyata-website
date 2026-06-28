import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import SEO from "@/components/SEO";
import { Zap } from "lucide-react";

const SadhyataEnergy = () => (
  <>
    <SEO
      title="Sadhyata Energy Limited | SADHYATA Group"
      description="Sadhyata Energy Limited builds SADHYATA Group's energy portfolio — biodiesel, Bio-CNG, thermal power, solar, and EV charging infrastructure across India."
      path="/businesses/energy"
    />
    <SubsidiaryPageLayout
    icon={Zap}
    name="Sadhyata Energy Limited"
    tagline="Powering India's Integrated Energy Future"
    heroDescription="Sadhyata Energy Limited, incorporated in 2023, is the dedicated energy vertical of the Sadhyata Group, established to build a diversified and future-ready energy portfolio spanning renewable, bio-based, and thermal power solutions."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "The company is strategically designed to balance sustainability with industrial reliability, ensuring that India's growing infrastructure and manufacturing sectors are supported by stable, scalable, and environmentally responsible energy systems.",
    ]}
    verticals={[
      { title: "Biodiesel Production", points: ["20–50 KLPD capacity", "Cleaner fuel alternatives aligned with India's biofuel policy"] },
      { title: "Bio-CNG Production", points: ["20–50 TPD capacity", "Conversion of organic waste into compressed bio-gas"] },
      { title: "Thermal Power Development", points: ["50–200 MW roadmap", "Reliable base-load power for industrial and regional grid support"] },
      { title: "Solar Energy Projects", points: ["10–50 MW grid-connected solar plants", "Contributing to renewable energy expansion"] },
      { title: "EV Charging Infrastructure", points: ["EV charging stations integrated with fuel outlets", "Supporting India's electric mobility transition"] },
    ]}
    operationalPhilosophy={[
      "Hybrid portfolio approach (Renewable + Conventional)",
      "Phased commissioning aligned with demand growth",
      "Industrial supply contracts focus",
      "Technology-driven plant optimization",
      "Environmental compliance and carbon-conscious execution",
    ]}
    vision="To become a diversified energy enterprise delivering secure, sustainable, and scalable power solutions for India's industrial future."
    />
  </>
);

export default SadhyataEnergy;

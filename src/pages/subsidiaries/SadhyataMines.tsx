import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { Mountain } from "lucide-react";

const SadhyataMines = () => (
  <SubsidiaryPageLayout
    icon={Mountain}
    name="Sadhyata Mines Private Limited"
    tagline="Responsible Extraction. Strategic Resource Leadership."
    heroDescription="Sadhyata Mines Private Limited is the dedicated mining and mineral resource development arm of the Sadhyata Group, established to execute structured, compliant, and scalable mining operations across India and beyond."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "Incorporated in 2025, Sadhyata Mines Private Limited operates as a subsidiary of Sadhyata Private Limited. The company has been established as a specialized vehicle exclusively for mining and mineral resource operations, ensuring operational clarity, regulatory precision, and focused growth execution.",
      "All mining activities within the Sadhyata ecosystem are conducted solely through Sadhyata Mines Private Limited. This structural separation strengthens governance, enhances compliance oversight, and enables sector-specific operational excellence.",
      "We are committed to responsible extraction, long-term mineral security, and strategic asset development aligned with India's industrial and infrastructure expansion.",
    ]}
    verticals={[
      { title: "Sand Mining Operations", points: ["Licensed sand extraction", "Riverbed and approved zone mining", "Construction-grade sand supply", "Volume-based structured distribution"] },
      { title: "Stone Mining & Crushing", points: ["Quarry operations", "Stone crushing & aggregate production", "Infrastructure-grade raw material supply", "Integrated logistics management"] },
      { title: "Coal Operations & Logistics", points: ["Coal outsourcing projects", "Coal handling & depot operations", "Coal logistics terminals", "Industrial coal supply chain management"] },
      { title: "Mineral Asset Development", points: ["Lease acquisition and management", "Long-term mineral block development", "Resource evaluation & feasibility assessment", "National and international asset exploration"] },
      { title: "Future Mineral Expansion", points: ["Iron ore", "Chromite", "Limestone", "Strategic international mineral sourcing (Australia & South Africa roadmap)"] },
    ]}
    operationalPhilosophy={[
      "Regulatory Compliance – Strict adherence to mining laws, environmental clearances, and statutory reporting",
      "Environmental Responsibility – Sustainable extraction, land restoration planning, and ecological impact management",
      "Operational Discipline – Structured lease-based asset control, equipment optimization",
      "Logistics Integration – Dedicated transportation channels ensuring efficient mineral distribution",
      "Technology & Monitoring – Data tracking, volume audits, and digital compliance reporting",
    ]}
    vision="To become a structured, compliant, and globally active mining enterprise securing long-term mineral resources for India's industrial growth."
    mission="To responsibly acquire, develop, and manage mineral assets through disciplined extraction practices, regulatory adherence, and vertically integrated supply chain systems that deliver sustainable value."
  />
);

export default SadhyataMines;

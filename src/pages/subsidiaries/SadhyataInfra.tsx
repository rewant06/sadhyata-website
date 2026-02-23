import SubsidiaryPageLayout from "@/components/SubsidiaryPageLayout";
import { Building2 } from "lucide-react";

const SadhyataInfra = () => (
  <SubsidiaryPageLayout
    icon={Building2}
    name="Sadhyata Infra Limited"
    tagline="Building Infrastructure. Powering Industry. Shaping India."
    heroDescription="Sadhyata Infra Limited is a fast-growing construction and mining enterprise headquartered in Jharkhand, India. Incorporated in 2023, the company was established to serve as the infrastructure and resource development flagship of the Sadhyata Group."
    aboutTitle="About the Company"
    aboutParagraphs={[
      "With an integrated operational model that combines civil engineering, real estate development and logistics infrastructure, Sadhyata Infra Limited delivers scalable solutions across the value chain. Our focus is not only on building assets, but on building long-term industrial capability aligned with India's development priorities.",
      "We operate with a commitment to operational excellence, regulatory compliance, capital discipline, and sustainable practices — ensuring reliability for clients, partners, and investors.",
    ]}
    verticals={[
      {
        title: "Civil & Infrastructure Development",
        points: ["Road and transport infrastructure", "Utility and industrial infrastructure projects", "Structural and civil engineering works", "Public and private sector construction contracts"],
      },
      {
        title: "Commercial & Residential Construction",
        points: ["Commercial complexes", "Residential developments", "Builder floors", "Mixed-use real estate projects"],
      },
      {
        title: "Real Estate Development & Project Execution",
        points: ["End-to-end project lifecycle execution", "Site planning and feasibility analysis", "Contractor coordination and supervision", "Cost control and quality assurance systems"],
      },
    ]}
    verticalsSectionTitle="Our Expertise"
    operationalPhilosophy={[
      "Engineering Integrity – Strong structural standards and technical accuracy",
      "Execution Discipline – Timelines, monitoring, and milestone-based delivery",
      "Compliance & Governance – Regulatory adherence and transparent processes",
      "Capital Efficiency – Phased, sustainable financial structuring",
      "Long-Term Asset Creation – Infrastructure built for durability and value",
    ]}
    vision="To become a nationally recognized infrastructure company known for execution excellence, structural reliability, and capital-efficient growth."
    mission="To design, construct, and deliver infrastructure and real estate projects that contribute to India's economic progress while maintaining uncompromising standards of quality, governance, and financial discipline."
  />
);

export default SadhyataInfra;

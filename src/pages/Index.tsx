import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GroupOverview from "@/components/GroupOverview";
import BusinessVerticals from "@/components/BusinessVerticals";
import Timeline from "@/components/Timeline";
import ChairmanMessage from "@/components/ChairmanMessage";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="SADHYATA Group | Building Institutions That Power India's Future"
        description="SADHYATA Group is a purpose-driven Indian conglomerate across infrastructure, energy, finance, technology, and social development."
        path="/"
      />
      <Header />
      <HeroSection />
      <GroupOverview />
      <ChairmanMessage />
      <BusinessVerticals />
      <Timeline />
      <Sustainability />
      <Footer />
    </div>
  );
};

export default Index;

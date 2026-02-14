import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GroupOverview from "@/components/GroupOverview";
import BusinessVerticals from "@/components/BusinessVerticals";
import Timeline from "@/components/Timeline";
import ChairmanMessage from "@/components/ChairmanMessage";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GroupOverview />
      <BusinessVerticals />
      <Timeline />
      <ChairmanMessage />
      <Sustainability />
      <Footer />
    </div>
  );
};

export default Index;

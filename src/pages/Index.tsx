import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PromiseSection from "@/components/PromiseSection";
import ProcessSection from "@/components/ProcessSection";
import TechSection from "@/components/TechSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import StoriesSection from "@/components/StoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PromiseSection />
      <ProcessSection />
      <TechSection />
      <ServicesSection />
      <PortfolioSection />
      <StoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

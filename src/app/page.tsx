import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureTabs from "@/components/sections/FeatureTabs";
import OperationSection from "@/components/sections/OperationSection";
import ManagementSection from "@/components/sections/ManagementSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureTabs />
        <OperationSection />
        <ManagementSection />
        <IntegrationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

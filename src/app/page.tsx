"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Send } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureTabs from "@/components/sections/FeatureTabs";
import OperationSection from "@/components/sections/OperationSection";
import ManagementSection from "@/components/sections/ManagementSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const ScrollPlane = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create a snaking path across the sections
  const x = useTransform(
    smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ["10%", "80%", "20%", "70%", "30%", "85%", "15%", "75%", "25%", "80%", "50%"]
  );

  const rotate = useTransform(
    smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [45, 90, 180, 90, 180, 90, 180, 90, 180, 90, 45]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[70] hidden lg:block">
      <motion.div
        style={{
          left: x,
          top: "50%",
          rotate: rotate,
          translateY: "-50%",
        }}
        className="absolute text-primary"
      >
        <div className="relative">
          <Send size={48} fill="currentColor" className="drop-shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
          <motion.div 
            className="absolute -left-4 top-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/50"
            style={{ originX: 1 }}
            animate={{ scaleX: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#1e293b]">
      <Navbar />
      <main>
        <Hero />
        <FeatureTabs />
        <div ref={featuresRef} className="relative">
          <ScrollPlane containerRef={featuresRef} />
          <OperationSection />
          <ManagementSection />
          <IntegrationSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import React, { useRef, useMemo } from "react";
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
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Snaking path x-coordinates
  const x = useTransform(
    smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ["10%", "90%", "10%", "90%", "10%", "90%", "10%", "90%", "10%", "90%", "50%"]
  );

  // Snaking path rotations
  const rotate = useTransform(
    smoothProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    [0, 45, 90, 135, 180, 225, 270, 315, 360, 405, 450, 495, 540, 585, 630, 675, 720, 765, 810, 855, 900]
  );

  // Vertical movement following the scroll but with some "bobbing"
  const y = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-[70] hidden lg:block overflow-hidden">
      <motion.div
        style={{
          left: x,
          top: y,
          rotate: rotate,
        }}
        className="absolute text-primary"
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <Send size={56} fill="currentColor" className="drop-shadow-[0_0_25px_rgba(249,115,22,0.9)]" />
          
          {/* Engine trail */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full pr-4">
             <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-4 h-0.5 bg-primary/40 rounded-full"
                    animate={{ 
                      scaleX: [1, 2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  />
                ))}
             </div>
          </div>
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
      <main className="relative overflow-x-hidden">
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

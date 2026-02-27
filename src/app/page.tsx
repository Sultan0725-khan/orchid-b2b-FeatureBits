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
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  // More complex snaking path x-coordinates to follow the new layout
  const x = useTransform(
    smoothProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    ["10%", "50%", "85%", "25%", "75%", "25%", "75%", "25%", "75%", "50%", "85%", "25%", "75%", "25%", "75%", "25%", "75%", "50%", "15%", "50%", "50%"]
  );

  // Agile flight dynamics - reduced rotation and bobbing
  const totalRotate = useTransform(smoothProgress, (v) => v * 1440); // 4 full turns instead of 20
  const bobbing = useTransform(smoothProgress, (v) => Math.sin(v * 60) * 10); // Reduced amplitude and frequency

  return (
    <div className="absolute inset-0 pointer-events-none z-[70] hidden lg:block overflow-hidden">
      <motion.div
        style={{
          left: x,
          top: useTransform(smoothProgress, (v) => `${v * 100}%`),
          rotate: totalRotate,
          y: bobbing,
        }}
        className="absolute text-primary"
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <Send size={64} fill="currentColor" className="drop-shadow-[0_0_30px_rgba(249,115,22,0.8)]" />
          
          {/* Engine trail / exhaust */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full pr-6 scale-150">
             <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-4 h-0.5 bg-primary/40 rounded-full"
                    animate={{ 
                      scaleX: [1, 2.5, 1],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{ 
                      duration: 0.6, 
                      repeat: Infinity, 
                      delay: i * 0.15 
                    }}
                  />
                ))}
             </div>
          </div>

          {/* Sparkle effects around the plane */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                x: [-20, -100],
                y: [Math.random() * 40 - 20, Math.random() * 40 - 20],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            />
          ))}
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

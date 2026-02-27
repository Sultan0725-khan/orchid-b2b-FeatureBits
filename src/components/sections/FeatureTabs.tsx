"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "operation", label: "Operation" },
  { id: "management", label: "Management" },
  { id: "integration", label: "Integration" },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("operation");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["operation", "management", "integration"];
      const scrollPosition = window.scrollY + 200; // Offset for stickiness/activation

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Approximate height of the sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-[60] bg-[#1e293b]/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center gap-2 py-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none
                  ${
                    isActive
                      ? "text-white"
                      : "text-[#94a3b8] hover:text-[#f8fafc] hover:bg-white/5"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#f97316] shadow-lg shadow-[#f97316]/25 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
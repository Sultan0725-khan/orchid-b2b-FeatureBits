import React from 'react';
import Image from 'next/image';
import { ChefHat } from 'lucide-react';

/**
 * Hero component for the Byte2Bite landing page.
 * Features a dark restaurant background overlay, large three-line headline,
 * and floating culinary decorative elements.
 */
const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden bg-[#1e293b]">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Main Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient gradient-to-b from-background/50 via-background/80 to-background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/50 via-[#1e293b]/80 to-[#1e293b]"></div>
        </div>

        {/* Decorative Floating Food Elements */}
        {/* Right food element */}
        <div className="absolute top-[20%] right-[8%] w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden opacity-40 blur-[1px] animate-pulse-slow">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
            alt="Pizza background element"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left food element */}
        <div className="absolute bottom-[30%] left-[4%] w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden opacity-30 blur-[1px] animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
            alt="Salad background element"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 mb-8 backdrop-blur-sm">
            <ChefHat className="w-4 h-4 text-[#f97316]" />
            <span className="text-sm font-medium text-[#f97316]">
              360° KI - Cloud Plattform für Restaurants
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[4.5rem] md:text-6xl lg:text-[5.5rem] font-extrabold text-[#f8fafc] mb-8 leading-[1.05] tracking-tight">
            <span className="block mb-2">Operation.</span>
            <span className="block bg-gradient-to-r from-[#f97316] to-[#fb923c] bg-clip-text text-transparent mb-2">
              Management.
            </span>
            <span className="block">Integration.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            QR-Code-Bestellung, Bezahlung, Live-Analysen und automatisierte Planung – alles in einem System.
          </p>

          {/* Social Proof */}
          <div className="text-sm text-[#94a3b8]/60 font-semibold tracking-wide uppercase">
            420+ Restaurants nutzen Byte2Bite
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex">
        <div className="w-7 h-11 rounded-full border-2 border-[#f8fafc]/10 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-[#f97316] animate-bounce translate-y-1"></div>
        </div>
      </div>
      
      {/* Bottom fade for transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e293b] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
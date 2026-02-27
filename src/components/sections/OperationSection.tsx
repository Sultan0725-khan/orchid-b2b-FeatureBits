"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  QrCode, 
  TrendingUp, 
  CreditCard, 
  Receipt, 
  Printer, 
  Activity, 
  BellAlert,
  Send
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  highlightText?: string;
  image: string;
  icon: React.ElementType;
  tags: string[];
  className?: string;
}

const FeatureCard = ({ title, description, highlightText, image, icon: Icon, tags, className = "" }: FeatureCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 flex flex-col min-h-[220px] ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-700 opacity-20 group-hover:scale-105 group-hover:opacity-30"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-2xl md:text-3xl text-primary mb-2 leading-tight">{title}</h3>
            <p className="text-foreground/90 text-sm md:text-base font-medium leading-relaxed">
              {description}
              {highlightText && (
                <span className="text-primary font-semibold ml-1">{highlightText}</span>
              )}
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const PaperPlanePath = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Define path manually to snake through the grid
  const path = "M 10 100 C 300 100, 300 300, 600 300 S 900 500, 1200 500";
  
  // Transform progress into movement along a custom path logic
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "95%"]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["10%", "40%", "70%", "90%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [15, 45, -15, 30, 10]);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block overflow-visible">
      <motion.div
        style={{
          left: x,
          top: y,
          rotate: rotate,
        }}
        className="absolute text-primary"
      >
        <Send size={40} fill="currentColor" className="drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
      </motion.div>
    </div>
  );
};

export default function OperationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="operation" ref={containerRef} className="relative py-24 md:py-32 bg-[#2d3748] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Operation
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Alles, was im laufenden Betrieb zählt: Bestellung, Küche, Service und Zahlung – live und effizient.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Paper Plane */}
          <PaperPlanePath scrollYProgress={smoothProgress} />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[auto]">
            {/* Scannen & Bestellen - Large row span */}
            <FeatureCard 
              className="lg:col-span-1 lg:row-span-1"
              title="Scannen & Bestellen"
              description="Online direkt am Tisch bestellen"
              highlightText="- ohne zu Warten - einfach durch scannen eines QR-Codes"
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Bestellen-4.jpg"
              icon={QrCode}
              tags={["In-House Online Bestellungen", "Direkt an Küche/Bar"]}
            />

            {/* Upselling */}
            <FeatureCard 
              title="Upselling"
              description="Promotions, Rabatte und Produktempfehlungen beim Check-out"
              highlightText="steigern den Bonwert"
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Upselling03-5.jpg"
              icon={TrendingUp}
              tags={["Promotions", "Membership"]}
            />

            {/* Bezahlen */}
            <FeatureCard 
              title="Bezahlen"
              description="Schnell bezahlen per Smartphone oder in Bar vor Ort -"
              highlightText="Verarbeitung von verifizierten Bestellungen"
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Bezahlen-6.jpg"
              icon={CreditCard}
              tags={["Online & Vor-Ort", "PayWall", "TSE Integration"]}
            />

            {/* Kasse */}
            <FeatureCard 
              title="Kasse"
              description="Alle Bestellungen laufen direkt in die Kasse -"
              highlightText="ohne manuelle Doppelerfassung"
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Kasse-7.jpeg"
              icon={Receipt}
              tags={["POS Integration", "Weniger Fehler", "Saubere Buchhaltung"]}
            />

            {/* Bondruck */}
            <FeatureCard 
              title="Bondruck"
              description="Automatischer Bondruck für"
              highlightText="Küche & Bar."
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/feature-bondruck-8.jpg"
              icon={Printer}
              tags={["Bon Druck", "Tablets", "Digitale Bons"]}
            />

            {/* Live Tracking */}
            <FeatureCard 
              title="Live Tracking"
              description="Monitor in Küchen & Bar mit Status und"
              highlightText="intelligentem Zeit-Countdown pro Bestellung."
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/feature-live-tracking-9.jpg"
              icon={Activity}
              tags={["Live-Servier-Status", "Engpässe erkennen", "Live-Zubereitungszeiten"]}
            />

            {/* Alarm & Benachrichtigung - Highlighted or larger */}
            <FeatureCard 
              className="md:col-span-2 lg:col-span-3"
              title="Alarm & Benachrichtigung"
              description="Echtzeit-Warnungen bei"
              highlightText="überschrittener Zubereitungszeit"
              image="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Alarm_20__20Benachrichtigung02-10.png"
              icon={BellAlert}
              tags={["Alarm bei Verzögerung", "Performance steigern", "Echtzeit Benachrichtigungen"]}
            />
          </div>
        </div>
      </div>

      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
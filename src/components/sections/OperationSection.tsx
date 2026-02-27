"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  QrCode, 
  TrendingUp, 
  CreditCard, 
  Receipt, 
  Printer, 
  Activity, 
  Bell,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  highlightText?: string;
  image: string;
  icon: React.ElementType;
  tags: string[];
}

const features: Feature[] = [
  {
    id: "bestellen",
    title: "Scannen & Bestellen",
    description: "Online direkt am Tisch bestellen",
    highlightText: "- ohne zu Warten - einfach durch scannen eines QR-Codes",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Bestellen-4.jpg",
    icon: QrCode,
    tags: ["In-House Online Bestellungen", "Direkt an Küche/Bar", "Kontaktlos"]
  },
  {
    id: "upselling",
    title: "Upselling",
    description: "Promotions, Rabatte und Produktempfehlungen beim Check-out",
    highlightText: "steigern den Bonwert",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Upselling03-5.jpg",
    icon: TrendingUp,
    tags: ["Promotions", "Membership", "KI-Empfehlungen"]
  },
  {
    id: "bezahlen",
    title: "Bezahlen",
    description: "Schnell bezahlen per Smartphone oder in Bar vor Ort -",
    highlightText: "Verarbeitung von verifizierten Bestellungen",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Bezahlen-6.jpg",
    icon: CreditCard,
    tags: ["Online & Vor-Ort", "Apple & Google Pay", "TSE Integration"]
  },
  {
    id: "kasse",
    title: "Kasse",
    description: "Alle Bestellungen laufen direkt in die Kasse -",
    highlightText: "ohne manuelle Doppelerfassung",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Kasse-7.jpeg",
    icon: Receipt,
    tags: ["POS Integration", "Weniger Fehler", "Einfacher Abschluss"]
  },
  {
    id: "bondruck",
    title: "Bondruck",
    description: "Automatischer Bondruck für",
    highlightText: "Küche & Bar.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/feature-bondruck-8.jpg",
    icon: Printer,
    tags: ["Zubereitungs-Bons", "Tablets", "Digitale Bons"]
  },
  {
    id: "live_tracking",
    title: "Live Tracking",
    description: "Monitor in Küchen & Bar mit Status und",
    highlightText: "intelligentem Zeit-Countdown pro Bestellung.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/feature-live-tracking-9.jpg",
    icon: Activity,
    tags: ["Echtzeit Status", "Engpässe erkennen", "SLA Monitoring"]
  },
  {
    id: "alarm",
    title: "Alarm & Benachrichtigung",
    description: "Echtzeit-Warnungen bei",
    highlightText: "überschrittener Zubereitungszeit",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Alarm_20__20Benachrichtigung02-10.png",
    icon: Bell,
    tags: ["Performance Boost", "Push Alerts", "Krisenmanagement"]
  }
];

const FeatureOverviewCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() => {
        document.getElementById(`feature-${feature.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
      className="cursor-pointer group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon size={20} className="text-primary group-hover:text-white" />
      </div>
      <span className="font-bold text-sm md:text-base text-white/90 group-hover:text-white">{feature.title}</span>
      <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
    </motion.div>
  );
};

const FeatureDetailSection = ({ feature, index }: { feature: Feature; index: number }) => {
  const isEven = index % 2 === 0;
  const Icon = feature.icon;

  return (
    <section 
      id={`feature-${feature.id}`}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
          {/* Content */}
          <div className="flex-1 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20">
                  <Icon size={32} className="text-primary" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                {feature.description}
                {feature.highlightText && (
                  <span className="text-primary font-bold ml-1">{feature.highlightText}</span>
                )}
              </p>
              
              <div className="space-y-4 mb-10">
                {feature.tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-white/70 font-medium">{tag}</span>
                  </div>
                ))}
              </div>
              
              <button className="group flex items-center gap-2 text-primary font-bold text-lg hover:underline transition-all">
                Mehr erfahren
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: isEven ? 2 : -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-square rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <Image 
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className={`absolute top-1/2 ${isEven ? '-right-1/4' : '-left-1/4'} -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[160px] pointer-events-none opacity-50`} />
    </section>
  );
};

export default function OperationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="operation" ref={containerRef} className="bg-[#2d3748] scroll-mt-20">
      {/* Section Introduction */}
      <section className="py-24 md:py-32 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Activity size={14} />
              Live & Effizient
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Operation
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium"
            >
              Alles, was im laufenden Betrieb zählt: Bestellung, Küche, Service und Zahlung – live und effizient.
            </motion.p>
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <FeatureOverviewCard key={feature.id} feature={feature} index={idx} />
            ))}
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Detailed Subsections */}
      <div className="relative">
        {/* Paper Plane Guide Line (Optional visual) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden lg:block -translate-x-1/2 pointer-events-none" />
        
        {features.map((feature, idx) => (
          <FeatureDetailSection key={feature.id} feature={feature} index={idx} />
        ))}
      </div>
    </div>
  );
}

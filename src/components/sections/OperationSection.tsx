"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  QrCode, 
  TrendingUp, 
  CreditCard, 
  Receipt, 
  Printer, 
  Activity, 
  Bell,
  ArrowRight,
  UsersRound,
  Smartphone,
  MessageSquare
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
      description: "Revolutionieren Sie den Bestellprozess: Online direkt am Tisch bestellen – ohne Wartezeit, einfach durch Scannen eines QR-Codes. So entlasten Sie Ihr Service-Personal spürbar.",
      highlightText: "QR-Codes für jeden Tisch: Erstellen, downloaden, fertig.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Bestellen-4.jpg",
      icon: QrCode,
      tags: [
        "Kein Warten",
        "Keine Missverständnisse",
        "Weniger Laufwege",
        "Weniger Personal"
      ]
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
    id: "membership",
    title: "Membership",
    description: "Kunde wird zum Stammkunde. Sammelen Sie Kundendaten nach dem Bezahl Vorgang. Sammelen Sie Kunden-Bewertungen und Posten Sie auf Google-Maps, Sozial Media, Trip-Advisor etc. Belohnen Sie Ihre Gäste mit Digitale Membership-Programme, Treuepunkte und Gutscheine zur Kundenbindung.",
    highlightText: "Membership-Programme mit Treuepunkten, Digitale Gutscheine & Rabattcodes, Kontaktdaten automatisch sammeln (Email, Name), Gezielte Kampagnen an Stammkunden",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Upselling03-5.jpg", // Placeholder image
    icon: UsersRound,
    tags: ["Stammkunden", "Gutscheine", "Kampagnen", "Loyalty", "Gutscheine", "Kampagnen"]
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
    id: "kellner_modus",
    title: "Kellner Modus",
    description: "Bestellungsaufnahme durch Kellner für die älterer Kundschaft als Fallback ohne QR-Code scannen. Manuelle Eingabe durch Service Personal ins Handy oder Tablet. Bestellungen landen genauso in Küche & Bar.",
    highlightText: "Einheitlicher Workflow für alle Bestellwege",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Bestellen-4.jpg", // Placeholder
    icon: Smartphone,
    tags: ["Manuell", "Fallback", "Flexibel", "Klassicher Service"]
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
  },
  {
    id: "notifikation",
    title: "Notifikation",
    description: "Bleiben Sie immer informiert auch wenn Sie nicht vorort sind. Whats-App Benachrichtigungen werden an Managment und Inhaber in Echtzeit versendet bei Problemen im Ablauf.",
    highlightText: "Schreiten Sie proaktive ein bevor der Gast verloren geht durch zu lange Wartezeiten.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/Alarm_20__20Benachrichtigung02-10.png", // Placeholder
    icon: MessageSquare,
    tags: ["WhatsApp", "Echtzeit", "Proaktiv", "Management-Info"]
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  return (
    <section 
      id={`feature-${feature.id}`}
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
            {/* Content */}
            <div className="flex-1 w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                
                <motion.h3 
                  animate={isInView ? { 
                    scale: [1, 1.05, 1], 
                    color: ["#ffffff", "#f97316", "#ffffff"],
                  } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {feature.title}
                </motion.h3>
                
                <div className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                  <p>{feature.description}</p>
                  {feature.highlightText && (
                    <span className="text-primary font-bold mt-6 block text-2xl md:text-4xl leading-tight">
                      {feature.highlightText}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-12">
                  {feature.tags.map((tag, idx) => (
                    <motion.div 
                      key={idx} 
                      animate={isInView ? { 
                        boxShadow: ["0 0 0px #f97316", "0 0 30px #f97316", "0 0 0px #f97316"],
                        borderColor: ["rgba(255,255,255,0.1)", "rgba(249,115,22,1)", "rgba(255,255,255,0.1)"],
                        color: ["rgba(255,255,255,0.7)", "rgba(249,115,22,1)", "rgba(255,255,255,0.7)"],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ 
                        duration: 1.5, 
                        delay: 1 + (idx * 0.2),
                        ease: "easeInOut"
                      }}
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-base font-bold transition-all duration-300 shadow-lg"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Image */}
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, x: 150, rotate: 5 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 150, rotate: 5 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-video lg:aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
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
  const isInView = useInView(containerRef, { amount: 0.1, once: false });

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
              animate={isInView ? { 
                scale: [1, 1.1, 1], 
                color: ["#ffffff", "#f97316", "#ffffff"],
                transition: { duration: 1.5, delay: 0.2 }
              } : {}}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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

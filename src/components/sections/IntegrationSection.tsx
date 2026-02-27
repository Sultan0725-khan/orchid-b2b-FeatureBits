"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  ShoppingCart, 
  Truck, 
  Megaphone, 
  Link2,
  ArrowRight,
  Globe,
  Zap
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
    id: "webshop",
    title: "Webshop",
    description: "Online-Bestellung für Abholung oder Vorbestellung.",
    highlightText: "Nahtlose Integration",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_13.png",
    icon: ShoppingCart,
    tags: ["Vorbestellung", "Abholung", "Einheitliche Daten"]
  },
  {
    id: "lieferung",
    title: "Lieferung",
    description: "Lieferkanäle strukturiert verbinden.",
    highlightText: "Effiziente Abwicklung",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_14.png",
    icon: Truck,
    tags: ["Sauberer Eingang", "Status nachvollziehbar", "Multi-Plattform"]
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Rabatte und Aktionen gezielt steuern.",
    highlightText: "Mehr Wiederkehrer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_15.png",
    icon: Megaphone,
    tags: ["Aktionen steuern", "Bonusprogramme", "Kundenbindung"]
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
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
                    transition: { duration: 1.5, delay: 0.5 }
                  } : {}}
                  className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  {feature.title}
                </motion.h3>
                
                <div className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  <p>{feature.description}</p>
                  {feature.highlightText && (
                    <span className="text-primary font-bold mt-6 block text-2xl md:text-3xl leading-tight">
                      {feature.highlightText}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3 mt-10">
                  {feature.tags.map((tag, idx) => (
                    <motion.div 
                      key={idx} 
                      animate={isInView ? { 
                        boxShadow: ["0 0 0px #f97316", "0 0 20px #f97316", "0 0 0px #f97316"],
                        borderColor: ["rgba(255,255,255,0.1)", "rgba(249,115,22,1)", "rgba(255,255,255,0.1)"],
                        color: ["rgba(255,255,255,0.7)", "rgba(249,115,22,1)", "rgba(255,255,255,0.7)"],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.8 + (idx * 0.15),
                        ease: "easeInOut"
                      }}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-semibold transition-all duration-300"
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
                initial={{ opacity: 0, x: 200 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
                transition={{ duration: 1, ease: "easeOut" }}
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
                
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white font-bold flex items-center gap-2">
                   <Zap className="text-primary" size={20} />
                   Instant Connect
                </div>
              </motion.div>
            </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className={`absolute top-1/2 ${isEven ? '-right-1/4' : '-left-1/4'} -translate-y-1/2 w-1/2 h-1/2 bg-teal-500/5 rounded-full blur-[160px] pointer-events-none opacity-50`} />
    </section>
  );
};

export default function IntegrationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: false });

  return (
    <div id="integration" ref={containerRef} className="bg-[#475569] scroll-mt-20">
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
              <Link2 size={14} />
              Vernetzt & Automatisiert
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
              Integration
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium"
            >
              Alle Kanäle und Systeme sauber verbunden – damit Daten automatisch fließen.
            </motion.p>
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <FeatureOverviewCard key={feature.id} feature={feature} index={idx} />
            ))}
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Detailed Subsections */}
      <div className="relative">
        {/* Paper Plane Guide Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden lg:block -translate-x-1/2 pointer-events-none" />
        
        {features.map((feature, idx) => (
          <FeatureDetailSection key={feature.id} feature={feature} index={idx} />
        ))}
      </div>

      {/* Categories Badge at Bottom */}
      <div className="py-20 flex justify-center">
        <div className="inline-flex items-center gap-1 p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
           <div className="px-6 py-2 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">Operation</div>
           <div className="px-6 py-2 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">Management</div>
           <div className="px-6 py-2 rounded-full text-xs font-bold text-white bg-primary shadow-lg shadow-primary/25 uppercase tracking-widest">Integration</div>
        </div>
      </div>
    </div>
  );
}

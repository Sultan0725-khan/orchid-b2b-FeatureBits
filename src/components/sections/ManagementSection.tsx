"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  Users, 
  ShoppingCart, 
  Sparkles 
} from 'lucide-react';

/**
 * ManagementSection Component
 * 
 * Focuses on AI-driven management features with glassmorphism cards.
 * Implements a complex bento-grid layout for Dashboard, Report, Alarms, Personal, and Einkauf.
 */

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ManagementSection: React.FC = () => {
  return (
    <section id="management" className="relative py-24 bg-[#334155] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 flex items-center gap-4"
            >
              Management
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" />
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              AI-Assistenz hilft Ihnen die richtigen Entscheidungen zu treffen. Steuern Sie effizient Ihr Restaurant zum Erfolg durch intelligente AI, Reports, Trends und Transparenz.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {['Alarm bei Verzögerung', 'Performance steigern', 'Echtzeit Benachrichtigungen'].map((tag, i) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-primary/90 whitespace-nowrap"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          
          {/* Dashboard Card - Large Feature */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 md:row-span-2 group relative overflow-hidden glass-card"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_11.png"
                alt="Dashboard AI Visual"
                fill
                className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dashboard</h3>
              </div>
              <p className="text-foreground/90 font-medium text-lg leading-tight mb-6">
                Alle wichtigen Kennzahlen an einem Ort.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">KPIs zentral</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">Schnelle Entscheidungen</span>
              </div>
            </div>
          </motion.div>

          {/* Report Card - Vertical Content Card */}
          <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 md:row-span-1 glass-card p-8 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Report</h3>
                <p className="text-muted-foreground text-sm">Automatisierte Reports für alle Übersichten.</p>
              </div>
            </div>
          </motion.div>

          {/* Management Alarme Card - Half Width Visual */}
          <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 md:row-span-2 group relative overflow-hidden glass-card"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_12.png"
                alt="Management Alarm Visual"
                fill
                className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Management Alarme</h3>
              </div>
              <p className="text-foreground/90 font-medium text-lg leading-tight mb-6">
                Engpässe und Verzögerungen sofort sichtbar.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">KPI-Alerts</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">Bottlenecks sichtbar</span>
              </div>
            </div>
          </motion.div>

          {/* Personal Card - Large Content with Background */}
          <motion.div 
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 md:row-span-1 glass-card p-8 group flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Personal</h3>
                <p className="text-muted-foreground text-sm font-medium">Schichtplanung und Kommunikation ohne Chaos.</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-primary/10 text-primary border border-primary/20">Schichtplanung</span>
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded bg-primary/10 text-primary border border-primary/20">Weniger Lücken</span>
            </div>
          </motion.div>

          {/* Einkauf Card - Full Width on Mobile, Grid Tile on Desktop */}
          <motion.div 
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 md:row-span-1 glass-card p-8 group flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Einkauf</h3>
                <p className="text-muted-foreground text-sm">Bestände und Nachbestellung im Blick.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Automatisiert</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Exportfähig</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Low-Stock Überblick</span>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .glass-card:hover {
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 18px 36px -18px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ManagementSection;

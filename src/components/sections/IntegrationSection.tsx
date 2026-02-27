import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Truck, Megaphone, Send } from 'lucide-react';

/**
 * IntegrationSection component
 * Clones the "Integration" section with pixel-perfect accuracy using Tailwind CSS.
 * Maintains dark gastronomy theme (Slate #475569) with orange highlights.
 * Features wide glassmorphism cards for Webshop, Lieferung, and Marketing.
 */
const IntegrationSection: React.FC = () => {
  return (
    <section 
      id="integration" 
      className="py-20 bg-[#475569] scroll-mt-20 overflow-hidden relative"
      style={{
        backgroundColor: '#475569',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Integration
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Alle Kanäle und Systeme sauber verbunden – damit Daten automatisch fließen.
          </p>
        </div>

        {/* Bento Grid - Integration Specific */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          
          {/* Webshop Card */}
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 min-h-[320px] backdrop-blur-sm flex flex-col">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_13.png"
                alt="Webshop integration"
                fill
                className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e293b]/90 via-[#1e293b]/40 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <ShoppingCart className="text-primary group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 transition-colors">Webshop</h3>
                  <p className="text-white/90 text-sm md:text-base font-medium max-w-sm">
                    Online-Bestellung für Abholung oder Vorbestellung.
                  </p>
                </div>
              </div>
              
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/10 text-white/70 border border-white/5 whitespace-nowrap">Vorbestellung</span>
                <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/10 text-white/70 border border-white/5 whitespace-nowrap">Abholung</span>
                <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30 whitespace-nowrap">Einheitliche Daten</span>
              </div>
            </div>
          </div>

          {/* Lieferung Card */}
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 min-h-[320px] backdrop-blur-sm flex flex-col">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_14.png"
                alt="Delivery channels"
                fill
                className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e293b]/90 via-[#1e293b]/40 to-transparent" />
            </div>

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <Truck className="text-primary group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 transition-colors">Lieferung</h3>
                  <p className="text-white/90 text-sm md:text-base font-medium max-w-sm">
                    Lieferkanäle strukturiert verbinden.
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/10 text-white/70 border border-white/5 whitespace-nowrap">Sauberer Eingang</span>
                <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/10 text-white/70 border border-white/5 whitespace-nowrap">Status nachvollziehbar</span>
              </div>
            </div>
          </div>

          {/* Marketing Card (Wide) */}
          <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 min-h-[320px] md:col-span-2 backdrop-blur-sm flex flex-col">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d7272520-44c5-4a40-95b9-82932f85a751-byte2bite-de/assets/images/images_15.png"
                alt="Marketing campaigns"
                fill
                className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/95 via-[#1e293b]/50 to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <Megaphone className="text-primary group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-bold text-primary mb-3 transition-colors">Marketing</h3>
                  <p className="text-white/90 text-lg md:text-xl font-medium max-w-xl">
                    Rabatte und Aktionen gezielt steuern.
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <span className="px-5 py-2 text-sm md:text-base font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">Aktionen steuern</span>
                <span className="px-5 py-2 text-sm md:text-base font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">Bonusprogramme</span>
                <span className="px-5 py-2 text-sm md:text-base font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">Mehr Wiederkehrer</span>
              </div>
            </div>

            {/* Final Paper Plane Position - Journey End */}
            <div className="absolute right-12 bottom-12 opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow">
              <div className="relative rotate-[45deg]">
                <Send className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/2 left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Categories Badge at Bottom (Visual Anchor) */}
      <div className="mt-20 flex justify-center pb-12">
        <div className="inline-flex items-center gap-1 p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
           <div className="px-6 py-2 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">Operation</div>
           <div className="px-6 py-2 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">Management</div>
           <div className="px-6 py-2 rounded-full text-xs font-bold text-white bg-primary shadow-lg shadow-primary/25 uppercase tracking-widest">Integration</div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
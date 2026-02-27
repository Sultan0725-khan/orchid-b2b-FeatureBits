import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * CTASection Component
 * 
 * Clones the call-to-action section "Welche 5 Features bringen in 14 Tagen den größten Effekt?"
 * Featuring an orange "Potenzialanalyse starten" button and a clean centered layout.
 * Optimized for the dark theme specified in the design instructions.
 */
const CTASection: React.FC = () => {
  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden bg-[#475569]" // Matching Section 3 'Integration' BG from design system
      id="cta-section"
    >
      {/* Background visual detail to match the 'clean centered layout' with character */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight text-balance">
            Welche 5 Features bringen in 14 Tagen den größten Effekt?
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Wir zeigen Ihnen die schnellsten Hebel für Wartezeit, Umsatz und Personaleffizienz – passend zu Ihrem Betrieb.
          </p>

          {/* Primary Action Button */}
          <div className="flex justify-center items-center group">
            <a 
              href="/potenzialanalyse"
              className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-black/10"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                boxShadow: '0 20px 40px -10px rgba(249, 115, 22, 0.3)'
              }}
            >
              Potenzialanalyse starten
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Contextual quote/detail from content if appropriate, though instructions emphasized clean layout */}
          <div className="mt-16 pt-8 border-t border-white/10 hidden md:block">
            <p className="text-white/60 text-sm font-semibold tracking-wider uppercase">
              DEIN PARTNER FÜR DIGITALE GASTRONOMIE-LÖSUNGEN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f97316] text-black pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#f97316] font-bold text-lg">B2B</span>
              </div>
              <span className="text-2xl font-extrabold text-[#1a1a1a]">Byte2Bite</span>
            </div>
            <div className="max-w-md">
              <p className="text-[#1a1a1a] text-base leading-relaxed mb-6">
                Your partner for digital gastronomy solutions. We bring restaurants into the future with cutting-edge technology.
              </p>
              <p className="italic text-[#1a1a1a] font-medium">
                &quot;You focus on guests – we deliver the data!&quot;
              </p>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-[#1a1a1a]">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <a href="/featureBits" className="text-[#1a1a1a] hover:opacity-75 transition-opacity text-base">
                  Feature Bites
                </a>
              </li>
              <li>
                <a href="/price" className="text-[#1a1a1a] hover:opacity-75 transition-opacity text-base">
                  Preise
                </a>
              </li>
              <li>
                <a href="/faq" className="text-[#1a1a1a] hover:opacity-75 transition-opacity text-base">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-8 lg:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-[#1a1a1a]">Contact</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#1a1a1a] mt-0.5" />
                <a href="mailto:info@byte2bite.de" className="text-[#1a1a1a] hover:opacity-75 transition-opacity text-base">
                  info@byte2bite.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#1a1a1a] mt-0.5" />
                <a href="tel:+491628509480" className="text-[#1a1a1a] hover:opacity-75 transition-opacity text-base">
                  +49 162 850 9480
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1a1a1a] mt-0.5" />
                <div className="text-[#1a1a1a] text-base">
                  Germany<br />
                  <span className="opacity-80">Available nationwide</span>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
                >
                  Jetzt E-Meeting anfragen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-black/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-medium">
          <div className="text-[#1a1a1a]/70">
            © 2026 Byte2Bite. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/datenschutz" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">
              Datenschutz
            </a>
            <a href="/impressum" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">
              Impressum
            </a>
            <a href="/agb" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
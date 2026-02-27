"use client";

import React from "react";
import Image from "next/image";
import { Globe, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[rgba(30,41,59,0.95)] backdrop-blur-sm border-b border-[rgba(255,255,255,0.1)] fixed top-0 left-0 right-0 z-[100] h-[73px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full py-4">
          {/* Logo and Language Switcher */}
          <div className="flex items-center space-x-4">
            <a className="flex items-center space-x-3" href="/">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-[12px] flex items-center justify-center shrink-0">
                <span className="text-[#1a1a1a] font-bold text-lg leading-[28px]">B2B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-br from-[#f97316] to-[#fb923c] bg-clip-text text-transparent hidden sm:inline-block tracking-tight">
                Byte2Bite
              </span>
            </a>
            
            <div className="hidden sm:block">
              <button 
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 rounded-[10px] px-3 gap-2 text-[#94a3b8] hover:text-[#f97316] hover:bg-[rgba(255,255,255,0.05)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                id="language-switcher"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Deutsch</span>
                <span className="sm:hidden font-bold">DE</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              className="text-sm font-medium transition-colors hover:text-[#f97316] text-[#94a3b8]" 
              href="/"
            >
              Home
            </a>
            <a 
              className="text-sm font-medium transition-colors hover:text-[#f97316] text-[#fb923c]" 
              href="/featureBits"
            >
              Feature Bits
            </a>
            <a 
              className="text-sm font-medium transition-colors hover:text-[#f97316] text-[#94a3b8]" 
              href="/price"
            >
              Pricing
            </a>
            <a 
              className="text-sm font-medium transition-colors hover:text-[#f97316] text-[#94a3b8]" 
              href="/faq"
            >
              FAQ
            </a>
            <a href="/kontakt" className="ml-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold bg-[#fb923c] text-[#1a1a1a] hover:bg-[#fb923c]/90 h-9 rounded-[10px] px-4 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f97316]/20">
                Contact
              </button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 rounded-[10px] px-3 gap-2 text-[#94a3b8] hover:text-[#f97316] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="font-bold">DE</span>
            </button>
            <button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-9 rounded-[10px] px-3 text-[#f97316] hover:bg-[rgba(255,255,255,0.05)] focus-visible:ring-2 focus-visible:ring-[#f97316]/40" 
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
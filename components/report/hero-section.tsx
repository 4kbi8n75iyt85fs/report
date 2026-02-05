"use client";

import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("executive-summary");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section relative overflow-hidden">
      {/* Decorative elements - soft brutalism style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-white/20 rotate-12" />
        <div className="absolute bottom-40 left-10 w-24 h-24 md:w-36 md:h-36 border-4 border-white/15 -rotate-6" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="inline-block bg-white/10 border-2 border-white/30 px-4 py-2 mb-6">
              <span className="text-sm font-bold uppercase tracking-widest">
                Market Intelligence Report 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Dhaka Tuition Market
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90 mb-8 leading-relaxed max-w-2xl">
              Comprehensive business intelligence for entrepreneurs entering 
              Bangladesh&apos;s high-growth private tutoring sector
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToContent}
                className="brutalist-btn bg-white text-primary px-8 py-4 text-lg cursor-pointer"
              >
                Explore Report
              </button>
              <a
                href="#recommendations"
                className="brutalist-btn bg-transparent text-white border-white px-8 py-4 text-lg cursor-pointer inline-block"
              >
                View Strategy
              </a>
            </div>
          </div>

          {/* Key metrics sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 md:p-8">
              <h2 className="font-bold text-lg uppercase tracking-wider mb-6 border-b-2 border-white/30 pb-4">
                Key Market Indicators
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl md:text-5xl font-bold">৳1.5B</p>
                  <p className="text-sm opacity-80 mt-1">Annual Market Size</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold">10%</p>
                  <p className="text-sm opacity-80 mt-1">CAGR Growth Rate</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold">92%</p>
                  <p className="text-sm opacity-80 mt-1">Student Participation</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold">$2.56B</p>
                  <p className="text-sm opacity-80 mt-1">Online Ed. by 2033</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={scrollToContent}
          className="scroll-indicator flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

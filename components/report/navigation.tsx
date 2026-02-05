"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "executive-summary", label: "Summary" },
  { id: "market-overview", label: "Market" },
  { id: "customer-segments", label: "Customers" },
  { id: "competitive-landscape", label: "Competition" },
  { id: "pricing", label: "Pricing" },
  { id: "operations", label: "Operations" },
  { id: "online-offline", label: "Online/Offline" },
  { id: "geography", label: "Geography" },
  { id: "recommendations", label: "Strategy" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky-nav">
      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo / Title */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="font-bold text-sm md:text-base tracking-tight cursor-pointer hover:text-primary transition-colors"
          >
            Dhaka Tuition Report
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all cursor-pointer",
                  "hover:bg-primary hover:text-primary-foreground",
                  "border-2 border-transparent",
                  activeSection === item.id &&
                    "bg-primary text-primary-foreground border-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-foreground py-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium text-left transition-all cursor-pointer",
                    "border-2 border-foreground",
                    "hover:bg-primary hover:text-primary-foreground",
                    activeSection === item.id &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

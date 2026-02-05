"use client";

import React from "react"

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, TrendingUp, Users, School, Banknote } from "lucide-react";

interface AreaData {
  id: string;
  name: string;
  demandLevel: "Very High" | "High" | "Medium" | "Emerging";
  avgMonthlySpend: string;
  characteristics: string[];
  participation: string;
  schoolDensity: string;
  marketSaturation: string;
  topSubjects: string[];
  tutorAvailability: string;
  description: string;
}

const dhakaAreas: AreaData[] = [
  {
    id: "gulshan",
    name: "Gulshan",
    demandLevel: "Very High",
    avgMonthlySpend: "BDT 10,000-15,000",
    characteristics: ["Affluent residential", "English-medium schools", "Diplomatic zone"],
    participation: "95%+",
    schoolDensity: "Very High",
    marketSaturation: "High",
    topSubjects: ["English", "Mathematics", "A-Level Sciences"],
    tutorAvailability: "Premium tutors abundant",
    description: "Gulshan represents Dhaka's most premium tutoring market with highest willingness to pay. English-medium and international school students dominate demand, with particular focus on Cambridge/Edexcel curricula and university entrance preparation."
  },
  {
    id: "banani",
    name: "Banani",
    demandLevel: "Very High",
    avgMonthlySpend: "BDT 8,000-14,000",
    characteristics: ["Upper-class residential", "Corporate families", "Quality-focused"],
    participation: "92%+",
    schoolDensity: "High",
    marketSaturation: "High",
    topSubjects: ["Science", "Mathematics", "English", "Test Prep"],
    tutorAvailability: "High availability",
    description: "Banani mirrors Gulshan's premium characteristics with slightly more Bengali-medium students. Strong demand for both academic tutoring and extracurricular skill development like coding and language courses."
  },
  {
    id: "dhanmondi",
    name: "Dhanmondi",
    demandLevel: "Very High",
    avgMonthlySpend: "BDT 6,000-12,000",
    characteristics: ["Established residential", "Mixed schools", "Coaching center hub"],
    participation: "90%+",
    schoolDensity: "Very High",
    marketSaturation: "Very High",
    topSubjects: ["Mathematics", "Physics", "Chemistry", "HSC Prep"],
    tutorAvailability: "Saturated market",
    description: "Dhanmondi is Dhaka's traditional tutoring hub with highest coaching center density. Competition is fierce, but consistent demand from established middle-to-upper class families ensures market stability."
  },
  {
    id: "uttara",
    name: "Uttara",
    demandLevel: "High",
    avgMonthlySpend: "BDT 5,000-10,000",
    characteristics: ["Growing residential", "Middle-upper class", "Planned city"],
    participation: "85%+",
    schoolDensity: "High",
    marketSaturation: "Medium",
    topSubjects: ["Mathematics", "English", "Science", "ICT"],
    tutorAvailability: "Growing supply",
    description: "Uttara represents Dhaka's fastest-growing tutoring market with new residential developments attracting education-focused families. Lower saturation than central Dhaka offers better entry opportunities for new providers."
  },
  {
    id: "bashundhara",
    name: "Bashundhara",
    demandLevel: "High",
    avgMonthlySpend: "BDT 6,000-12,000",
    characteristics: ["New development", "High aspirations", "University proximity"],
    participation: "80%+",
    schoolDensity: "Medium-High",
    marketSaturation: "Low-Medium",
    topSubjects: ["Engineering Prep", "Science", "Mathematics", "English"],
    tutorAvailability: "Undersupplied",
    description: "Bashundhara's proximity to major universities creates strong demand for higher-education preparation. The relatively new development means lower market saturation and significant growth potential."
  },
  {
    id: "mirpur",
    name: "Mirpur",
    demandLevel: "Medium",
    avgMonthlySpend: "BDT 3,000-6,000",
    characteristics: ["Mixed income", "Large population", "Value-conscious"],
    participation: "70%",
    schoolDensity: "High",
    marketSaturation: "Medium",
    topSubjects: ["Mathematics", "Bangla", "Science", "SSC Prep"],
    tutorAvailability: "Good availability",
    description: "Mirpur's large and diverse population creates volume-based opportunity. Price sensitivity is higher, but sheer population size makes it attractive for affordable group tutoring models."
  },
  {
    id: "farmgate",
    name: "Farmgate",
    demandLevel: "Medium",
    avgMonthlySpend: "BDT 3,000-6,000",
    characteristics: ["Central location", "Mixed income", "Convenient access"],
    participation: "75%",
    schoolDensity: "Medium",
    marketSaturation: "Medium",
    topSubjects: ["Mathematics", "English", "Accounting", "BBA Prep"],
    tutorAvailability: "Moderate",
    description: "Farmgate's central location makes it accessible for tutors and students alike. Strong demand for professional course tutoring including BBA and MBA entrance preparation."
  },
  {
    id: "dhaka-university",
    name: "Dhaka University Area",
    demandLevel: "Medium",
    avgMonthlySpend: "BDT 3,000-7,000",
    characteristics: ["Academic hub", "Student tutors", "Affordable quality"],
    participation: "80%",
    schoolDensity: "Medium",
    marketSaturation: "Medium",
    topSubjects: ["University Admission", "HSC Prep", "Science", "Arts"],
    tutorAvailability: "University student tutors",
    description: "The university area benefits from high concentration of student tutors offering affordable rates. Strong demand for university admission coaching and higher-level academic support."
  },
  {
    id: "mohammadpur",
    name: "Mohammadpur",
    demandLevel: "Emerging",
    avgMonthlySpend: "BDT 2,500-5,000",
    characteristics: ["Middle-market", "Large residential", "Underserved quality"],
    participation: "65%",
    schoolDensity: "Medium",
    marketSaturation: "Low",
    topSubjects: ["Mathematics", "Science", "English", "SSC/HSC Prep"],
    tutorAvailability: "Limited quality options",
    description: "Mohammadpur represents significant untapped potential with large population but limited quality tutoring options. Families show strong educational aspirations but face quality and affordability barriers."
  },
  {
    id: "badda",
    name: "Badda & Rampura",
    demandLevel: "Emerging",
    avgMonthlySpend: "BDT 2,000-4,500",
    characteristics: ["Growing area", "Young families", "Affordability focus"],
    participation: "60%",
    schoolDensity: "Medium",
    marketSaturation: "Low",
    topSubjects: ["Mathematics", "English", "Primary subjects"],
    tutorAvailability: "Limited",
    description: "Emerging residential areas with young, education-conscious families seeking affordable tutoring solutions. Group tutoring and online models show particular promise here."
  },
  {
    id: "motijheel",
    name: "Motijheel & Old Dhaka",
    demandLevel: "Emerging",
    avgMonthlySpend: "BDT 2,000-4,000",
    characteristics: ["Commercial hub", "Traditional area", "Mixed demand"],
    participation: "55%",
    schoolDensity: "Low-Medium",
    marketSaturation: "Low",
    topSubjects: ["Commerce", "Accounting", "Mathematics", "English"],
    tutorAvailability: "Limited",
    description: "The commercial heart of Dhaka has unique demand patterns with focus on commerce and business subjects. Traditional family structures influence tutoring preferences toward in-home options."
  },
];

// SVG path definitions for Dhaka areas (simplified artistic representation)
const areaPaths: Record<string, { d: string; labelX: number; labelY: number }> = {
  gulshan: {
    d: "M 320 80 L 380 70 L 420 100 L 430 150 L 400 180 L 350 170 L 310 140 Z",
    labelX: 365,
    labelY: 125
  },
  banani: {
    d: "M 280 90 L 320 80 L 310 140 L 350 170 L 330 200 L 270 180 L 260 130 Z",
    labelX: 295,
    labelY: 145
  },
  dhanmondi: {
    d: "M 180 200 L 240 180 L 270 220 L 280 280 L 240 310 L 180 290 L 160 250 Z",
    labelX: 220,
    labelY: 250
  },
  uttara: {
    d: "M 200 20 L 280 10 L 320 40 L 320 80 L 280 90 L 230 80 L 190 50 Z",
    labelX: 255,
    labelY: 50
  },
  bashundhara: {
    d: "M 380 70 L 450 50 L 500 80 L 510 140 L 470 170 L 430 150 L 420 100 Z",
    labelX: 450,
    labelY: 110
  },
  mirpur: {
    d: "M 130 100 L 200 80 L 230 80 L 260 130 L 240 180 L 180 200 L 140 170 L 120 130 Z",
    labelX: 185,
    labelY: 140
  },
  farmgate: {
    d: "M 240 180 L 270 180 L 330 200 L 340 250 L 300 280 L 270 270 L 270 220 Z",
    labelX: 295,
    labelY: 235
  },
  "dhaka-university": {
    d: "M 270 270 L 300 280 L 340 250 L 360 290 L 340 340 L 290 350 L 260 320 L 280 280 Z",
    labelX: 310,
    labelY: 305
  },
  mohammadpur: {
    d: "M 120 200 L 180 200 L 180 290 L 140 320 L 100 300 L 90 250 Z",
    labelX: 135,
    labelY: 260
  },
  badda: {
    d: "M 400 180 L 470 170 L 500 200 L 490 260 L 440 280 L 400 250 L 380 210 Z",
    labelX: 440,
    labelY: 220
  },
  motijheel: {
    d: "M 340 340 L 400 320 L 430 360 L 410 410 L 360 420 L 320 390 L 330 360 Z",
    labelX: 370,
    labelY: 370
  },
};

const demandColors: Record<string, { fill: string; hover: string; border: string }> = {
  "Very High": { fill: "#4169E1", hover: "#3257C5", border: "#1C1917" },
  "High": { fill: "#6B8BF5", hover: "#5A7AE4", border: "#1C1917" },
  "Medium": { fill: "#A5B8F7", hover: "#94A7E6", border: "#1C1917" },
  "Emerging": { fill: "#D4DDFA", hover: "#C3CCE9", border: "#1C1917" },
};

export function DhakaGeographicHeatmap() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [selectedArea, setSelectedArea] = useState<AreaData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent, areaId: string) => {
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    setHoveredArea(areaId);
  }, []);

  const handleAreaClick = useCallback((area: AreaData) => {
    setSelectedArea(area);
    setIsModalOpen(true);
  }, []);

  const hoveredAreaData = dhakaAreas.find(a => a.id === hoveredArea);

  return (
    <div className="relative">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 brutalist-card bg-card">
        <span className="font-bold uppercase text-sm tracking-wider mr-2">Demand Level:</span>
        {["Very High", "High", "Medium", "Emerging"].map((level) => (
          <div key={level} className="flex items-center gap-2">
            <div
              className="w-5 h-5 border-2 border-foreground"
              style={{ backgroundColor: demandColors[level].fill }}
            />
            <span className="text-sm font-medium">{level}</span>
          </div>
        ))}
      </div>

      {/* Map Container */}
      <div className="relative brutalist-card bg-card overflow-hidden">
        <svg
          viewBox="0 0 600 460"
          className="w-full h-auto"
          style={{ minHeight: "400px" }}
        >
          {/* Background */}
          <rect x="0" y="0" width="600" height="460" fill="#F5F5F4" />
          
          {/* Grid pattern for visual interest */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E7E5E4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="600" height="460" fill="url(#grid)" />

          {/* Dhaka boundary outline */}
          <path
            d="M 80 40 Q 200 0 350 20 Q 520 40 530 150 Q 540 280 480 380 Q 400 450 300 440 Q 150 430 90 350 Q 60 250 80 120 Q 80 60 80 40"
            fill="none"
            stroke="#1C1917"
            strokeWidth="3"
            strokeDasharray="8,4"
          />

          {/* River indication */}
          <path
            d="M 50 200 Q 150 230 250 350 Q 320 400 380 440"
            fill="none"
            stroke="#4169E1"
            strokeWidth="2"
            opacity="0.3"
          />
          <text x="120" y="380" fill="#4169E1" opacity="0.5" fontSize="10" fontWeight="bold">
            Buriganga River
          </text>

          {/* Area polygons */}
          {dhakaAreas.map((area) => {
            const pathData = areaPaths[area.id];
            if (!pathData) return null;
            const colors = demandColors[area.demandLevel];
            const isHovered = hoveredArea === area.id;

            return (
              <g key={area.id}>
                <path
                  d={pathData.d}
                  fill={isHovered ? colors.hover : colors.fill}
                  stroke={colors.border}
                  strokeWidth={isHovered ? "4" : "3"}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    transform: isHovered ? "translate(-2px, -2px)" : "none",
                    filter: isHovered ? "drop-shadow(4px 4px 0px #1C1917)" : "none",
                  }}
                  onMouseMove={(e) => handleMouseMove(e, area.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => handleAreaClick(area)}
                />
                <text
                  x={pathData.labelX}
                  y={pathData.labelY}
                  textAnchor="middle"
                  fill={area.demandLevel === "Emerging" || area.demandLevel === "Medium" ? "#1C1917" : "#FFFFFF"}
                  fontSize="11"
                  fontWeight="bold"
                  style={{ pointerEvents: "none", textTransform: "uppercase", letterSpacing: "0.05em" }}
                >
                  {area.name.length > 12 ? area.name.split(" ")[0] : area.name}
                </text>
              </g>
            );
          })}

          {/* Map title */}
          <text x="300" y="450" textAnchor="middle" fill="#57534E" fontSize="12" fontWeight="bold">
            DHAKA METROPOLITAN TUTORING DEMAND MAP
          </text>
        </svg>

        {/* Tooltip */}
        {hoveredAreaData && (
          <div
            className="absolute pointer-events-none z-20 brutalist-card bg-card p-4 w-72"
            style={{
              left: Math.min(tooltipPos.x + 15, 280),
              top: Math.max(tooltipPos.y - 100, 10),
            }}
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <h4 className="font-bold text-lg">{hoveredAreaData.name}</h4>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Demand Level:</span>
                <span 
                  className="font-bold px-2 py-0.5 text-xs uppercase"
                  style={{ 
                    backgroundColor: demandColors[hoveredAreaData.demandLevel].fill,
                    color: hoveredAreaData.demandLevel === "Emerging" || hoveredAreaData.demandLevel === "Medium" ? "#1C1917" : "#FFFFFF"
                  }}
                >
                  {hoveredAreaData.demandLevel}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Avg. Monthly Spend:</span>
                <span className="font-bold text-primary">{hoveredAreaData.avgMonthlySpend}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Participation:</span>
                <span className="font-bold">{hoveredAreaData.participation}</span>
              </div>
              
              <div className="pt-2 border-t border-muted">
                <p className="text-xs text-muted-foreground mb-1">Key Characteristics:</p>
                <div className="flex flex-wrap gap-1">
                  {hoveredAreaData.characteristics.map((char, i) => (
                    <span key={i} className="text-xs bg-secondary px-2 py-0.5 font-medium">
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-muted text-xs text-primary font-bold uppercase">
              Click for detailed analysis
            </div>
          </div>
        )}

        {/* Instruction hint */}
        <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-card/90 px-3 py-2 border-2 border-foreground">
          Hover to explore | Click for details
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl brutalist-card border-4 border-foreground p-0 overflow-hidden">
          {selectedArea && (
            <>
              <div 
                className="p-6 text-white"
                style={{ backgroundColor: demandColors[selectedArea.demandLevel].fill }}
              >
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <DialogTitle className="text-2xl font-bold text-white">
                      {selectedArea.name}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-white/80 text-base mt-2">
                    {selectedArea.demandLevel} Demand Zone
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="p-6 space-y-6">
                {/* Overview */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedArea.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary border-2 border-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Banknote className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold uppercase">Avg. Monthly Spend</span>
                    </div>
                    <p className="text-xl font-bold text-primary">{selectedArea.avgMonthlySpend}</p>
                  </div>

                  <div className="p-4 bg-secondary border-2 border-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold uppercase">Participation Rate</span>
                    </div>
                    <p className="text-xl font-bold text-primary">{selectedArea.participation}</p>
                  </div>

                  <div className="p-4 bg-secondary border-2 border-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <School className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold uppercase">School Density</span>
                    </div>
                    <p className="text-xl font-bold">{selectedArea.schoolDensity}</p>
                  </div>

                  <div className="p-4 bg-secondary border-2 border-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold uppercase">Market Saturation</span>
                    </div>
                    <p className="text-xl font-bold">{selectedArea.marketSaturation}</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wider mb-3 pb-2 border-b-2 border-foreground">
                    Area Characteristics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArea.characteristics.map((char, i) => (
                      <span 
                        key={i} 
                        className="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Subjects */}
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wider mb-3 pb-2 border-b-2 border-foreground">
                    Top Demand Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArea.topSubjects.map((subject, i) => (
                      <span 
                        key={i} 
                        className="bg-accent text-accent-foreground px-3 py-1 text-sm font-bold border-2 border-foreground"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tutor Availability */}
                <div className="p-4 bg-muted border-2 border-foreground">
                  <span className="text-sm font-bold uppercase tracking-wider">Tutor Availability: </span>
                  <span className="text-primary font-bold">{selectedArea.tutorAvailability}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

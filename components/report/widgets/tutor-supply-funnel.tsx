"use client";

import React from "react"

import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, BookOpen, Award, AlertTriangle, Users, ChevronRight } from "lucide-react";

interface FunnelSegment {
  id: string;
  label: string;
  percentage: string;
  numericValue: number;
  color: string;
  icon: React.ReactNode;
  challenges: string[];
  qualifications: string;
  note: string;
}

const FUNNEL_DATA: FunnelSegment[] = [
  {
    id: "university",
    label: "University Students",
    percentage: "40%",
    numericValue: 40,
    color: "#4169E1",
    icon: <GraduationCap className="w-5 h-5" />,
    challenges: [
      "Limited teaching experience",
      "Variable availability during exams",
      "Lack of formal pedagogy training"
    ],
    qualifications: "Bachelor's degree in progress",
    note: "Flexible schedules, lower rates"
  },
  {
    id: "teachers",
    label: "Serving Teachers",
    percentage: "35%",
    numericValue: 35,
    color: "#10B981",
    icon: <BookOpen className="w-5 h-5" />,
    challenges: [
      "85% lack initial pedagogical training",
      "Time constraints from primary job",
      "Ethical concerns with moonlighting"
    ],
    qualifications: "Graduate degree, some with B.Ed.",
    note: "Experienced but time-constrained"
  },
  {
    id: "professional",
    label: "Professional Tutors",
    percentage: "25%",
    numericValue: 25,
    color: "#F59E0B",
    icon: <Award className="w-5 h-5" />,
    challenges: [
      "Only 22.4% hold B.Ed. credentials",
      "High competition for top clients",
      "Geographic coverage limitations"
    ],
    qualifications: "Master's + 3-7 years experience",
    note: "Premium rates, proven results"
  }
];

export function TutorSupplyFunnel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the component is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleBottom = Math.max(0, rect.bottom);
      const componentHeight = rect.height;
      
      // Progress goes from 0 to 1 as we scroll through
      const scrollProgress = Math.min(1, Math.max(0, visibleTop / (windowHeight + componentHeight * 0.5)));
      setProgress(scrollProgress);
      
      // Determine active segment based on scroll progress
      if (scrollProgress > 0.2 && scrollProgress <= 0.45) {
        setActiveSegment("university");
      } else if (scrollProgress > 0.45 && scrollProgress <= 0.7) {
        setActiveSegment("teachers");
      } else if (scrollProgress > 0.7) {
        setActiveSegment("professional");
      } else {
        setActiveSegment(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSegmentFillProgress = useCallback((segmentIndex: number) => {
    if (!isMounted) return 0;
    const segmentStart = segmentIndex * 0.3 + 0.1;
    const segmentEnd = segmentStart + 0.25;
    const segmentProgress = (progress - segmentStart) / (segmentEnd - segmentStart);
    return Math.min(1, Math.max(0, segmentProgress));
  }, [progress, isMounted]);

  // SVG funnel path calculations
  const funnelWidth = 400;
  const funnelHeight = 340;
  const topWidth = 360;
  const midWidth = 260;
  const bottomWidth = 160;
  const segmentHeight = 100;
  const gap = 10;

  return (
    <div 
      ref={containerRef} 
      className="brutalist-card p-6 md:p-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Funnel Visualization */}
        <div className="flex-1 flex items-center justify-center">
          <svg 
            viewBox={`0 0 ${funnelWidth} ${funnelHeight}`}
            className="w-full max-w-sm h-auto"
            aria-label="Tutor supply funnel showing distribution across three segments"
          >
            <defs>
              {/* Patterns for unfilled segments */}
              <pattern id="diagonal-hatch" patternUnits="userSpaceOnUse" width="8" height="8">
                <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" 
                  stroke="#E7E5E4" strokeWidth="1.5"/>
              </pattern>
              
              {/* Gradient filters for depth */}
              <filter id="segment-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="3" stdDeviation="0" floodColor="#1C1917" floodOpacity="1"/>
              </filter>
            </defs>

            {/* University Students Segment (Top - Widest) */}
            <g 
              className="cursor-pointer transition-transform duration-200"
              style={{ 
                transform: (hoveredSegment === "university" || activeSegment === "university") 
                  ? "translate(-2px, -2px)" : "none" 
              }}
              onMouseEnter={() => setHoveredSegment("university")}
              onMouseLeave={() => setHoveredSegment(null)}
              onClick={() => setActiveSegment(activeSegment === "university" ? null : "university")}
            >
              {/* Background */}
              <path
                d={`M${(funnelWidth - topWidth) / 2},0 
                    L${(funnelWidth + topWidth) / 2},0 
                    L${(funnelWidth + midWidth) / 2},${segmentHeight} 
                    L${(funnelWidth - midWidth) / 2},${segmentHeight} Z`}
                fill="url(#diagonal-hatch)"
                stroke="#1C1917"
                strokeWidth="3"
                filter="url(#segment-shadow)"
              />
              {/* Fill based on scroll */}
              <path
                d={`M${(funnelWidth - topWidth) / 2},0 
                    L${(funnelWidth + topWidth) / 2},0 
                    L${(funnelWidth + midWidth) / 2},${segmentHeight} 
                    L${(funnelWidth - midWidth) / 2},${segmentHeight} Z`}
                fill={FUNNEL_DATA[0].color}
                stroke="#1C1917"
                strokeWidth="3"
                style={{
                  clipPath: `inset(${(1 - getSegmentFillProgress(0)) * 100}% 0 0 0)`,
                  transition: "clip-path 0.5s ease-out"
                }}
              />
              {/* Label */}
              <text
                x={funnelWidth / 2}
                y={segmentHeight / 2 - 5}
                textAnchor="middle"
                className="font-bold text-sm fill-foreground"
                style={{ 
                  fill: getSegmentFillProgress(0) > 0.5 ? "#FFFFFF" : "#1C1917",
                  transition: "fill 0.3s ease"
                }}
              >
                University Students
              </text>
              <text
                x={funnelWidth / 2}
                y={segmentHeight / 2 + 18}
                textAnchor="middle"
                className="font-bold text-lg"
                style={{ 
                  fill: getSegmentFillProgress(0) > 0.5 ? "#FFFFFF" : "#4169E1",
                  transition: "fill 0.3s ease"
                }}
              >
                40%
              </text>
            </g>

            {/* Serving Teachers Segment (Middle) */}
            <g 
              className="cursor-pointer transition-transform duration-200"
              style={{ 
                transform: (hoveredSegment === "teachers" || activeSegment === "teachers") 
                  ? "translate(-2px, -2px)" : "none"
              }}
              onMouseEnter={() => setHoveredSegment("teachers")}
              onMouseLeave={() => setHoveredSegment(null)}
              onClick={() => setActiveSegment(activeSegment === "teachers" ? null : "teachers")}
            >
              {/* Background */}
              <path
                d={`M${(funnelWidth - midWidth) / 2},${segmentHeight + gap} 
                    L${(funnelWidth + midWidth) / 2},${segmentHeight + gap} 
                    L${(funnelWidth + bottomWidth) / 2},${segmentHeight * 2 + gap} 
                    L${(funnelWidth - bottomWidth) / 2},${segmentHeight * 2 + gap} Z`}
                fill="url(#diagonal-hatch)"
                stroke="#1C1917"
                strokeWidth="3"
                filter="url(#segment-shadow)"
              />
              {/* Fill based on scroll */}
              <path
                d={`M${(funnelWidth - midWidth) / 2},${segmentHeight + gap} 
                    L${(funnelWidth + midWidth) / 2},${segmentHeight + gap} 
                    L${(funnelWidth + bottomWidth) / 2},${segmentHeight * 2 + gap} 
                    L${(funnelWidth - bottomWidth) / 2},${segmentHeight * 2 + gap} Z`}
                fill={FUNNEL_DATA[1].color}
                stroke="#1C1917"
                strokeWidth="3"
                style={{
                  clipPath: `inset(${(1 - getSegmentFillProgress(1)) * 100}% 0 0 0)`,
                  transition: "clip-path 0.5s ease-out"
                }}
              />
              {/* Label */}
              <text
                x={funnelWidth / 2}
                y={segmentHeight * 1.5 + gap - 5}
                textAnchor="middle"
                className="font-bold text-sm"
                style={{ 
                  fill: getSegmentFillProgress(1) > 0.5 ? "#FFFFFF" : "#1C1917",
                  transition: "fill 0.3s ease"
                }}
              >
                Serving Teachers
              </text>
              <text
                x={funnelWidth / 2}
                y={segmentHeight * 1.5 + gap + 18}
                textAnchor="middle"
                className="font-bold text-lg"
                style={{ 
                  fill: getSegmentFillProgress(1) > 0.5 ? "#FFFFFF" : "#10B981",
                  transition: "fill 0.3s ease"
                }}
              >
                35%
              </text>
            </g>

            {/* Professional Tutors Segment (Bottom - Narrowest) */}
            <g 
              className="cursor-pointer transition-transform duration-200"
              style={{ 
                transform: (hoveredSegment === "professional" || activeSegment === "professional") 
                  ? "translate(-2px, -2px)" : "none"
              }}
              onMouseEnter={() => setHoveredSegment("professional")}
              onMouseLeave={() => setHoveredSegment(null)}
              onClick={() => setActiveSegment(activeSegment === "professional" ? null : "professional")}
            >
              {/* Background */}
              <path
                d={`M${(funnelWidth - bottomWidth) / 2},${segmentHeight * 2 + gap * 2} 
                    L${(funnelWidth + bottomWidth) / 2},${segmentHeight * 2 + gap * 2} 
                    L${(funnelWidth + 80) / 2},${segmentHeight * 3 + gap * 2} 
                    L${(funnelWidth - 80) / 2},${segmentHeight * 3 + gap * 2} Z`}
                fill="url(#diagonal-hatch)"
                stroke="#1C1917"
                strokeWidth="3"
                filter="url(#segment-shadow)"
              />
              {/* Fill based on scroll */}
              <path
                d={`M${(funnelWidth - bottomWidth) / 2},${segmentHeight * 2 + gap * 2} 
                    L${(funnelWidth + bottomWidth) / 2},${segmentHeight * 2 + gap * 2} 
                    L${(funnelWidth + 80) / 2},${segmentHeight * 3 + gap * 2} 
                    L${(funnelWidth - 80) / 2},${segmentHeight * 3 + gap * 2} Z`}
                fill={FUNNEL_DATA[2].color}
                stroke="#1C1917"
                strokeWidth="3"
                style={{
                  clipPath: `inset(${(1 - getSegmentFillProgress(2)) * 100}% 0 0 0)`,
                  transition: "clip-path 0.5s ease-out"
                }}
              />
              {/* Label */}
              <text
                x={funnelWidth / 2}
                y={segmentHeight * 2.5 + gap * 2 - 5}
                textAnchor="middle"
                className="font-bold text-sm"
                style={{ 
                  fill: getSegmentFillProgress(2) > 0.5 ? "#FFFFFF" : "#1C1917",
                  transition: "fill 0.3s ease"
                }}
              >
                Professional Tutors
              </text>
              <text
                x={funnelWidth / 2}
                y={segmentHeight * 2.5 + gap * 2 + 18}
                textAnchor="middle"
                className="font-bold text-lg"
                style={{ 
                  fill: getSegmentFillProgress(2) > 0.5 ? "#FFFFFF" : "#F59E0B",
                  transition: "fill 0.3s ease"
                }}
              >
                25%
              </text>
            </g>

            {/* Flow Arrows */}
            <g className="text-muted-foreground" opacity={0.6}>
              <path
                d={`M${funnelWidth / 2},${segmentHeight + 2} L${funnelWidth / 2},${segmentHeight + gap - 2}`}
                stroke="#1C1917"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <path
                d={`M${funnelWidth / 2},${segmentHeight * 2 + gap + 2} L${funnelWidth / 2},${segmentHeight * 2 + gap * 2 - 2}`}
                stroke="#1C1917"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </g>
          </svg>
        </div>

        {/* Detail Panel */}
        <div className="flex-1 lg:max-w-md">
          {/* Segment Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {FUNNEL_DATA.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(activeSegment === segment.id ? null : segment.id)}
                className={cn(
                  "px-3 py-2 text-sm font-bold uppercase tracking-wider",
                  "border-2 border-foreground transition-all duration-200 cursor-pointer",
                  "flex items-center gap-2",
                  activeSegment === segment.id
                    ? "text-primary-foreground"
                    : "bg-card hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#1C1917]"
                )}
                style={{
                  backgroundColor: activeSegment === segment.id ? segment.color : undefined,
                  boxShadow: activeSegment === segment.id ? "4px 4px 0px #1C1917" : undefined
                }}
              >
                {segment.icon}
                <span className="hidden sm:inline">{segment.label}</span>
                <span className="sm:hidden">{segment.percentage}</span>
              </button>
            ))}
          </div>

          {/* Detail Content */}
          <div className="min-h-[280px]">
            {activeSegment ? (
              <SegmentDetail 
                segment={FUNNEL_DATA.find(s => s.id === activeSegment)!} 
              />
            ) : (
              <div className="border-2 border-dashed border-muted-foreground/30 p-6 h-full flex flex-col items-center justify-center text-center">
                <Users className="w-10 h-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground font-medium mb-2">
                  Scroll or click a segment
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Explore qualifications and challenges for each tutor category
                </p>
              </div>
            )}
          </div>

          {/* Key Insight */}
          <div className="mt-6 bg-accent border-2 border-foreground p-4 shadow-[4px_4px_0px_#1C1917]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm uppercase tracking-wider mb-1">Critical Gap</p>
                <p className="text-sm">
                  Only <span className="font-bold text-primary">22.4%</span> of tutors hold B.Ed. credentials, 
                  while <span className="font-bold text-destructive">85%</span> of teachers lack initial 
                  training even after 3+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentDetail({ segment }: { segment: FunnelSegment }) {
  return (
    <div 
      className="border-2 border-foreground p-5 animate-in fade-in slide-in-from-right-4 duration-300"
      style={{ borderLeftWidth: "6px", borderLeftColor: segment.color }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-muted">
        <div 
          className="w-10 h-10 flex items-center justify-center border-2 border-foreground"
          style={{ backgroundColor: segment.color, color: "#FFFFFF" }}
        >
          {segment.icon}
        </div>
        <div>
          <h4 className="font-bold text-lg">{segment.label}</h4>
          <p className="text-sm text-muted-foreground">{segment.percentage} of tutor supply</p>
        </div>
      </div>

      {/* Qualifications */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Typical Qualifications
        </p>
        <p className="text-sm font-medium">{segment.qualifications}</p>
      </div>

      {/* Characteristics */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          Characteristics
        </p>
        <p className="text-sm" style={{ color: segment.color }}>{segment.note}</p>
      </div>

      {/* Challenges */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Key Challenges
        </p>
        <ul className="space-y-2">
          {segment.challenges.map((challenge, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <ChevronRight 
                className="w-4 h-4 flex-shrink-0 mt-0.5" 
                style={{ color: segment.color }}
              />
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

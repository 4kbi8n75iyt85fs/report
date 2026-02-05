"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Globe, Users, BookOpen, Award, Target, ChevronRight } from "lucide-react";

type BusinessModel = "All" | "Marketplace" | "Subscription" | "Zero Commission" | "Hybrid";

interface Competitor {
  id: string;
  name: string;
  businessModel: Exclude<BusinessModel, "All">;
  valueProposition: string;
  targetSegment: string;
  details: {
    founded?: string;
    reach?: string;
    keyFeatures: string[];
    strengths: string[];
    commission?: string;
    pricing?: string;
  };
}

const competitors: Competitor[] = [
  {
    id: "eudika",
    name: "Eudika",
    businessModel: "Zero Commission",
    valueProposition: "Direct tutor-student connection with global accessibility and secure payments",
    targetSegment: "All levels, international reach",
    details: {
      reach: "Global platform with Bangladesh presence",
      commission: "0% platform commission",
      keyFeatures: [
        "Direct tutor-student matching",
        "Secure payment processing",
        "International tutor network",
        "Multi-currency support",
      ],
      strengths: [
        "No commission structure attracts quality tutors",
        "Global talent pool access",
        "Transparent pricing model",
      ],
    },
  },
  {
    id: "tutorsheba",
    name: "TutorSheba",
    businessModel: "Marketplace",
    valueProposition: "250,000+ verified tutors with free demo sessions and extensive subject coverage",
    targetSegment: "K-12, test prep, religious studies",
    details: {
      reach: "250,000+ registered tutors",
      commission: "18-25% commission per session",
      keyFeatures: [
        "Verified tutor profiles",
        "Free demo sessions",
        "Wide subject coverage",
        "Parent feedback system",
      ],
      strengths: [
        "Largest tutor network in Bangladesh",
        "Strong verification processes",
        "Established brand trust",
      ],
    },
  },
  {
    id: "shikho",
    name: "Shikho",
    businessModel: "Subscription",
    valueProposition: "Gamified learning with animated content and hybrid online-offline model",
    targetSegment: "Secondary students, exam preparation",
    details: {
      founded: "2019",
      reach: "500,000+ students",
      commission: "Subscription-based (BDT 499-1999/month)",
      keyFeatures: [
        "Gamified learning experience",
        "Animated video lessons",
        "Interactive quizzes",
        "Progress tracking",
      ],
      strengths: [
        "Engaging content format",
        "Strong student retention",
        "Localized curriculum alignment",
      ],
    },
  },
  {
    id: "udvash",
    name: "Udvash",
    businessModel: "Hybrid",
    valueProposition: "Established physical coaching with online expansion and comprehensive test prep",
    targetSegment: "University admission candidates",
    details: {
      reach: "100+ physical centers",
      pricing: "BDT 3,000-15,000 per course",
      keyFeatures: [
        "Physical coaching centers",
        "University admission focus",
        "Mock test series",
        "Expert faculty network",
      ],
      strengths: [
        "Proven track record in admissions",
        "Strong offline presence",
        "Comprehensive test materials",
      ],
    },
  },
  {
    id: "caretutors",
    name: "CareTutors",
    businessModel: "Hybrid",
    valueProposition: "Holistic education ecosystem with academic and vocational training plus scholarships",
    targetSegment: "Diverse learners seeking comprehensive support",
    details: {
      reach: "Pan-Bangladesh coverage",
      keyFeatures: [
        "Academic tutoring",
        "Vocational training",
        "Scholarship programs",
        "Career counseling",
      ],
      strengths: [
        "Comprehensive service offering",
        "Social impact focus",
        "Accessibility programs",
      ],
    },
  },
];

const businessModels: BusinessModel[] = ["All", "Marketplace", "Subscription", "Zero Commission", "Hybrid"];

const modelColors: Record<Exclude<BusinessModel, "All">, string> = {
  "Marketplace": "#4169E1",
  "Subscription": "#10B981",
  "Zero Commission": "#F59E0B",
  "Hybrid": "#8B5CF6",
};

export function CompetitorComparisonTable() {
  const [activeFilter, setActiveFilter] = useState<BusinessModel>("All");
  const [selectedCompetitor, setSelectedCompetitor] = useState<Competitor | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const filteredCompetitors = activeFilter === "All" 
    ? competitors 
    : competitors.filter(c => c.businessModel === activeFilter);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {businessModels.map((model) => {
          const isActive = activeFilter === model;
          const count = model === "All" 
            ? competitors.length 
            : competitors.filter(c => c.businessModel === model).length;
          
          return (
            <button
              key={model}
              onClick={() => setActiveFilter(model)}
              className={cn(
                "px-4 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-150",
                "border-3 border-foreground",
                isActive
                  ? "bg-primary text-primary-foreground translate-x-0 translate-y-0 shadow-none"
                  : "bg-card text-foreground shadow-[4px_4px_0px_#1C1917] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1C1917]",
                "cursor-pointer"
              )}
              style={{
                borderColor: "#1C1917",
              }}
            >
              {model}
              <span className={cn(
                "ml-2 px-2 py-0.5 text-xs",
                isActive ? "bg-primary-foreground/20" : "bg-muted"
              )}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-3 border-foreground border-collapse">
          <thead>
            <tr>
              <th className="bg-primary text-primary-foreground border-b-3 border-r-3 border-foreground font-bold uppercase tracking-wider text-left p-4 w-[18%]">
                Platform
              </th>
              <th className="bg-primary text-primary-foreground border-b-3 border-r-3 border-foreground font-bold uppercase tracking-wider text-left p-4 w-[17%]">
                Business Model
              </th>
              <th className="bg-primary text-primary-foreground border-b-3 border-r-3 border-foreground font-bold uppercase tracking-wider text-left p-4 w-[35%]">
                Key Value Proposition
              </th>
              <th className="bg-primary text-primary-foreground border-b-3 border-r-3 border-foreground font-bold uppercase tracking-wider text-left p-4 w-[20%]">
                Target Segment
              </th>
              <th className="bg-primary text-primary-foreground border-b-3 border-foreground font-bold uppercase tracking-wider text-center p-4 w-[10%]">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCompetitors.map((competitor, idx) => (
              <tr
                key={competitor.id}
                className={cn(
                  "transition-all duration-150 cursor-pointer",
                  hoveredRow === competitor.id 
                    ? "bg-accent" 
                    : idx % 2 === 0 ? "bg-card" : "bg-secondary/50"
                )}
                onMouseEnter={() => setHoveredRow(competitor.id)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => setSelectedCompetitor(competitor)}
              >
                <td className="border-b-2 border-r-2 border-foreground p-4">
                  <span className="font-bold text-lg">{competitor.name}</span>
                </td>
                <td className="border-b-2 border-r-2 border-foreground p-4">
                  <span 
                    className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: modelColors[competitor.businessModel] }}
                  >
                    {competitor.businessModel}
                  </span>
                </td>
                <td className="border-b-2 border-r-2 border-foreground p-4">
                  <p className="text-sm leading-relaxed">{competitor.valueProposition}</p>
                </td>
                <td className="border-b-2 border-r-2 border-foreground p-4">
                  <p className="text-sm font-medium">{competitor.targetSegment}</p>
                </td>
                <td className="border-b-2 border-foreground p-4 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCompetitor(competitor);
                    }}
                    className={cn(
                      "inline-flex items-center justify-center gap-1 px-3 py-2",
                      "bg-foreground text-background font-bold text-xs uppercase tracking-wider",
                      "border-2 border-foreground",
                      "hover:bg-primary hover:text-primary-foreground",
                      "transition-colors duration-150 cursor-pointer"
                    )}
                  >
                    View
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredCompetitors.length === 0 && (
        <div className="border-3 border-dashed border-muted-foreground/30 bg-muted/30 p-12 text-center mt-4">
          <p className="text-muted-foreground font-bold">No platforms match the selected filter.</p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 items-center">
        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Model Legend:</span>
        {Object.entries(modelColors).map(([model, color]) => (
          <div key={model} className="flex items-center gap-2">
            <span 
              className="w-4 h-4 border-2 border-foreground"
              style={{ backgroundColor: color }}
            />
            <span className="text-xs font-medium">{model}</span>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      <Dialog open={!!selectedCompetitor} onOpenChange={() => setSelectedCompetitor(null)}>
        <DialogContent className="sm:max-w-2xl border-3 border-foreground shadow-[8px_8px_0px_#1C1917] rounded-none bg-card">
          {selectedCompetitor && (
            <>
              <DialogHeader className="border-b-3 border-foreground pb-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 flex items-center justify-center font-bold text-2xl text-white"
                    style={{ backgroundColor: modelColors[selectedCompetitor.businessModel] }}
                  >
                    {selectedCompetitor.name.charAt(0)}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold">{selectedCompetitor.name}</DialogTitle>
                    <DialogDescription className="text-sm">
                      <span 
                        className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white mt-1"
                        style={{ backgroundColor: modelColors[selectedCompetitor.businessModel] }}
                      >
                        {selectedCompetitor.businessModel}
                      </span>
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Overview Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedCompetitor.details.reach && (
                    <div className="bg-secondary p-4 border-2 border-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Reach</span>
                      </div>
                      <p className="font-bold">{selectedCompetitor.details.reach}</p>
                    </div>
                  )}
                  {selectedCompetitor.details.commission && (
                    <div className="bg-secondary p-4 border-2 border-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pricing</span>
                      </div>
                      <p className="font-bold">{selectedCompetitor.details.commission}</p>
                    </div>
                  )}
                  {selectedCompetitor.details.pricing && (
                    <div className="bg-secondary p-4 border-2 border-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pricing</span>
                      </div>
                      <p className="font-bold">{selectedCompetitor.details.pricing}</p>
                    </div>
                  )}
                  <div className="bg-secondary p-4 border-2 border-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Target</span>
                    </div>
                    <p className="font-bold text-sm">{selectedCompetitor.targetSegment}</p>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="bg-accent p-4 border-2 border-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Value Proposition</span>
                  </div>
                  <p className="text-sm leading-relaxed">{selectedCompetitor.valueProposition}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCompetitor.details.keyFeatures.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2 bg-card border-2 border-foreground p-3"
                      >
                        <span 
                          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: modelColors[selectedCompetitor.businessModel] }}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-3">Competitive Strengths</h4>
                  <ul className="space-y-2">
                    {selectedCompetitor.details.strengths.map((strength, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="w-2 h-2 bg-primary flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, X, ChevronRight } from "lucide-react";

type CriteriaKey = "cost" | "flexibility" | "reach" | "scalability" | "engagement" | "technology";

interface ComparisonData {
  label: string;
  icon: string;
  online: {
    pros: string[];
    cons: string[];
  };
  offline: {
    pros: string[];
    cons: string[];
  };
}

const comparisonData: Record<CriteriaKey, ComparisonData> = {
  cost: {
    label: "Cost",
    icon: "৳",
    online: {
      pros: [
        "Lower overhead costs for tutors (no travel)",
        "Economies of scale with group sessions",
        "Reduced infrastructure investment",
        "Digital resources can be reused",
      ],
      cons: [
        "Technology infrastructure costs",
        "Platform fees may apply (15-33%)",
        "Marketing costs for visibility",
      ],
    },
    offline: {
      pros: [
        "Higher perceived value justifies premium pricing",
        "Direct payment - no platform commissions",
        "Established pricing norms (BDT 1,500-10,000+)",
      ],
      cons: [
        "Transportation costs for tutors",
        "Time investment in travel (2-3 hours daily)",
        "Physical space requirements",
        "Higher per-student cost structure",
      ],
    },
  },
  flexibility: {
    label: "Flexibility",
    icon: "⏰",
    online: {
      pros: [
        "Schedule sessions at any time",
        "Easy rescheduling with minimal disruption",
        "No geographic constraints",
        "Recorded sessions for review",
        "Asynchronous learning options",
      ],
      cons: [
        "Requires reliable internet connection",
        "Device availability dependency",
        "Time zone considerations for international",
      ],
    },
    offline: {
      pros: [
        "Direct interaction without tech barriers",
        "Structured routine for students",
        "Immediate feedback and adjustments",
      ],
      cons: [
        "Fixed location requirements",
        "Traffic and weather dependencies",
        "Limited to local scheduling windows",
        "Difficult to reschedule last-minute",
      ],
    },
  },
  reach: {
    label: "Geographic Reach",
    icon: "🌐",
    online: {
      pros: [
        "Access students across all of Bangladesh",
        "Potential for international markets",
        "Serve underserved rural areas",
        "No location-based limitations",
      ],
      cons: [
        "Digital divide in low-income areas",
        "Internet connectivity varies by region",
        "Trust building harder remotely",
      ],
    },
    offline: {
      pros: [
        "Strong presence in affluent areas (Gulshan, Dhanmondi)",
        "Community-based reputation building",
        "Face-to-face trust establishment",
      ],
      cons: [
        "Limited to Dhaka metro area",
        "Transportation barriers to peripheral areas",
        "Concentrated in premium zones only",
        "2-3 hour daily commute limits coverage",
      ],
    },
  },
  scalability: {
    label: "Scalability",
    icon: "📈",
    online: {
      pros: [
        "One tutor can reach multiple students",
        "Group sessions easily organized",
        "Content creation scales infinitely",
        "Platform can grow with demand",
        "24.42% CAGR market growth potential",
      ],
      cons: [
        "Quality may dilute with scale",
        "Personalization challenges at scale",
        "Requires robust tech infrastructure",
      ],
    },
    offline: {
      pros: [
        "Premium positioning for 1-on-1",
        "Quality control easier to maintain",
        "Personal relationships foster retention",
      ],
      cons: [
        "Linear growth tied to tutor count",
        "Physical capacity constraints",
        "Difficult to expand beyond local market",
        "Recruitment bottlenecks",
      ],
    },
  },
  engagement: {
    label: "Engagement",
    icon: "🎯",
    online: {
      pros: [
        "Gamification features available",
        "Interactive digital tools",
        "Animated content increases retention",
        "Progress tracking dashboards",
      ],
      cons: [
        "Younger students harder to engage",
        "Screen fatigue from extended sessions",
        "Distractions at home environment",
        "Limited non-verbal communication",
      ],
    },
    offline: {
      pros: [
        "Better behavioral monitoring",
        "Immediate intervention possible",
        "Hands-on demonstrations",
        "Stronger tutor-student rapport",
        "Higher accountability perception",
      ],
      cons: [
        "Limited by tutor creativity",
        "No automated progress tracking",
        "Traditional methods may feel outdated",
      ],
    },
  },
  technology: {
    label: "Technology Needs",
    icon: "💻",
    online: {
      pros: [
        "Digital Bangladesh initiative support",
        "Growing smartphone penetration",
        "Cost-effective cloud solutions",
        "AI-powered personalization potential",
      ],
      cons: [
        "Device ownership gaps (middle-income)",
        "Inconsistent broadband access",
        "Digital literacy barriers",
        "Technical issues disrupt learning",
      ],
    },
    offline: {
      pros: [
        "No technology barriers",
        "Works in all socioeconomic segments",
        "No dependency on internet/power",
        "Accessible to all students",
      ],
      cons: [
        "Missing digital learning advantages",
        "No automated record keeping",
        "Manual scheduling and payments",
        "Cannot leverage AI tools",
      ],
    },
  },
};

const criteriaOrder: CriteriaKey[] = ["cost", "flexibility", "reach", "scalability", "engagement", "technology"];

export function OnlineOfflineComparisonMatrix() {
  const [selectedCriteria, setSelectedCriteria] = useState<CriteriaKey>("cost");

  const currentData = comparisonData[selectedCriteria];

  return (
    <div className="w-full">
      {/* Criteria Selector - Brutalist Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {criteriaOrder.map((key) => {
          const isSelected = selectedCriteria === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedCriteria(key)}
              className={cn(
                "brutalist-btn px-4 py-3 text-sm transition-all",
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-secondary"
              )}
            >
              <span className="mr-2">{comparisonData[key].icon}</span>
              {comparisonData[key].label}
            </button>
          );
        })}
      </div>

      {/* Current Selection Indicator */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronRight className="w-5 h-5 text-primary" />
        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Comparing by:
        </span>
        <span className="text-sm font-bold uppercase tracking-wider text-primary">
          {currentData.label}
        </span>
      </div>

      {/* Comparison Columns */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Online Column */}
        <div className="brutalist-card overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 border-b-3 border-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground text-primary flex items-center justify-center font-bold text-sm">
                ON
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider">Online Tutoring</h4>
                <p className="text-xs opacity-80">Digital delivery model</p>
              </div>
            </div>
          </div>
          
          <div className="p-5">
            {/* Pros */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-green-700">
                  Advantages
                </h5>
              </div>
              <ul className="space-y-2">
                {currentData.online.pros.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm p-2 bg-green-50 border-l-4 border-green-600"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-destructive text-white flex items-center justify-center">
                  <X className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-destructive">
                  Challenges
                </h5>
              </div>
              <ul className="space-y-2">
                {currentData.online.cons.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm p-2 bg-red-50 border-l-4 border-destructive"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Offline Column */}
        <div className="brutalist-card overflow-hidden">
          <div className="bg-foreground text-background p-4 border-b-3 border-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-background text-foreground flex items-center justify-center font-bold text-sm">
                OFF
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider">In-Person Tutoring</h4>
                <p className="text-xs opacity-80">Traditional delivery model</p>
              </div>
            </div>
          </div>
          
          <div className="p-5">
            {/* Pros */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-green-700">
                  Advantages
                </h5>
              </div>
              <ul className="space-y-2">
                {currentData.offline.pros.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm p-2 bg-green-50 border-l-4 border-green-600"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-destructive text-white flex items-center justify-center">
                  <X className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wider text-destructive">
                  Challenges
                </h5>
              </div>
              <ul className="space-y-2">
                {currentData.offline.cons.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm p-2 bg-red-50 border-l-4 border-destructive"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="mt-6 p-4 bg-secondary border-3 border-foreground">
        <p className="text-sm text-muted-foreground text-center">
          <span className="font-bold text-foreground">Pro Tip:</span>{" "}
          Successful businesses increasingly adopt <span className="font-bold text-primary">hybrid models</span>, 
          leveraging technology for content delivery while maintaining in-person touchpoints for accountability.
        </p>
      </div>
    </div>
  );
}

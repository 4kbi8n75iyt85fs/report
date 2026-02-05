"use client";

import React from "react"

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Target,
  Megaphone,
  Cog,
  Banknote,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

interface StrategyPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  recommendations: {
    title: string;
    points: string[];
  }[];
}

const strategyPillars: StrategyPillar[] = [
  {
    id: "positioning",
    title: "Positioning",
    subtitle: "Define your market space",
    icon: <Target className="w-10 h-10" />,
    color: "#4169E1",
    recommendations: [
      {
        title: "Premium Personalized",
        points: [
          "Target affluent Gulshan/Banani families",
          "Verified elite tutors with proven track records",
          "Personalized learning plans",
          "Price: BDT 12,000-20,000/month",
        ],
      },
      {
        title: "Value Hybrid",
        points: [
          "Serve middle-income in Uttara/Mohammadpur",
          "Combine online and in-person delivery",
          "Qualified tutors at competitive rates",
          "Price: BDT 5,000-8,000/month",
        ],
      },
      {
        title: "Accessible Mass Market",
        points: [
          "Address underserved low-income segments",
          "Affordable group classes",
          "Online subscriptions model",
          "Price: BDT 500-2,000/month",
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    subtitle: "Multi-channel acquisition",
    icon: <Megaphone className="w-10 h-10" />,
    color: "#10B981",
    recommendations: [
      {
        title: "Digital Channels (60%)",
        points: [
          "Facebook: 45M users, educational content, testimonials",
          "YouTube: Tutorial videos, success stories",
          "Google Ads: Search intent capture",
          "Instagram: Visual content, student engagement",
        ],
      },
      {
        title: "Traditional (40%)",
        points: [
          "Word-of-mouth: 1 month free for referrals",
          "School partnerships: Workshops & seminars",
          "Micro-influencers: 50K-200K followers",
          "Local community: Events & parent groups",
        ],
      },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    subtitle: "Excellence in execution",
    icon: <Cog className="w-10 h-10" />,
    color: "#F59E0B",
    recommendations: [
      {
        title: "Tutor Verification",
        points: [
          "Academic credential verification",
          "Teaching demonstration assessment",
          "Background checks & vetting",
          "Continuous performance monitoring",
          "Parent feedback integration",
        ],
      },
      {
        title: "Technology Platform",
        points: [
          "Mobile-first responsive design",
          "Easy scheduling & rescheduling",
          "Real-time progress tracking",
          "Digital payments (bKash, Nagad)",
          "Automated tutor-student matching",
        ],
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    subtitle: "Competitive rate structures",
    icon: <Banknote className="w-10 h-10" />,
    color: "#8B5CF6",
    recommendations: [
      {
        title: "Dynamic Pricing",
        points: [
          "Base rate on tutor qualifications",
          "Subject premium: 20-30% for Math/Science",
          "Online discount: 15-25% below in-person",
          "Peak season adjustments",
        ],
      },
      {
        title: "Freemium Model",
        points: [
          "Basic content free to build user base",
          "Premium features at BDT 1,999/month",
          "Trial sessions for conversion",
          "Upsell path optimization",
        ],
      },
      {
        title: "Volume Incentives",
        points: [
          "Multi-subject discounts (15-20%)",
          "Sibling packages",
          "Annual prepay savings (2 months free)",
          "Group class rates",
        ],
      },
    ],
  },
  {
    id: "differentiation",
    title: "Differentiation",
    subtitle: "Stand out from competition",
    icon: <Sparkles className="w-10 h-10" />,
    color: "#EF4444",
    recommendations: [
      {
        title: "AI Personalization",
        points: [
          "Adaptive learning algorithms",
          "Custom content pacing for each student",
          "Performance prediction & intervention",
          "Personalized study plans",
        ],
      },
      {
        title: "Hybrid Flexibility",
        points: [
          "Seamless online/offline switching",
          "Student preference-based delivery",
          "Recorded sessions for review",
          "24/7 doubt resolution support",
        ],
      },
      {
        title: "Community Building",
        points: [
          "Peer learning groups",
          "Parent forums & engagement",
          "Student achievement celebrations",
          "Alumni success network",
        ],
      },
    ],
  },
];

export function InteractiveStrategyFramework() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const activePillarData = strategyPillars.find((p) => p.id === activePillar);

  return (
    <div className="w-full">
      {/* Grid of Pillar Cards */}
      <div
        className={cn(
          "grid gap-4 transition-all duration-500",
          activePillar
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        )}
      >
        {activePillar ? (
          // Expanded View
          <div className="w-full">
            {activePillarData && (
              <div
                className="brutalist-card p-0 overflow-hidden"
                style={{
                  borderColor: activePillarData.color,
                  boxShadow: `6px 6px 0px ${activePillarData.color}`,
                }}
              >
                {/* Header */}
                <div
                  className="p-6 flex items-center justify-between"
                  style={{ backgroundColor: activePillarData.color }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center text-white">
                      {activePillarData.icon}
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {activePillarData.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {activePillarData.subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePillar(null)}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 font-bold text-sm uppercase tracking-wide transition-colors cursor-pointer"
                    aria-label="Go back to all pillars"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Back</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 bg-card">
                  <div
                    className={cn(
                      "grid gap-6",
                      activePillarData.recommendations.length === 2
                        ? "md:grid-cols-2"
                        : "md:grid-cols-3"
                    )}
                  >
                    {activePillarData.recommendations.map((rec, idx) => (
                      <div
                        key={rec.title}
                        className="bg-secondary border-2 border-foreground p-5"
                        style={{
                          animationDelay: `${idx * 100}ms`,
                        }}
                      >
                        <h4
                          className="font-bold text-lg mb-4 pb-3 border-b-2"
                          style={{ borderColor: activePillarData.color }}
                        >
                          {rec.title}
                        </h4>
                        <ul className="space-y-3">
                          {rec.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm"
                            >
                              <CheckCircle2
                                className="w-4 h-4 flex-shrink-0 mt-0.5"
                                style={{ color: activePillarData.color }}
                              />
                              <span className="text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Collapsed Card Grid
          strategyPillars.map((pillar, index) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className="group relative bg-card border-3 border-foreground p-6 text-left transition-all duration-300 cursor-pointer hover:translate-x-[-3px] hover:translate-y-[-3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              style={{
                boxShadow: "6px 6px 0px var(--foreground)",
                animationDelay: `${index * 75}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `8px 8px 0px ${pillar.color}`;
                e.currentTarget.style.borderColor = pillar.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "6px 6px 0px var(--foreground)";
                e.currentTarget.style.borderColor = "var(--foreground)";
              }}
              aria-label={`View ${pillar.title} strategy details`}
            >
              {/* Pillar Number Badge */}
              <div
                className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center font-bold text-sm text-white"
                style={{ backgroundColor: pillar.color }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center mb-4 border-2 border-foreground transition-colors duration-300"
                style={{
                  backgroundColor: `${pillar.color}15`,
                  color: pillar.color,
                }}
              >
                {pillar.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-bold text-xl mb-1">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pillar.subtitle}
              </p>

              {/* Click Indicator */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Explore</span>
                <svg
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Recommendation Count */}
              <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: pillar.color }} />
            </button>
          ))
        )}
      </div>

      {/* Legend / Instructions */}
      {!activePillar && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <p className="text-center">
            Click on any pillar to explore detailed strategic recommendations
          </p>
        </div>
      )}
    </div>
  );
}

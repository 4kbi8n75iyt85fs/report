"use client";

import { useState, useEffect } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Pricing data structure based on the table
const pricingData = {
  "Class 1-4": {
    "Bangla Medium": { min: 3000, max: 6000 },
    "English Medium": { min: 4000, max: 7000 },
    "Cambridge/Edexcel": { min: 6000, max: 10000 },
  },
  "Class 5-8": {
    "Bangla Medium": { min: 5000, max: 7000 },
    "English Medium": { min: 6000, max: 8000 },
    "Cambridge/Edexcel": { min: 6000, max: 10000 },
  },
  "SSC/O-Level": {
    "Bangla Medium": { min: 1500, max: 3000 },
    "English Medium": { min: 2000, max: 3500 },
    "Cambridge/Edexcel": { min: 3500, max: 8000 },
  },
  "HSC/A-Level": {
    "Bangla Medium": { min: 2000, max: 3500 },
    "English Medium": { min: 2500, max: 3500 },
    "Cambridge/Edexcel": { min: 4500, max: 9000 },
  },
};

// Subject category multipliers
const subjectMultipliers = {
  "STEM (Math, Science)": 1.2,
  "Languages": 1.0,
  "Test Preparation": 1.3,
  "General Subjects": 0.9,
};

type EducationLevel = keyof typeof pricingData;
type Medium = keyof typeof pricingData["Class 1-4"];
type SubjectCategory = keyof typeof subjectMultipliers;

export function InteractivePricingCalculator() {
  const [educationLevel, setEducationLevel] = useState<EducationLevel>("Class 5-8");
  const [medium, setMedium] = useState<Medium>("Bangla Medium");
  const [subjectCategory, setSubjectCategory] = useState<SubjectCategory>("STEM (Math, Science)");
  const [displayMin, setDisplayMin] = useState(0);
  const [displayMax, setDisplayMax] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate price range
  useEffect(() => {
    const basePrice = pricingData[educationLevel][medium];
    const multiplier = subjectMultipliers[subjectCategory];
    
    const calculatedMin = Math.round(basePrice.min * multiplier);
    const calculatedMax = Math.round(basePrice.max * multiplier);

    setIsAnimating(true);
    
    // Animate the price change
    const duration = 600;
    const steps = 30;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const startMin = displayMin;
    const startMax = displayMax;
    const diffMin = calculatedMin - startMin;
    const diffMax = calculatedMax - startMax;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      setDisplayMin(Math.round(startMin + diffMin * easeProgress));
      setDisplayMax(Math.round(startMax + diffMax * easeProgress));

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayMin(calculatedMin);
        setDisplayMax(calculatedMax);
        setIsAnimating(false);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [educationLevel, medium, subjectCategory]);

  const SegmentedControl = <T extends string>({
    options,
    value,
    onChange,
    label,
  }: {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    label: string;
  }) => (
    <div className="space-y-3">
      <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "px-4 py-3 text-left font-bold border-3 border-foreground transition-all duration-200",
              "hover:translate-x-[-2px] hover:translate-y-[-2px]",
              value === option
                ? "bg-primary text-primary-foreground shadow-[4px_4px_0px_#1C1917]"
                : "bg-card text-foreground shadow-[2px_2px_0px_#1C1917] hover:shadow-[4px_4px_0px_#1C1917]"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Controls Section */}
      <div className="space-y-6 brutalist-card p-6">
        <div className="flex items-center gap-3 border-b-3 border-foreground pb-4 mb-6">
          <div className="p-3 bg-primary text-primary-foreground border-2 border-foreground">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-xl">Calculate Your Costs</h4>
            <p className="text-sm text-muted-foreground">
              Select options to estimate monthly tutoring expenses
            </p>
          </div>
        </div>

        <SegmentedControl
          label="Education Level"
          options={Object.keys(pricingData) as EducationLevel[]}
          value={educationLevel}
          onChange={setEducationLevel}
        />

        <SegmentedControl
          label="Medium"
          options={["Bangla Medium", "English Medium", "Cambridge/Edexcel"] as Medium[]}
          value={medium}
          onChange={setMedium}
        />

        <SegmentedControl
          label="Subject Category"
          options={Object.keys(subjectMultipliers) as SubjectCategory[]}
          value={subjectCategory}
          onChange={setSubjectCategory}
        />
      </div>

      {/* Price Display Section */}
      <div className="lg:sticky lg:top-8 space-y-4">
        <div
          className={cn(
            "brutalist-card p-8 bg-gradient-to-br from-primary/10 to-accent/30",
            "transition-all duration-300",
            isAnimating && "scale-[1.02]"
          )}
        >
          <div className="text-center space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Estimated Monthly Cost
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">From</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  ৳{displayMin.toLocaleString()}
                </p>
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-muted-foreground">—</div>
              
              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">To</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  ৳{displayMax.toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              ≈ ${Math.round(displayMin / 110)} - ${Math.round(displayMax / 110)} USD
            </p>
          </div>
        </div>

        {/* Breakdown Info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-secondary border-2 border-foreground">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Per Week</p>
            <p className="font-bold text-lg">
              ৳{Math.round(displayMin / 4).toLocaleString()} - ৳{Math.round(displayMax / 4).toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-secondary border-2 border-foreground">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Per Session</p>
            <p className="font-bold text-lg">
              ৳{Math.round(displayMin / 16).toLocaleString()} - ৳{Math.round(displayMax / 16).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Additional Context */}
        <div className="border-3 border-foreground p-4 bg-blue-50">
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm mb-1">Market Context</p>
              <p className="text-sm text-foreground">
                {subjectCategory === "STEM (Math, Science)" && 
                  "STEM subjects command 20% premium due to high demand (62% of market)"}
                {subjectCategory === "Test Preparation" && 
                  "Test prep rates peak during HSC season with 30% premium pricing"}
                {subjectCategory === "Languages" && 
                  "English language tutoring represents core demand across all levels"}
                {subjectCategory === "General Subjects" && 
                  "General subjects typically priced 10% below average market rates"}
              </p>
            </div>
          </div>
        </div>

        {/* Note about SSC/HSC */}
        {(educationLevel === "SSC/O-Level" || educationLevel === "HSC/A-Level") && (
          <div className="p-4 bg-amber-50 border-3 border-foreground">
            <p className="text-xs uppercase tracking-wide font-bold mb-1">Per Subject Pricing</p>
            <p className="text-sm">
              SSC and HSC rates shown are per subject. Most students take 4-6 subjects, 
              resulting in total monthly costs of ৳{Math.round(displayMin * 5).toLocaleString()} - ৳{Math.round(displayMax * 5).toLocaleString()}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

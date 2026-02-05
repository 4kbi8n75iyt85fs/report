"use client";

import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { cn } from "@/lib/utils";

const subjectData = [
  {
    subject: "Mathematics",
    demand: 95,
    stat: "62% STEM focus",
    color: "#4169E1",
  },
  {
    subject: "Science",
    demand: 82,
    stat: "Physics, Chemistry, Biology",
    color: "#10B981",
  },
  {
    subject: "English",
    demand: 68,
    stat: "Language & Communication",
    color: "#F59E0B",
  },
  {
    subject: "Test Preparation",
    demand: 75,
    stat: "HSC & University Entrance",
    color: "#8B5CF6",
  },
  {
    subject: "Professional Certs",
    demand: 35,
    stat: "Emerging segment",
    color: "#EF4444",
  },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      subject: string;
      demand: number;
      stat: string;
    };
  }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border-3 border-foreground p-4 shadow-[4px_4px_0px_#1C1917]">
        <p className="font-bold text-foreground text-lg">{data.subject}</p>
        <p className="text-muted-foreground text-sm mt-1">{data.stat}</p>
        <p className="text-primary font-bold text-xl mt-2">
          {data.demand}% Demand Index
        </p>
      </div>
    );
  }
  return null;
}

interface CustomLabelProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  index?: number;
}

function CustomLabel({ x = 0, y = 0, width = 0, height = 0, index = 0 }: CustomLabelProps) {
  const data = subjectData[index];
  if (!data) return null;
  
  return (
    <g>
      <text
        x={x + width + 8}
        y={y + height / 2}
        fill="#1C1917"
        textAnchor="start"
        dominantBaseline="middle"
        className="font-bold text-sm"
      >
        {data.stat}
      </text>
    </g>
  );
}

export function SubjectDemandChart() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && animationProgress < 100) {
      const timer = setTimeout(() => {
        setAnimationProgress((prev) => Math.min(prev + 2, 100));
      }, 15);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationProgress]);

  const animatedData = subjectData.map((item) => ({
    ...item,
    demand: Math.round((item.demand * animationProgress) / 100),
  }));

  return (
    <div
      ref={containerRef}
      className={cn(
        "brutalist-card p-6 h-80 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <h3 className="font-bold text-xl mb-2 uppercase tracking-wider border-b-2 border-foreground pb-4">
        Most In-Demand Subjects
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Ranked by student demand intensity in Dhaka
      </p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={animatedData}
          layout="vertical"
          margin={{ top: 5, right: 140, left: 10, bottom: 5 }}
          barCategoryGap="20%"
        >
          <XAxis
            type="number"
            domain={[0, 100]}
            hide
          />
          <YAxis
            type="category"
            dataKey="subject"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#1C1917", fontWeight: 700, fontSize: 12 }}
            width={110}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#E7E5E4" }}
          />
          <Bar
            dataKey="demand"
            radius={0}
            maxBarSize={28}
          >
            {animatedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList content={<CustomLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t-2 border-muted">
        {subjectData.slice(0, 4).map((item) => (
          <div key={item.subject} className="flex items-center gap-2">
            <div
              className="w-4 h-4 border-2 border-foreground"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs font-medium text-muted-foreground">
              {item.subject}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

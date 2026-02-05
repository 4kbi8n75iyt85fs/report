"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Data based on report content
const demographicsData = [
  {
    level: "Primary",
    ageGroup: "Ages 6-10",
    participating: 35,
    notParticipating: 65,
    subjects: "Foundational subjects (Reading, Writing, Basic Math)",
    fill: "#4169E1",
  },
  {
    level: "Secondary",
    ageGroup: "Ages 11-15",
    participating: 75,
    notParticipating: 25,
    subjects: "Core academic subjects (Math, Science, English)",
    fill: "#4169E1",
  },
  {
    level: "Higher Secondary",
    ageGroup: "Ages 16-17",
    participating: 85,
    notParticipating: 15,
    subjects: "Intensive HSC exam preparation (STEM, Humanities)",
    fill: "#4169E1",
  },
  {
    level: "University",
    ageGroup: "Ages 18+",
    participating: 45,
    notParticipating: 55,
    subjects: "Specialized courses & professional skill development",
    fill: "#4169E1",
  },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: typeof demographicsData[0];
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border-[3px] border-foreground p-4 shadow-[6px_6px_0px_rgba(28,25,23,1)]">
        <p className="font-bold text-lg mb-2 uppercase tracking-wider">
          {data.level}
        </p>
        <p className="text-sm text-muted-foreground mb-3">{data.ageGroup}</p>
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary" />
              <span className="font-semibold">Participating:</span>
            </div>
            <span className="font-bold text-primary">{data.participating}%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted" />
              <span className="font-semibold">Not Participating:</span>
            </div>
            <span className="font-bold">{data.notParticipating}%</span>
          </div>
        </div>
        <div className="border-t-2 border-foreground pt-3">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1">
            Key Subjects in Demand
          </p>
          <p className="text-sm">{data.subjects}</p>
        </div>
      </div>
    );
  }
  return null;
};

const CustomLegend = () => {
  return (
    <div className="flex justify-center gap-6 mt-6 flex-wrap">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-primary border-2 border-foreground" />
        <span className="font-bold text-sm uppercase tracking-wide">
          Participating in Tutoring
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-muted border-2 border-foreground" />
        <span className="font-bold text-sm uppercase tracking-wide">
          Not Participating
        </span>
      </div>
    </div>
  );
};

export function StudentDemographicsChart() {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  return (
    <div className="brutalist-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="font-bold text-xl md:text-2xl mb-2 uppercase tracking-wider">
          Student Distribution & Tutoring Participation
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">
          Hover over bars to see detailed participation rates and subject demand
          by education level
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={demographicsData}
          margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#1C1917"
            strokeWidth={2}
            vertical={false}
          />
          <XAxis
            dataKey="level"
            stroke="#1C1917"
            strokeWidth={2}
            tick={{
              fill: "#1C1917",
              fontWeight: 700,
              fontSize: 13,
              fontFamily: "Space Grotesk, system-ui, sans-serif",
            }}
            angle={-15}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke="#1C1917"
            strokeWidth={2}
            tick={{
              fill: "#1C1917",
              fontWeight: 700,
              fontSize: 13,
              fontFamily: "Space Grotesk, system-ui, sans-serif",
            }}
            label={{
              value: "Percentage (%)",
              angle: -90,
              position: "insideLeft",
              style: {
                fill: "#1C1917",
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "Space Grotesk, system-ui, sans-serif",
              },
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#F5F5F4", opacity: 0.3 }}
          />
          <Legend content={<CustomLegend />} />
          <Bar
            dataKey="participating"
            stackId="a"
            fill="#4169E1"
            stroke="#1C1917"
            strokeWidth={2}
            onMouseEnter={() => setHoveredBar("participating")}
            onMouseLeave={() => setHoveredBar(null)}
            style={{
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              opacity: hoveredBar === "notParticipating" ? 0.6 : 1,
            }}
          />
          <Bar
            dataKey="notParticipating"
            stackId="a"
            fill="#E7E5E4"
            stroke="#1C1917"
            strokeWidth={2}
            onMouseEnter={() => setHoveredBar("notParticipating")}
            onMouseLeave={() => setHoveredBar(null)}
            style={{
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              opacity: hoveredBar === "participating" ? 0.6 : 1,
            }}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {demographicsData.map((item, idx) => (
          <div
            key={item.level}
            className="border-2 border-foreground p-4 bg-secondary"
          >
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
              {item.participating}%
            </p>
            <p className="font-bold text-xs md:text-sm uppercase tracking-wide">
              {item.level}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {item.ageGroup}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-accent border-2 border-foreground p-4">
        <p className="text-sm font-semibold">
          <span className="font-bold text-primary">Key Insight:</span> Higher
          education levels show dramatically increased tutoring participation,
          with HSC students (85%+) facing the most intense exam pressure. The
          sharp increase from primary (35%) to secondary (75%) reflects
          Bangladesh's competitive academic culture.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState, useCallback } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from "recharts";

interface MarketSegment {
  name: string;
  value: number;
  description: string;
  fill: string;
}

const marketData: MarketSegment[] = [
  {
    name: "Private Tutors",
    value: 45,
    description: "Individual educators providing home-based or online instruction",
    fill: "#4169E1", // Royal Blue - Primary
  },
  {
    name: "Coaching Centers",
    value: 35,
    description: "Physical institutions offering group classes and exam prep",
    fill: "#10B981", // Emerald Green
  },
  {
    name: "Online Platforms",
    value: 20,
    description: "Digital marketplaces and learning platforms",
    fill: "#F59E0B", // Amber
  },
];

interface ActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: MarketSegment;
  percent: number;
  value: number;
}

const renderActiveShape = (props: ActiveShapeProps) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 12}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#1C1917"
        strokeWidth={3}
        style={{ filter: "drop-shadow(4px 4px 0px #1C1917)" }}
      />
    </g>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: MarketSegment;
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className="bg-card border-3 border-foreground p-4 min-w-[200px]"
        style={{ boxShadow: "4px 4px 0px #1C1917" }}
      >
        <p className="font-bold text-lg uppercase tracking-wide mb-1">
          {data.name}
        </p>
        <p className="text-3xl font-bold mb-2" style={{ color: data.fill }}>
          {data.value}%
        </p>
        <p className="text-sm text-muted-foreground leading-snug">
          {data.description}
        </p>
      </div>
    );
  }
  return null;
};

export function MarketStructurePieChart() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onPieEnter = useCallback((_: unknown, index: number) => {
    setActiveIndex(index);
  }, []);

  const onPieLeave = useCallback(() => {
    setActiveIndex(undefined);
  }, []);

  return (
    <div
      className="brutalist-card p-6 h-full flex flex-col"
      style={{ minHeight: "320px" }}
    >
      <div className="mb-4">
        <h3 className="font-bold text-xl uppercase tracking-wide">
          Market Structure
        </h3>
        <p className="text-sm text-muted-foreground">
          Distribution of tutoring providers
        </p>
      </div>

      <div className="flex-1 relative" style={{ minHeight: "240px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={marketData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              stroke="#1C1917"
              strokeWidth={3}
              style={{ cursor: "pointer" }}
            >
              {marketData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  style={{
                    filter:
                      activeIndex === index
                        ? "drop-shadow(4px 4px 0px #1C1917)"
                        : "none",
                    transition: "filter 0.2s ease",
                  }}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          style={{ width: "100px" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            Total
          </p>
          <p className="text-lg font-bold leading-tight">BDT 1.5B</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {marketData.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(undefined)}
          >
            <div
              className="w-4 h-4 border-2 border-foreground"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="text-sm font-semibold">{entry.name}</span>
            <span className="text-sm text-muted-foreground">({entry.value}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

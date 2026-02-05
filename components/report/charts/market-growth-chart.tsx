"use client";

import React from "react"

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { TrendingUp, Globe, ChevronDown } from "lucide-react";

// Calculate market values using CAGR formula: FV = PV * (1 + r)^n
// Overall market: BDT 1.5B in 2024, 10% CAGR
// Online market: USD 358.76M in 2024, 24.42% CAGR, reaching USD 2,563.42M by 2033

const BASE_YEAR = 2020;
const CURRENT_YEAR = 2024;
const PROJECTION_END = 2033;

// BDT values in billions
const OVERALL_MARKET_2024 = 1.5; // BDT billions
const OVERALL_CAGR = 0.10; // 10%

// Online market in USD millions
const ONLINE_MARKET_2024 = 358.76; // USD millions
const ONLINE_CAGR = 0.2442; // 24.42%

// Generate data for each year
function generateMarketData() {
  const data = [];
  
  for (let year = BASE_YEAR; year <= PROJECTION_END; year++) {
    const yearsFromBase = year - CURRENT_YEAR;
    
    // Calculate overall market (BDT billions)
    const overallMarket = OVERALL_MARKET_2024 * Math.pow(1 + OVERALL_CAGR, yearsFromBase);
    
    // Online market only starts tracking from 2024
    let onlineMarket = null;
    if (year >= CURRENT_YEAR) {
      const yearsFrom2024 = year - CURRENT_YEAR;
      onlineMarket = ONLINE_MARKET_2024 * Math.pow(1 + ONLINE_CAGR, yearsFrom2024);
    }
    
    data.push({
      year,
      overallMarket: parseFloat(overallMarket.toFixed(2)),
      onlineMarket: onlineMarket ? parseFloat(onlineMarket.toFixed(2)) : null,
      isProjection: year > CURRENT_YEAR,
    });
  }
  
  return data;
}

const marketData = generateMarketData();

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: number;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const isProjection = label && label > CURRENT_YEAR;
  
  return (
    <div className="bg-card border-3 border-foreground p-4 shadow-[4px_4px_0px_#1C1917]">
      <p className="font-bold text-lg mb-2">
        {label}
        {isProjection && (
          <span className="ml-2 text-xs font-normal text-muted-foreground uppercase tracking-wider">
            Projected
          </span>
        )}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm mb-1">
          <div
            className="w-3 h-3 border border-foreground"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">
            {entry.dataKey === "overallMarket" ? "Overall Market:" : "Online Segment:"}
          </span>
          <span className="font-bold">
            {entry.dataKey === "overallMarket"
              ? `BDT ${entry.value.toFixed(2)}B`
              : `USD ${entry.value.toFixed(0)}M`}
          </span>
        </div>
      ))}
    </div>
  );
}

interface LegendItemProps {
  color: string;
  label: string;
  cagr: string;
  icon: React.ReactNode;
}

function LegendItem({ color, label, cagr, icon }: LegendItemProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-card border-2 border-foreground">
      <div
        className="w-4 h-4 border border-foreground"
        style={{ backgroundColor: color }}
      />
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium text-sm">{label}</span>
      </div>
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-auto">
        {cagr} CAGR
      </span>
    </div>
  );
}

export function MarketGrowthChart() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    const element = document.getElementById("market-growth-chart");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimationComplete(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Custom tick formatter for Y axis (Overall Market - BDT)
  const formatBDT = (value: number) => `${value}B`;
  
  // Custom tick formatter for right Y axis (Online Market - USD)
  const formatUSD = (value: number) => `$${value}M`;

  return (
    <div
      id="market-growth-chart"
      className="brutalist-card p-6 h-full flex flex-col"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-2">Market Growth Trajectory</h3>
        <p className="text-sm text-muted-foreground">
          Projected growth from 2020 to 2033 with historical and future projections
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <LegendItem
          color="#10B981"
          label="Overall Market (BDT)"
          cagr="10%"
          icon={<TrendingUp className="w-4 h-4" />}
        />
        <LegendItem
          color="#4169E1"
          label="Online Segment (USD)"
          cagr="24.42%"
          icon={<Globe className="w-4 h-4" />}
        />
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={marketData}
            margin={{ top: 20, right: 60, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E7E5E4"
              vertical={false}
            />
            <XAxis
              dataKey="year"
              tick={{ fill: "#57534E", fontSize: 12, fontWeight: 600 }}
              tickLine={{ stroke: "#1C1917" }}
              axisLine={{ stroke: "#1C1917", strokeWidth: 2 }}
              interval={1}
            />
            <YAxis
              yAxisId="left"
              tick={{ fill: "#57534E", fontSize: 11, fontWeight: 600 }}
              tickLine={{ stroke: "#1C1917" }}
              axisLine={{ stroke: "#1C1917", strokeWidth: 2 }}
              tickFormatter={formatBDT}
              domain={[0, "auto"]}
              label={{
                value: "BDT (Billions)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#57534E", fontSize: 11, fontWeight: 600 },
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: "#57534E", fontSize: 11, fontWeight: 600 }}
              tickLine={{ stroke: "#1C1917" }}
              axisLine={{ stroke: "#1C1917", strokeWidth: 2 }}
              tickFormatter={formatUSD}
              domain={[0, 3000]}
              label={{
                value: "USD (Millions)",
                angle: 90,
                position: "insideRight",
                style: { textAnchor: "middle", fill: "#57534E", fontSize: 11, fontWeight: 600 },
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#1C1917", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            
            {/* Reference line for current year */}
            <ReferenceLine
              x={CURRENT_YEAR}
              yAxisId="left"
              stroke="#1C1917"
              strokeDasharray="4 4"
              strokeWidth={2}
              label={{
                value: "Today",
                position: "top",
                fill: "#1C1917",
                fontSize: 11,
                fontWeight: 700,
              }}
            />

            {/* Overall Market Line */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="overallMarket"
              stroke="#10B981"
              strokeWidth={4}
              dot={(props) => {
                const { cx, cy, payload } = props;
                if (!cx || !cy) return <></>;
                return (
                  <rect
                    x={cx - 5}
                    y={cy - 5}
                    width={10}
                    height={10}
                    fill={payload.isProjection ? "#FFFFFF" : "#10B981"}
                    stroke="#10B981"
                    strokeWidth={2}
                    style={{ cursor: "pointer" }}
                  />
                );
              }}
              activeDot={{
                r: 8,
                fill: "#10B981",
                stroke: "#1C1917",
                strokeWidth: 2,
              }}
              isAnimationActive={isVisible}
              animationDuration={1500}
              animationEasing="ease-out"
            />

            {/* Online Market Line - Royal Blue */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="onlineMarket"
              stroke="#4169E1"
              strokeWidth={4}
              dot={(props) => {
                const { cx, cy, payload } = props;
                if (!cx || !cy || payload.onlineMarket === null) return <></>;
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill={payload.isProjection ? "#FFFFFF" : "#4169E1"}
                    stroke="#4169E1"
                    strokeWidth={2}
                    style={{ cursor: "pointer" }}
                  />
                );
              }}
              activeDot={{
                r: 8,
                fill: "#4169E1",
                stroke: "#1C1917",
                strokeWidth: 2,
              }}
              connectNulls={false}
              isAnimationActive={isVisible}
              animationDuration={1500}
              animationBegin={500}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Key Insights */}
      <div
        className={`mt-6 pt-4 border-t-2 border-foreground transition-opacity duration-500 ${
          animationComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-secondary">
            <p className="text-2xl font-bold text-[#10B981]">
              BDT 3.9B
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Projected 2033 Market
            </p>
          </div>
          <div className="text-center p-3 bg-primary/10">
            <p className="text-2xl font-bold text-primary">
              $2.56B
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Online by 2033
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
        <span className="text-xs uppercase tracking-wider">Hover for details</span>
      </div>
    </div>
  );
}

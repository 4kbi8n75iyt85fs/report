import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function MetricCard({
  value,
  label,
  description,
  trend,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">
            {label}
          </p>
          <p className="text-3xl md:text-4xl font-bold tracking-tight">
            {value}
          </p>
          {description && (
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        {trend && (
          <div
            className={cn(
              "p-2 border-2 border-foreground",
              trend === "up" && "bg-green-100 text-green-700",
              trend === "down" && "bg-red-100 text-red-700",
              trend === "neutral" && "bg-gray-100 text-gray-700"
            )}
          >
            {trend === "up" && <TrendingUp className="w-5 h-5" />}
            {trend === "down" && <TrendingDown className="w-5 h-5" />}
            {trend === "neutral" && <Minus className="w-5 h-5" />}
          </div>
        )}
      </div>
    </div>
  );
}

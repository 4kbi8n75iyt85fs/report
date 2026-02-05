import { cn } from "@/lib/utils";
import { Info, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

interface CalloutBoxProps {
  children: ReactNode;
  type?: "info" | "warning" | "insight" | "growth";
  title?: string;
  className?: string;
}

export function CalloutBox({
  children,
  type = "info",
  title,
  className,
}: CalloutBoxProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    insight: Lightbulb,
    growth: TrendingUp,
  };

  const bgColors = {
    info: "bg-blue-50",
    warning: "bg-amber-50",
    insight: "bg-purple-50",
    growth: "bg-green-50",
  };

  const iconColors = {
    info: "text-blue-600",
    warning: "text-amber-600",
    insight: "text-purple-600",
    growth: "text-green-600",
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        "border-3 border-foreground p-5",
        "shadow-[4px_4px_0px_#1C1917]",
        bgColors[type],
        className
      )}
    >
      <div className="flex gap-4">
        <div className={cn("flex-shrink-0", iconColors[type])}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          {title && (
            <p className="font-bold text-lg mb-2">{title}</p>
          )}
          <div className="text-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

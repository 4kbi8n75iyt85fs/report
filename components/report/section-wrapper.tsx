"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgColor?: "default" | "primary" | "secondary" | "accent";
}

export function SectionWrapper({
  id,
  children,
  className,
  bgColor = "default",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    default: "bg-background",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "report-section",
        bgClasses[bgColor],
        "transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

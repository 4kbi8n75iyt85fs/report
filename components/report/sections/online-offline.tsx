import { SectionWrapper } from "../section-wrapper";
import { MetricCard } from "../metric-card";
import { OnlineOfflineComparisonMatrix } from "../widgets/online-offline-comparison-matrix";
import { Zap, Smartphone, Lightbulb } from "lucide-react";

export function OnlineOffline() {
  return (
    <SectionWrapper id="online-offline">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 06
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Online vs. Offline Trends
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Analyzing the shift towards online tutoring, technology penetration, 
          and the strategic trade-offs between delivery models.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <MetricCard
          value="$358.76M"
          label="2024 Online Market"
          description="Current online education market size"
          trend="up"
        />
        <MetricCard
          value="$2.56B"
          label="2033 Projection"
          description="Projected online education market"
          trend="up"
        />
        <MetricCard
          value="24.42%"
          label="Online CAGR"
          description="Compound annual growth rate 2025-2033"
          trend="up"
        />
        <MetricCard
          value="Post-COVID"
          label="Acceleration"
          description="Pandemic drove rapid online adoption"
          trend="up"
        />
      </div>

      {/* Interactive Comparison Matrix */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Delivery Model Comparison</h3>
        <OnlineOfflineComparisonMatrix />
      </div>

      {/* Pros and Cons Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Online Tutoring */}
        <div className="brutalist-card p-6">
          <div className="flex items-center gap-3 mb-6 border-b-2 border-foreground pb-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold">
              ON
            </div>
            <h3 className="font-bold text-xl uppercase tracking-wider">
              Online Tutoring
            </h3>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-green-600 mb-3">
              Advantages
            </h4>
            <ul className="space-y-2">
              {[
                "Geographic flexibility - reach students anywhere",
                "Lower overhead costs for tutors",
                "Easy scheduling and rescheduling",
                "Recorded sessions for review",
                "Scalable to multiple students simultaneously",
                "Digital tools enhance learning experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 font-bold">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-destructive mb-3">
              Challenges
            </h4>
            <ul className="space-y-2">
              {[
                "Digital divide - device/internet access",
                "Engagement challenges with younger students",
                "Limited hands-on demonstration",
                "Technical issues disrupting sessions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-destructive font-bold">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* In-Person Tutoring */}
        <div className="brutalist-card p-6">
          <div className="flex items-center gap-3 mb-6 border-b-2 border-foreground pb-4">
            <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center font-bold">
              OFF
            </div>
            <h3 className="font-bold text-xl uppercase tracking-wider">
              In-Person Tutoring
            </h3>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-sm uppercase tracking-wider text-green-600 mb-3">
              Advantages
            </h4>
            <ul className="space-y-2">
              {[
                "Direct personal interaction and rapport",
                "Better behavioral monitoring",
                "Hands-on demonstrations possible",
                "Higher perceived value by parents",
                "Fewer technical barriers",
                "Stronger accountability",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 font-bold">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-destructive mb-3">
              Challenges
            </h4>
            <ul className="space-y-2">
              {[
                "Geographic constraints and travel time",
                "Higher costs (transportation, time)",
                "Scheduling inflexibility",
                "Safety concerns for home visits",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-destructive font-bold">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Constraints */}
      <div className="brutalist-card p-8">
        <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
          Technology Adoption Constraints
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-secondary">
            <div className="flex justify-center mb-2">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Connectivity</h4>
            <p className="text-sm text-muted-foreground">
              Inconsistent broadband access, especially in peripheral areas
            </p>
          </div>
          <div className="text-center p-4 bg-secondary">
            <div className="flex justify-center mb-2">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Device Access</h4>
            <p className="text-sm text-muted-foreground">
              Limited device ownership among middle-income families
            </p>
          </div>
          <div className="text-center p-4 bg-secondary">
            <div className="flex justify-center mb-2">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold mb-2">Digital Literacy</h4>
            <p className="text-sm text-muted-foreground">
              Persistent gaps in technology skills among parents and students
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

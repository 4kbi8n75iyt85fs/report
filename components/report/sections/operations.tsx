import { SectionWrapper } from "../section-wrapper";
import { TutorSupplyFunnel } from "../widgets/tutor-supply-funnel";
import { CalloutBox } from "../callout-box";
import { MetricCard } from "../metric-card";

export function Operations() {
  return (
    <SectionWrapper id="operations" bgColor="secondary">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 05
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Operational Considerations
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Understanding tutor supply dynamics, quality control challenges, and 
          the regulatory environment shaping business operations.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <MetricCard
          value="85%"
          label="Untrained Teachers"
          description="Teachers without initial pedagogical training after 3+ years"
          trend="down"
        />
        <MetricCard
          value="22.4%"
          label="B.Ed. Certified"
          description="Tutors with formal education credentials"
          trend="neutral"
        />
        <MetricCard
          value="2-3hrs"
          label="Daily Commute"
          description="Average tutor travel time in Dhaka"
          trend="down"
        />
      </div>

      {/* Tutor Supply Funnel */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Tutor Supply Pipeline</h3>
        <TutorSupplyFunnel />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Tutor Pool Analysis */}
        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Tutor Talent Pools
          </h3>
          <div className="space-y-4">
            {[
              { 
                pool: "University Students", 
                share: "40%", 
                quals: "Bachelor's in progress",
                note: "Flexible availability, lower rates" 
              },
              { 
                pool: "Serving Teachers", 
                share: "35%", 
                quals: "Graduate degree + B.Ed.",
                note: "Experience but time-constrained" 
              },
              { 
                pool: "Professional Tutors", 
                share: "25%", 
                quals: "Master's + 3-7 years exp.",
                note: "Premium rates, proven results" 
              },
            ].map((item) => (
              <div key={item.pool} className="border-b border-muted pb-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold">{item.pool}</p>
                  <span className="font-bold text-primary text-lg">{item.share}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.quals}</p>
                <p className="text-xs text-primary mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Challenges */}
        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Key Operational Challenges
          </h3>
          <div className="space-y-3">
            {[
              "Low teacher salaries driving moonlighting to tutoring",
              "Lack of formal pedagogical training standards",
              "Traffic congestion affecting in-home delivery",
              "Geographic service coverage limitations",
              "Quality assurance without formal accreditation",
              "Scheduling conflicts and cancellation management",
              "Payment collection and default handling",
              "Tutor retention and professional development",
            ].map((challenge, idx) => (
              <div key={challenge} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-destructive text-destructive-foreground text-xs font-bold flex items-center justify-center">
                  !
                </span>
                <p className="text-sm">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regulatory Environment */}
      <div className="brutalist-card p-8 mb-12">
        <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
          Regulatory & Cultural Environment
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-3">Regulatory Landscape</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                Laissez-faire approach despite UNESCO recommendations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                2019 High Court ruling on teacher tutoring largely unenforced
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                No licensing requirements for tutoring businesses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                "Digital Bangladesh" initiative promoting online education
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Cultural Context</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                Deep social acceptance of private tutoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                Intense examination competition driving demand
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                Perceived mainstream education deficiencies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                Urban vs. rural access disparity (84.7% vs 60.7%)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CalloutBox type="insight" title="Market Inefficiency Opportunity">
        <p>
          The sector exhibits a dual quality paradox—high parental investment 
          (৳1.5B annually) coexists with minimal quality standards, creating 
          opportunities for platforms offering <strong>credible verification</strong> and 
          <strong> pedagogical training systems</strong>.
        </p>
      </CalloutBox>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "../section-wrapper";
import { MetricCard } from "../metric-card";
import { CompetitorComparisonTable } from "./competitor-comparison-table";

export function CompetitiveLandscape() {
  return (
    <SectionWrapper id="competitive-landscape" bgColor="secondary">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 03
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Competitive Landscape
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Evaluating major players, business models, and value propositions in 
          Dhaka&apos;s tuition market ecosystem.
        </p>
      </div>

      {/* Key metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <MetricCard
          value="250,000+"
          label="TutorSheba Tutors"
          description="Registered tutors on largest platform"
          trend="up"
        />
        <MetricCard
          value="0%"
          label="Eudika Commission"
          description="Zero-commission marketplace model"
          trend="neutral"
        />
        <MetricCard
          value="18-33%"
          label="Typical Commission"
          description="Standard platform commission range"
          trend="neutral"
        />
      </div>

      {/* Competitor Comparison Table */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Major Platform Comparison</h3>
        <CompetitorComparisonTable />
      </div>

      {/* Business Model Cards */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Business Model Analysis</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="brutalist-card p-6">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
              M
            </div>
            <h4 className="font-bold text-lg mb-2">Marketplace</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Connect tutors with students, charge commission on transactions.
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              TutorSheba, BDTutors
            </p>
          </div>
          <div className="brutalist-card p-6">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
              S
            </div>
            <h4 className="font-bold text-lg mb-2">Subscription</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Monthly/annual fees for access to platform features and content.
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Shikho
            </p>
          </div>
          <div className="brutalist-card p-6">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
              Z
            </div>
            <h4 className="font-bold text-lg mb-2">Zero Commission</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Free platform, monetize through premium features or services.
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Eudika
            </p>
          </div>
          <div className="brutalist-card p-6">
            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
              H
            </div>
            <h4 className="font-bold text-lg mb-2">Hybrid</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Combine online platform with physical coaching centers.
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Udvash, CareTutors
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="brutalist-card p-8">
        <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
          Industry Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {[
            "Gamification and rewards systems for student engagement",
            "Animated video content for complex subjects",
            "Multi-channel marketing (social, referral, school partnerships)",
            "Strong customer support with quick response times",
            "Verified tutor profiles with background checks",
            "Free demo sessions to build trust",
            "Flexible scheduling and rescheduling options",
            "Progress tracking and parent reporting dashboards",
          ].map((practice, idx) => (
            <div key={practice} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <p className="text-sm">{practice}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

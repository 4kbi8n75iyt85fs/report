import { SectionWrapper } from "../section-wrapper";
import { InteractiveStrategyFramework } from "../interactive-strategy-framework";
import { CalloutBox } from "../callout-box";

export function StrategicRecommendations() {
  return (
    <SectionWrapper id="recommendations">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 08
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Strategic Recommendations
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Actionable strategies for market positioning, marketing, operations, 
          and differentiation in Dhaka&apos;s competitive tuition market.
        </p>
      </div>

      {/* Interactive Strategy Framework */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Strategic Framework Overview</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Five interconnected pillars form the foundation of a successful tutor-providing business. 
          Click each pillar to explore detailed, actionable recommendations.
        </p>
        <InteractiveStrategyFramework />
      </div>

      {/* 1. Market Positioning */}
      <div className="brutalist-card p-8 mb-8">
        <div className="flex items-center gap-4 mb-6 border-b-2 border-foreground pb-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            1
          </div>
          <h3 className="font-bold text-2xl">Market Positioning Strategy</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Differentiated positioning is essential in Dhaka&apos;s crowded tutoring landscape. 
          Three viable positioning strategies emerge based on target segment and capabilities:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-secondary p-5 border-2 border-foreground">
            <h4 className="font-bold text-lg mb-2">Premium Personalized</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Target Gulshan/Banani affluent families with verified elite tutors 
              and personalized learning plans.
            </p>
            <div className="border-t border-foreground pt-3 mt-auto">
              <p className="text-xs font-bold uppercase text-primary">৳12,000-20,000/month</p>
            </div>
          </div>
          <div className="bg-secondary p-5 border-2 border-foreground">
            <h4 className="font-bold text-lg mb-2">Value Hybrid</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Serve middle-income segments in Uttara/Mohammadpur with qualified 
              tutors combining online and in-person delivery.
            </p>
            <div className="border-t border-foreground pt-3 mt-auto">
              <p className="text-xs font-bold uppercase text-primary">৳5,000-8,000/month</p>
            </div>
          </div>
          <div className="bg-secondary p-5 border-2 border-foreground">
            <h4 className="font-bold text-lg mb-2">Accessible Mass</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Address underserved low-income segments with affordable group classes 
              and online subscriptions.
            </p>
            <div className="border-t border-foreground pt-3 mt-auto">
              <p className="text-xs font-bold uppercase text-primary">৳500-2,000/month</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Marketing Channels */}
      <div className="brutalist-card p-8 mb-8">
        <div className="flex items-center gap-4 mb-6 border-b-2 border-foreground pb-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            2
          </div>
          <h3 className="font-bold text-2xl">Multi-Channel Marketing Approach</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-4">Digital Channels (60% budget)</h4>
            <ul className="space-y-3">
              {[
                { channel: "Facebook (45M users)", desc: "Educational content, testimonials, targeted ads" },
                { channel: "YouTube", desc: "Tutorial videos, success stories, brand building" },
                { channel: "Google Ads", desc: "Search intent capture, local targeting" },
                { channel: "Instagram", desc: "Visual content, student life, engagement" },
              ].map((item) => (
                <li key={item.channel} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary mt-2" />
                  <div>
                    <p className="font-bold text-sm">{item.channel}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Traditional Channels (40% budget)</h4>
            <ul className="space-y-3">
              {[
                { channel: "Word-of-Mouth Referrals", desc: "1 month free for successful referrals" },
                { channel: "School Partnerships", desc: "Workshops, seminars, parent meetings" },
                { channel: "Micro-Influencers", desc: "50K-200K followers in education space" },
                { channel: "Local Community", desc: "Notice boards, parent groups, events" },
              ].map((item) => (
                <li key={item.channel} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-foreground mt-2" />
                  <div>
                    <p className="font-bold text-sm">{item.channel}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CalloutBox type="info" className="mt-6">
          <p className="text-sm">
            <strong>92% of consumers</strong> trust peer recommendations above all advertising. 
            Engineering word-of-mouth through referral incentives should be a core strategy.
          </p>
        </CalloutBox>
      </div>

      {/* 3. Operational Excellence */}
      <div className="brutalist-card p-8 mb-8">
        <div className="flex items-center gap-4 mb-6 border-b-2 border-foreground pb-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            3
          </div>
          <h3 className="font-bold text-2xl">Operational Excellence</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-4">Tutor Verification Protocol</h4>
            <div className="space-y-2">
              {[
                "Academic credential verification",
                "Teaching demonstration assessment",
                "Background checks",
                "Continuous performance monitoring",
                "Parent feedback integration",
              ].map((item, idx) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-secondary">
                  <span className="font-bold text-primary">{idx + 1}</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Technology Platform Requirements</h4>
            <div className="space-y-2">
              {[
                "Mobile-first responsive design",
                "Easy scheduling & rescheduling",
                "Real-time progress tracking",
                "Digital payments (bKash, Nagad)",
                "Automated tutor-student matching",
                "Parent reporting dashboard",
              ].map((item, idx) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-secondary">
                  <span className="font-bold text-primary">{idx + 1}</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Differentiation */}
      <div className="brutalist-card p-8 mb-8">
        <div className="flex items-center gap-4 mb-6 border-b-2 border-foreground pb-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            4
          </div>
          <h3 className="font-bold text-2xl">Differentiation Opportunities</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "AI Personalization",
              desc: "Adaptive learning algorithms to customize content and pacing for each student",
            },
            {
              title: "Hybrid Flexibility",
              desc: "Seamless switching between online and in-person based on student preference",
            },
            {
              title: "Community Building",
              desc: "Peer learning groups, parent forums, student achievement celebrations",
            },
            {
              title: "Affordability Innovation",
              desc: "Tiered pricing, scholarship programs, group discounts to expand access",
            },
          ].map((item) => (
            <div key={item.title} className="p-5 bg-accent border-2 border-foreground">
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Pricing Strategy */}
      <div className="brutalist-card p-8 mb-12">
        <div className="flex items-center gap-4 mb-6 border-b-2 border-foreground pb-4">
          <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            5
          </div>
          <h3 className="font-bold text-2xl">Pricing Strategy Recommendations</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-3">Dynamic Pricing</h4>
            <ul className="space-y-2 text-sm">
              <li>• Base rate on tutor qualifications</li>
              <li>• Subject difficulty premium (20-30% for Math/Science)</li>
              <li>• Online discount (15-25% below in-person)</li>
              <li>• Peak season adjustment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Freemium Model</h4>
            <ul className="space-y-2 text-sm">
              <li>• Basic content free</li>
              <li>• Premium features at ৳1,999/month</li>
              <li>• Rapid user base building</li>
              <li>• Conversion optimization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Volume Incentives</h4>
            <ul className="space-y-2 text-sm">
              <li>• Multi-subject discounts</li>
              <li>• Sibling packages</li>
              <li>• Annual prepay savings</li>
              <li>• Group class rates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-primary text-primary-foreground p-8 md:p-12 border-3 border-foreground shadow-[8px_8px_0px_#1C1917]">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
          Ready to Enter Dhaka&apos;s ৳1.5 Billion Tuition Market?
        </h3>
        <p className="text-lg opacity-90 mb-6 max-w-2xl">
          With 92% student participation and 24.42% CAGR in online education, 
          the opportunity is clear. Execute these strategies to capture your share.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#executive-summary"
            className="brutalist-btn bg-white text-primary px-6 py-3 cursor-pointer inline-block"
          >
            Review Full Report
          </a>
          <a
            href="#market-overview"
            className="brutalist-btn bg-transparent text-white border-white px-6 py-3 cursor-pointer inline-block"
          >
            Explore Market Data
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "../section-wrapper";
import { CalloutBox } from "../callout-box";
import { MetricCard } from "../metric-card";
import { InteractivePricingCalculator } from "../interactive-pricing-calculator";

export function PricingStrategies() {
  return (
    <SectionWrapper id="pricing">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 04
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Pricing Strategies
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Detailed analysis of pricing structures, commission models, and 
          socioeconomic factors influencing market accessibility.
        </p>
      </div>

      {/* Key Metric */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <MetricCard
          value="34%"
          label="Education Share"
          description="Household income allocated to children's education"
          trend="neutral"
        />
        <MetricCard
          value="৳1,500-10,000+"
          label="Monthly Range"
          description="Typical monthly tutoring costs"
          trend="neutral"
        />
        <MetricCard
          value="29%"
          label="Tutoring Allocation"
          description="Share of education spend on private tutoring"
          trend="up"
        />
      </div>

      {/* Interactive Pricing Calculator */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Interactive Pricing Calculator</h3>
        <InteractivePricingCalculator />
      </div>

      {/* Pricing Table */}
      <div className="mb-12 overflow-x-auto">
        <h3 className="font-bold text-2xl mb-6">Monthly Rates by Educational Medium</h3>
        <table className="brutalist-table w-full min-w-[600px]">
          <thead>
            <tr>
              <th>Level</th>
              <th>Bangla Medium</th>
              <th>English Medium (NC)</th>
              <th>Cambridge/Edexcel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Class 1-4</td>
              <td>৳3,000-6,000</td>
              <td>৳4,000-7,000</td>
              <td>৳6,000-10,000</td>
            </tr>
            <tr>
              <td className="font-medium">Class 5-8</td>
              <td>৳5,000-7,000</td>
              <td>৳6,000-8,000</td>
              <td>৳6,000-10,000</td>
            </tr>
            <tr>
              <td className="font-medium">SSC/O-Level</td>
              <td>৳1,500-3,000/subject</td>
              <td>৳2,000-3,500/subject</td>
              <td>৳3,500-8,000/subject</td>
            </tr>
            <tr>
              <td className="font-medium">HSC/A-Level</td>
              <td>৳2,000-3,500/subject</td>
              <td>৳2,500-3,500/subject</td>
              <td>৳4,500-9,000/subject</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Commission Models */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Platform Commission Models
          </h3>
          <div className="space-y-4">
            {[
              { model: "Traditional Marketplace", rate: "18-33%", desc: "Commission per transaction" },
              { model: "Subscription-Based", rate: "৳500-2,000/mo", desc: "Fixed monthly fee for tutors" },
              { model: "Zero Commission", rate: "0%", desc: "Freemium with premium features" },
              { model: "Hybrid Model", rate: "15% + Sub", desc: "Lower commission plus membership" },
            ].map((item) => (
              <div key={item.model} className="flex justify-between items-start border-b border-muted pb-3">
                <div>
                  <p className="font-bold">{item.model}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <span className="font-bold text-primary">{item.rate}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Common Payment Methods
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { method: "bKash", desc: "Mobile payment leader" },
              { method: "Nagad", desc: "Growing mobile wallet" },
              { method: "Direct Bank", desc: "Traditional transfer" },
              { method: "Cash", desc: "Still prevalent" },
              { method: "Card Online", desc: "Platform payments" },
              { method: "Monthly Invoice", desc: "B2B/institutional" },
            ].map((item) => (
              <div key={item.method} className="p-3 bg-secondary">
                <p className="font-bold">{item.method}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CalloutBox type="warning" title="Socioeconomic Disparity">
        <p>
          Gender and mobility factors influence tutor earnings significantly: 
          male tutors average <strong>৳6,850 monthly</strong> versus 
          <strong> ৳6,250 for female tutors</strong>. Low-income families allocate 
          disproportionate budget shares to tutoring, creating both accessibility 
          challenges and market opportunities for affordable solutions.
        </p>
      </CalloutBox>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "../section-wrapper";
import { MetricCard } from "../metric-card";
import { CalloutBox } from "../callout-box";

export function ExecutiveSummary() {
  return (
    <SectionWrapper id="executive-summary">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Executive Summary
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          A ৳1.5 Billion Opportunity in Private Education
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          The Bangladeshi tuition market in Dhaka represents one of Asia-Pacific&apos;s 
          most dynamic private education sectors, with robust growth and significant 
          entry potential for strategically positioned businesses.
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <MetricCard
          value="৳1.5B"
          label="Annual Market Size"
          description="Total addressable market in Dhaka"
          trend="up"
        />
        <MetricCard
          value="10%"
          label="CAGR Growth"
          description="Year-over-year compound growth"
          trend="up"
        />
        <MetricCard
          value="92%"
          label="Participation Rate"
          description="Highest in Asia-Pacific region"
          trend="neutral"
        />
        <MetricCard
          value="$2.56B"
          label="Online Ed. 2033"
          description="Projected online market size"
          trend="up"
        />
      </div>

      {/* Table of Contents */}
      <div className="brutalist-card p-8">
        <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">
          Report Contents
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: "#market-overview", label: "Market Overview", num: "01" },
            { href: "#customer-segments", label: "Customer Segments", num: "02" },
            { href: "#competitive-landscape", label: "Competitive Landscape", num: "03" },
            { href: "#pricing", label: "Pricing Strategies", num: "04" },
            { href: "#operations", label: "Operations", num: "05" },
            { href: "#online-offline", label: "Online vs Offline", num: "06" },
            { href: "#geography", label: "Geographic Opportunities", num: "07" },
            { href: "#recommendations", label: "Strategic Recommendations", num: "08" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-start gap-3 p-4 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              <span className="text-2xl font-bold opacity-40 group-hover:opacity-100">
                {item.num}
              </span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <CalloutBox type="growth" title="Key Takeaway">
          <p>
            With 92% student participation—the highest in Asia-Pacific—and explosive 
            24.42% CAGR growth in online education post-COVID, new entrants can capture 
            significant market share through differentiated positioning and quality assurance.
          </p>
        </CalloutBox>
      </div>
    </SectionWrapper>
  );
}

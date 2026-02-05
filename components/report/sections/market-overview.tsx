import { SectionWrapper } from "../section-wrapper";
import { CalloutBox } from "../callout-box";
import { MarketGrowthChart } from "../charts/market-growth-chart";
import { MarketStructurePieChart } from "../charts/market-structure-pie-chart";

export function MarketOverview() {
  return (
    <SectionWrapper id="market-overview" bgColor="secondary">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 01
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Market Overview & Structure
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Understanding Dhaka&apos;s ৳1.5 billion tuition market structure, growth 
          trajectory, and key segments driving demand.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Market Growth Chart */}
        <MarketGrowthChart />

        {/* Market Structure Pie Chart */}
        <MarketStructurePieChart />
      </div>

      <div className="prose max-w-none mb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="brutalist-card p-6">
            <h3 className="font-bold text-xl mb-4">Private Tutors (45%)</h3>
            <p className="text-muted-foreground">
              Individual educators providing home-based or online instruction, 
              typically university students or moonlighting teachers.
            </p>
          </div>
          <div className="brutalist-card p-6">
            <h3 className="font-bold text-xl mb-4">Coaching Centers (35%)</h3>
            <p className="text-muted-foreground">
              Physical institutions offering group classes, particularly strong 
              in HSC and university entrance exam preparation.
            </p>
          </div>
          <div className="brutalist-card p-6">
            <h3 className="font-bold text-xl mb-4">Online Platforms (20%)</h3>
            <p className="text-muted-foreground">
              Digital marketplaces and learning platforms experiencing rapid 
              expansion post-COVID pandemic.
            </p>
          </div>
        </div>
      </div>

      <CalloutBox type="insight" title="Online Education Surge">
        <p>
          The online education segment experienced explosive post-COVID growth, 
          expanding from <strong>USD 358.76 million (2024)</strong> to a projected 
          <strong> USD 2,563.42 million by 2033</strong>, representing a remarkable 
          <strong> 24.42% CAGR</strong>.
        </p>
      </CalloutBox>
    </SectionWrapper>
  );
}

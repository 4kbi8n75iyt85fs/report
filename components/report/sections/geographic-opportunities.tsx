import { SectionWrapper } from "../section-wrapper";
import { DhakaGeographicHeatmap } from "../dhaka-geographic-heatmap";
import { CalloutBox } from "../callout-box";

export function GeographicOpportunities() {
  return (
    <SectionWrapper id="geography" bgColor="secondary">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 07
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Geographic Opportunities
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Identifying high-demand zones within Dhaka and underserved demographics 
          representing emerging market opportunities.
        </p>
      </div>

      {/* Interactive Geographic Heat Map */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Dhaka Tutoring Demand Map</h3>
        <DhakaGeographicHeatmap />
      </div>

      {/* Zone Analysis */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Premium Zones */}
        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Premium Market Zones
          </h3>
          <div className="space-y-4">
            {[
              { 
                zone: "Gulshan & Banani", 
                spend: "৳8,000-15,000/mo",
                type: "Top-tier premium",
                note: "English-medium schools, highest affluence" 
              },
              { 
                zone: "Dhanmondi", 
                spend: "৳6,000-12,000/mo",
                type: "Established premium",
                note: "Dense school presence, strong coaching demand" 
              },
              { 
                zone: "Uttara", 
                spend: "৳5,000-10,000/mo",
                type: "Growing premium",
                note: "Middle-to-upper class, rapid expansion" 
              },
              { 
                zone: "Bashundhara", 
                spend: "৳6,000-12,000/mo",
                type: "Emerging premium",
                note: "New residential, high educational aspiration" 
              },
            ].map((item) => (
              <div key={item.zone} className="border-b border-muted pb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-bold">{item.zone}</p>
                  <span className="font-bold text-primary text-sm">{item.spend}</span>
                </div>
                <p className="text-xs font-bold uppercase text-primary/70">{item.type}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value & Accessible Zones */}
        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Value & Accessible Zones
          </h3>
          <div className="space-y-4">
            {[
              { 
                zone: "Dhaka University Area", 
                spend: "৳3,000-7,000/mo",
                type: "Academic hub",
                note: "Student tutors, affordable quality" 
              },
              { 
                zone: "Farmgate", 
                spend: "৳3,000-6,000/mo",
                type: "Central accessible",
                note: "Mixed income, consistent demand" 
              },
              { 
                zone: "Mohammadpur", 
                spend: "৳2,500-5,000/mo",
                type: "Middle-market",
                note: "Large population, underserved quality options" 
              },
              { 
                zone: "Peripheral Areas", 
                spend: "৳1,500-3,500/mo",
                type: "Emerging opportunity",
                note: "High aspirations, affordability-constrained" 
              },
            ].map((item) => (
              <div key={item.zone} className="border-b border-muted pb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-bold">{item.zone}</p>
                  <span className="font-bold text-primary text-sm">{item.spend}</span>
                </div>
                <p className="text-xs font-bold uppercase text-primary/70">{item.type}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Socioeconomic Access Table */}
      <div className="mb-12 overflow-x-auto">
        <h3 className="font-bold text-2xl mb-6">Socioeconomic Accessibility Gaps</h3>
        <table className="brutalist-table w-full min-w-[600px]">
          <thead>
            <tr>
              <th>Income Segment</th>
              <th>Participation</th>
              <th>Avg. Monthly Spend</th>
              <th>Primary Barrier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">High-Income Urban</td>
              <td className="text-green-600 font-bold">95%+</td>
              <td>৳10,000-15,000</td>
              <td>None</td>
            </tr>
            <tr>
              <td className="font-medium">Middle-Income</td>
              <td className="text-yellow-600 font-bold">70-80%</td>
              <td>৳4,000-8,000</td>
              <td>Limited quality options</td>
            </tr>
            <tr>
              <td className="font-medium">Low-Income</td>
              <td className="text-destructive font-bold">35-45%</td>
              <td>৳1,500-3,000</td>
              <td>Affordability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CalloutBox type="growth" title="Underserved Market Opportunity">
        <p>
          Low-income families in peripheral Dhaka areas represent a largely untapped 
          market of <strong>10 million+ students</strong>. While financial constraints 
          limit access, strong educational aspirations persist. Affordable group tutoring 
          models, scholarship programs, and subsidized online platforms could unlock 
          this significant demographic.
        </p>
      </CalloutBox>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "../section-wrapper";
import { CalloutBox } from "../callout-box";
import { StudentDemographicsChart } from "../charts/student-demographics-chart";
import { SubjectDemandChart } from "../charts/subject-demand-chart";

export function CustomerSegments() {
  return (
    <SectionWrapper id="customer-segments">
      <div className="mb-12">
        <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
          Section 02
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Customer Segment Analysis
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Deep dive into student demographics, demand patterns, and key decision 
          factors driving tutor selection in Dhaka.
        </p>
      </div>

      {/* Demographics Chart */}
      <div className="mb-12">
        <StudentDemographicsChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Participation by Level */}
        <div className="brutalist-card p-6">
          <h3 className="font-bold text-xl mb-6 uppercase tracking-wider border-b-2 border-foreground pb-4">
            Participation by Education Level
          </h3>
          <div className="space-y-4">
            {[
              { level: "Primary (Ages 6-10)", rate: "35%", desc: "Foundational subjects" },
              { level: "Secondary (Ages 11-15)", rate: "75%", desc: "Core academic subjects" },
              { level: "Higher Secondary (Ages 16-17)", rate: "85%+", desc: "Intensive HSC exam preparation" },
              { level: "University/Professional", rate: "Growing", desc: "Specialized courses & skills" },
            ].map((item) => (
              <div key={item.level} className="flex justify-between items-start border-b border-muted pb-3">
                <div>
                  <p className="font-bold">{item.level}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <span className="font-bold text-primary text-lg">{item.rate}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Demand Chart */}
        <SubjectDemandChart />
      </div>

      {/* Decision Factors */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6">Key Decision Factors for Parents & Students</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { factor: "Proven Results", pct: "85%", desc: "Track record of grade improvement" },
            { factor: "Qualifications", pct: "78%", desc: "Academic credentials & expertise" },
            { factor: "Convenience", pct: "72%", desc: "Location, scheduling, online option" },
            { factor: "Trust & Verification", pct: "68%", desc: "Platform vetting, peer reviews" },
            { factor: "Personalization", pct: "65%", desc: "Adaptive learning approaches" },
          ].map((item) => (
            <div key={item.factor} className="brutalist-card p-5">
              <p className="text-3xl font-bold text-primary mb-2">{item.pct}</p>
              <p className="font-bold mb-1">{item.factor}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CalloutBox type="info" title="Seasonal Demand Insight">
        <p>
          <strong>Peak Periods:</strong> Pre-HSC exams (Nov-Dec), university admission prep (Mar-May). 
          <strong> Moderate:</strong> Mid-semester (Feb-Apr, Aug-Oct). 
          <strong> Low:</strong> Post-exam breaks (Jan, Jun-Jul).
        </p>
      </CalloutBox>
    </SectionWrapper>
  );
}

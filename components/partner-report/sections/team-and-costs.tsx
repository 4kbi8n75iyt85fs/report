"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/report/section-wrapper";
import { MetricCard } from "@/components/report/metric-card";
import { CalloutBox } from "@/components/report/callout-box";
import { Users, PhoneCall, MapPin, Calculator } from "lucide-react";

const teamRoles = [
    {
        icon: PhoneCall,
        title: "Call Center Rep",
        salary: "৳3,000/month (OR you do it)",
        description: "Contacts WhatsApp leads, collects basic info, schedules home visits. ~12 calls/day, ~1 hour of work. If you can handle this, we save ৳3,000/month.",
    },
    {
        icon: Users,
        title: "Teacher Relation Manager",
        salary: "I handle this",
        description: "I'll manage tutor recruitment, assignments, and paper grading. You help a bit when needed. No hire needed.",
    },
    {
        icon: MapPin,
        title: "Area Manager",
        salary: "৳300-500/student OR ৳3,000 base",
        description: "Visits homes, creates routines, holds parent meetings, collects payments. If commissions don't exceed ৳3,000, we pay base salary instead.",
    },
];

const fixedCosts = [
    { label: "Server (Contabo VPS)", amount: "~৳600 ($5)", monthly: true },
    { label: "FB Ads - Student Leads", amount: "~৳3,600 ($30)", monthly: true },
    { label: "FB Ads - Teacher Recruitment", amount: "~৳1,800 ($15)", monthly: true },
    { label: "Other Operational Costs", amount: "~৳1,000-2,000", monthly: true },
];

export function TeamAndCosts() {
    const [studentCount, setStudentCount] = useState(15);
    const [friendDoesCalls, setFriendDoesCalls] = useState(false);

    const revenuePerStudent = 2000;
    const areaManagerPerStudent = 400; // avg of 300-500
    const totalRevenue = studentCount * revenuePerStudent;

    // Area manager gets base of 3k or commission, whichever is higher
    const areaManagerCommission = studentCount * areaManagerPerStudent;
    const areaManagerCost = Math.max(areaManagerCommission, 3000);

    // Call center cost depends on if friend does it
    const callCenterCost = friendDoesCalls ? 0 : 3000;

    // Fixed infrastructure costs (in BDT)
    const serverCost = 600;
    const adsCost = 5400; // 30+15 = 45 USD = ~5400 BDT
    const otherCosts = 1500; // 1-2k average

    const totalFixedCosts = callCenterCost + serverCost + adsCost + otherCosts;
    const totalMonthlyCost = totalFixedCosts + areaManagerCost;
    const profit = totalRevenue - totalMonthlyCost;

    return (
        <SectionWrapper id="team-costs">
            <div className="mb-12">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    Team & Costs
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    Who We Need & What It Costs
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    A lean operation. I handle the tech and teacher management. You handle execution.
                </p>
            </div>

            {/* Team Roles */}
            <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">The Team</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {teamRoles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <div key={index} className="brutalist-card p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{role.title}</h4>
                                        <p className="text-sm text-primary font-medium">{role.salary}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">{role.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Fixed Costs */}
            <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Monthly Fixed Costs</h3>
                <div className="brutalist-card overflow-hidden">
                    <table className="brutalist-table w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Item</th>
                                <th className="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={friendDoesCalls ? "line-through opacity-50" : ""}>
                                <td>Call Center Rep {friendDoesCalls && "(You do this)"}</td>
                                <td className="text-right font-mono">{friendDoesCalls ? "৳0" : "৳3,000"}</td>
                            </tr>
                            <tr className="line-through opacity-50">
                                <td>Teacher Relation Manager (I handle this)</td>
                                <td className="text-right font-mono">৳0</td>
                            </tr>
                            <tr>
                                <td>Area Manager (base salary)</td>
                                <td className="text-right font-mono">৳3,000</td>
                            </tr>
                            {fixedCosts.map((cost, index) => (
                                <tr key={index}>
                                    <td>{cost.label}</td>
                                    <td className="text-right font-mono">{cost.amount}</td>
                                </tr>
                            ))}
                            <tr className="bg-primary/5 font-bold">
                                <td>Total Monthly Costs</td>
                                <td className="text-right font-mono">
                                    {friendDoesCalls ? "~৳10,000-11,000" : "~৳13,000-14,000"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Calculator */}
            <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    Profit Calculator
                </h3>
                <div className="brutalist-card p-8">
                    {/* Toggle for friend doing calls */}
                    <div className="mb-8 p-4 bg-muted border-2 border-foreground">
                        <label className="flex items-center gap-4 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={friendDoesCalls}
                                onChange={(e) => setFriendDoesCalls(e.target.checked)}
                                className="w-6 h-6 accent-primary cursor-pointer"
                            />
                            <span className="font-bold">
                                I can handle the calls myself (~1 hr/day)
                            </span>
                        </label>
                        <p className="text-sm text-muted-foreground mt-2 ml-10">
                            Toggle this to see how costs change if you do the ~12 calls/day
                        </p>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="studentSlider" className="block text-lg font-bold mb-4">
                            Number of Students: <span className="text-primary text-2xl">{studentCount}</span>
                        </label>
                        <input
                            id="studentSlider"
                            type="range"
                            min="1"
                            max="50"
                            value={studentCount}
                            onChange={(e) => setStudentCount(parseInt(e.target.value))}
                            className="w-full h-3 bg-muted rounded-none appearance-none cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(studentCount / 50) * 100}%, var(--muted) ${(studentCount / 50) * 100}%, var(--muted) 100%)`
                            }}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-2">
                            <span>1 student</span>
                            <span>50 students</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                            value={`৳${totalRevenue.toLocaleString()}`}
                            label="Monthly Revenue"
                            description={`৳2,000 × ${studentCount} students`}
                        />
                        <MetricCard
                            value={`৳${areaManagerCost.toLocaleString()}`}
                            label="Area Manager Cost"
                            description={areaManagerCommission >= 3000 ? `৳400 × ${studentCount}` : "Base salary ৳3,000"}
                        />
                        <MetricCard
                            value={`৳${totalMonthlyCost.toLocaleString()}`}
                            label="Total Costs"
                            description={friendDoesCalls ? "You do calls" : "Hiring call rep"}
                        />
                        <MetricCard
                            value={`৳${profit.toLocaleString()}`}
                            label="Net Profit"
                            description={profit > 0 ? "Monthly profit" : "Monthly loss"}
                            trend={profit > 0 ? "up" : "down"}
                        />
                    </div>

                    <div className="mt-6 text-center text-muted-foreground">
                        <p>
                            <strong>Break-even point:</strong> {friendDoesCalls ? "~6 students" : "~7 students"}
                        </p>
                    </div>
                </div>
            </div>

            <CalloutBox type="warning" title="Important Note">
                <p>
                    <strong>Marketing and sales have been validated</strong> (40+ leads, 10+ sales).
                    <strong> Operations have NOT been validated yet.</strong> If we can&apos;t provide quality teachers,
                    or parents don&apos;t like our teaching, or any operational complexity arises — the model becomes
                    vulnerable. That&apos;s what we need to build and test now.
                </p>
            </CalloutBox>
        </SectionWrapper>
    );
}

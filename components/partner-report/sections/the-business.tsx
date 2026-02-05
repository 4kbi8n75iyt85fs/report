import { SectionWrapper } from "@/components/report/section-wrapper";
import { MetricCard } from "@/components/report/metric-card";
import { CalloutBox } from "@/components/report/callout-box";
import { Shield, Clock, BookOpen, GraduationCap, XCircle, CheckCircle2 } from "lucide-react";

export function TheBusiness() {
    return (
        <SectionWrapper id="the-business">
            <div className="mb-12">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    The Business
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    Not Just Another Tuition Media
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Traditional tuition media just connects parents and tutors, takes a one-time commission,
                    and disappears. We do it completely different.
                </p>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Traditional vs Our Model</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Traditional Model */}
                    <div className="brutalist-card p-6 bg-red-50">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <XCircle className="w-6 h-6 text-red-600" />
                            Traditional Tuition Media
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold">✕</span>
                                <span>Just matches parent with random tutor</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold">✕</span>
                                <span>Takes 60% one-time commission, then vanishes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold">✕</span>
                                <span>No quality control after matching</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold">✕</span>
                                <span>Tutor can skip classes, no accountability</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold">✕</span>
                                <span>Parent-tutor can easily cut out middleman</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Model */}
                    <div className="brutalist-card p-6 bg-green-50">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                            Our Model (Magic Mentors)
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Our trained tutors</strong> — we train and pay them</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Monthly recurring revenue</strong> — parents pay us, we pay tutors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Full content & curriculum</strong> — we provide what to teach</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Replacement guarantee</strong> — tutor absent? We send another</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <span><strong>Can&apos;t cut us out</strong> — tutor needs our content & payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Pricing Plans */}
            <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Simple Pricing Plans</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                    <MetricCard
                        value="৳6,000"
                        label="4 Days/Week"
                        description="Most popular balanced option"
                        trend="up"
                    />
                    <MetricCard
                        value="৳7,000"
                        label="5 Days/Week"
                        description="For students needing more days"
                        trend="neutral"
                    />
                    <MetricCard
                        value="৳8,000"
                        label="6 Days/Week"
                        description="Intensive full coverage"
                        trend="neutral"
                    />
                </div>
                <p className="mt-4 text-muted-foreground text-center">
                    <strong>From each plan:</strong> ৳2,000 is our fixed revenue, rest goes to teacher
                </p>
            </div>

            {/* Value Props Grid */}
            <div className="mb-12">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Why Parents & Teachers Stay</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="brutalist-card p-6">
                        <Shield className="w-10 h-10 text-primary mb-4" />
                        <h4 className="font-bold mb-2">Parents Get Peace of Mind</h4>
                        <p className="text-sm text-muted-foreground">
                            Teacher absent? We send replacement. No gaps in education.
                        </p>
                    </div>
                    <div className="brutalist-card p-6">
                        <Clock className="w-10 h-10 text-primary mb-4" />
                        <h4 className="font-bold mb-2">Teachers Get Paid On Time</h4>
                        <p className="text-sm text-muted-foreground">
                            Even if parent delays, we pay tutors on schedule. No chasing payments.
                        </p>
                    </div>
                    <div className="brutalist-card p-6">
                        <BookOpen className="w-10 h-10 text-primary mb-4" />
                        <h4 className="font-bold mb-2">Content Provided</h4>
                        <p className="text-sm text-muted-foreground">
                            Tutors get daily content, test papers, everything. Just teach.
                        </p>
                    </div>
                    <div className="brutalist-card p-6">
                        <GraduationCap className="w-10 h-10 text-primary mb-4" />
                        <h4 className="font-bold mb-2">Results Tracked</h4>
                        <p className="text-sm text-muted-foreground">
                            We grade exams, track progress. Parents see real improvement.
                        </p>
                    </div>
                </div>
            </div>

            <CalloutBox type="growth" title="The Lock-In">
                <p>
                    <strong>Neither parents nor teachers can cut us out.</strong> Teachers need our content,
                    training, and guaranteed payments. Parents need our quality assurance and replacement
                    guarantee. This is what makes our position as middleman irreplaceable.
                </p>
            </CalloutBox>
        </SectionWrapper>
    );
}

import { SectionWrapper } from "@/components/report/section-wrapper";
import { CalloutBox } from "@/components/report/callout-box";
import {
    CheckCircle2,
    XCircle,
    Zap,
    Brain,
    Eye,
    MessageSquare
} from "lucide-react";

export function YourRole() {
    return (
        <SectionWrapper id="your-role" bgColor="accent">
            <div className="mb-12">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    Your Role
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    What You Actually Do
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    You&apos;re not building the tech. You&apos;re not creating content. You&apos;re the
                    <strong> executive engine</strong> that keeps things moving fast.
                </p>
            </div>

            {/* What You Do */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* YES Column */}
                <div className="brutalist-card p-8 bg-green-50">
                    <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        What You DO
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-200 flex-shrink-0">
                                <Zap className="w-5 h-5 text-green-700" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Fund Initial Costs</h4>
                                <p className="text-sm text-muted-foreground">
                                    Cover employee salaries, ads, server until we&apos;re profitable (~1-3 months).
                                    Not a huge investment — maybe ৳15-20k/month max.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-200 flex-shrink-0">
                                <Eye className="w-5 h-5 text-green-700" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Manage Daily Operations</h4>
                                <p className="text-sm text-muted-foreground">
                                    Check that employees are doing their jobs. Call center calling? Area manager visiting?
                                    Teacher manager assigning tutors? Keep them accountable.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-200 flex-shrink-0">
                                <Brain className="w-5 h-5 text-green-700" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Quick Decision Making</h4>
                                <p className="text-sm text-muted-foreground">
                                    When issues pop up (and they will), you decide fast. Tutor not showing up?
                                    Parent complaining? You handle it immediately, not in a week.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-200 flex-shrink-0">
                                <MessageSquare className="w-5 h-5 text-green-700" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Track Progress</h4>
                                <p className="text-sm text-muted-foreground">
                                    How many leads today? How many calls made? How many students enrolled?
                                    Keep the numbers flowing so we know what&apos;s working.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NO Column */}
                <div className="brutalist-card p-8 bg-muted">
                    <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                        <XCircle className="w-6 h-6 text-gray-500" />
                        What You DON&apos;T Do
                    </h3>
                    <div className="space-y-6">
                        <div className="p-4 border-2 border-gray-300 bg-white">
                            <h4 className="font-bold mb-1 text-muted-foreground">❌ App Development</h4>
                            <p className="text-sm text-muted-foreground">
                                I build and maintain the tutor portal app. All the tech stuff is on me.
                            </p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 bg-white">
                            <h4 className="font-bold mb-1 text-muted-foreground">❌ Content Creation</h4>
                            <p className="text-sm text-muted-foreground">
                                Teaching materials, test papers, curriculum — I handle all that.
                            </p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 bg-white">
                            <h4 className="font-bold mb-1 text-muted-foreground">❌ Initial Setup</h4>
                            <p className="text-sm text-muted-foreground">
                                I set up the systems, train the first employees, create the processes.
                                You step into a working operation.
                            </p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 bg-white">
                            <h4 className="font-bold mb-1 text-muted-foreground">❌ Marketing Strategy</h4>
                            <p className="text-sm text-muted-foreground">
                                FB ads are already working. You just ensure leads get followed up.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why You */}
            <CalloutBox type="insight" title="Why You?">
                <p className="mb-4">
                    <strong>I&apos;m slow at execution.</strong> Problems that would take you a day to solve
                    take me weeks. Every roadblock delays me by months. I&apos;m good at building systems,
                    but terrible at running them day-to-day.
                </p>
                <p>
                    <strong>You&apos;re fast.</strong> You make decisions quickly. You don&apos;t overthink.
                    You just get things done. That&apos;s exactly what this business needs to scale.
                </p>
            </CalloutBox>
        </SectionWrapper>
    );
}

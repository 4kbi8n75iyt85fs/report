import { SectionWrapper } from "@/components/report/section-wrapper";
import { CalloutBox } from "@/components/report/callout-box";
import { MessageCircle, Phone } from "lucide-react";

export function NextSteps() {
    return (
        <SectionWrapper id="next-steps" bgColor="secondary">
            <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    Next Steps
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    One Question
                </h2>

                {/* Main Question Block */}
                <div className="brutalist-card p-8 text-left mb-8 bg-yellow-50">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <Phone className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl">Can You Handle the Calls?</h3>
                    </div>

                    <div className="space-y-4">
                        <p className="text-lg">
                            <strong>It&apos;s simple:</strong> Call leads, greet them, collect basic student details,
                            and tell them a representative will visit their home tomorrow for evaluation.
                        </p>

                        <div className="p-4 bg-white border-2 border-foreground">
                            <p className="font-bold mb-2">What each call looks like:</p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">1.</span>
                                    Greet the parent
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">2.</span>
                                    Ask: student name, class, subjects needed, location
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">3.</span>
                                    Schedule: &quot;Our area manager will visit tomorrow at [time]&quot;
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">4.</span>
                                    Done. ~3-5 minutes per call.
                                </li>
                            </ul>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-100 border-2 border-foreground">
                                <p className="font-bold text-green-800">If you can do it:</p>
                                <p className="text-2xl font-bold text-green-600">Save ৳3,000/month</p>
                                <p className="text-sm text-muted-foreground">~12 calls/day, ~1 hour max</p>
                            </div>
                            <div className="p-4 bg-muted border-2 border-foreground">
                                <p className="font-bold">If you can&apos;t:</p>
                                <p className="text-2xl font-bold">We hire someone</p>
                                <p className="text-sm text-muted-foreground">৳3,000/month for a call rep</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Let's Talk Block */}
                <div className="brutalist-card p-8 text-left mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl">Questions?</h3>
                    </div>
                    <p className="text-muted-foreground">
                        If anything in this report is unclear, ask me. I&apos;ll explain in detail.
                        Once you&apos;re ready, we&apos;ll talk and go from there.
                    </p>
                </div>

                <CalloutBox type="growth" title="Let&apos;s Build This Together">
                    <p className="text-center">
                        I&apos;ve been working on this for years. Now it&apos;s finally ready.
                        With your execution speed, we can scale this fast.
                    </p>
                </CalloutBox>
            </div>
        </SectionWrapper>
    );
}

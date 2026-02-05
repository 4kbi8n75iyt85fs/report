import { SectionWrapper } from "@/components/report/section-wrapper";
import { CalloutBox } from "@/components/report/callout-box";
import { Wallet, Clock, TrendingUp, Handshake } from "lucide-react";

export function PartnershipTerms() {
    return (
        <SectionWrapper id="partnership-terms">
            <div className="mb-12">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    Partnership Terms
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    The Deal
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Clear terms. No hidden catches. Here&apos;s exactly how this partnership works.
                </p>
            </div>

            {/* Terms Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="brutalist-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <Wallet className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Your Investment</h3>
                            <p className="text-muted-foreground">Funding responsibility</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p>
                            <strong>You fund all operational costs</strong> until we become significantly profitable.
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                Area Manager base salary: ৳3k/month
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                Call Rep (if we hire): ৳3k/month <span className="text-green-600">(or ৳0 if you do it)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                Server & ads: ~৳6k/month
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                Other costs: ~৳1-2k/month
                            </li>
                        </ul>
                        <div className="p-3 bg-muted border-l-4 border-primary">
                            <p className="text-sm">
                                <strong>If you do calls:</strong> ~৳10-11k/month<br />
                                <strong>If we hire call rep:</strong> ~৳13-14k/month
                            </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            For 1-3 months until significantly profitable.
                        </p>
                    </div>
                </div>

                <div className="brutalist-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <Clock className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Timeline</h3>
                            <p className="text-muted-foreground">Path to profitability</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted flex items-center justify-center font-bold text-lg">1</div>
                            <div>
                                <p className="font-medium">Month 1</p>
                                <p className="text-sm text-muted-foreground">Enroll students. No revenue yet (pay after first month of teaching).</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted flex items-center justify-center font-bold text-lg">2</div>
                            <div>
                                <p className="font-medium">Month 2</p>
                                <p className="text-sm text-muted-foreground">First payments come in. Some revenue, may not cover all costs yet.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                            <div>
                                <p className="font-medium">Month 3+</p>
                                <p className="text-sm text-muted-foreground">Should reach break-even or profit with 15-20+ students.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="brutalist-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">&quot;Significantly Profitable&quot;</h3>
                            <p className="text-muted-foreground">When you stop funding</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p>
                            You don&apos;t stop funding the moment we make ৳1 profit. We need <strong>healthy margins</strong>.
                        </p>
                        <div className="p-4 bg-muted border-2 border-foreground">
                            <p className="font-bold mb-2">Example:</p>
                            <p className="text-sm">
                                If costs are ৳15,000 and profit is ৳15,000 — you still fund.<br />
                                If costs are ৳15,000 and profit is ৳40,000 — now the business funds itself.
                            </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            The goal is to have enough profit buffer that the company can handle
                            its own expenses comfortably.
                        </p>
                    </div>
                </div>

                <div className="brutalist-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <Handshake className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Revenue Split</h3>
                            <p className="text-muted-foreground">How we share profits</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-bold text-center py-6">
                            To be discussed
                        </p>
                        <p className="text-sm text-muted-foreground text-center">
                            We&apos;ll figure out what&apos;s fair for both of us in our meeting.
                        </p>
                    </div>
                </div>
            </div>

            <CalloutBox type="warning" title="What You&apos;re Walking Into">
                <p>
                    <strong>This is NOT a 100% foolproof business.</strong> Marketing and sales have been validated
                    (40+ leads, 10+ sales). However, <strong>operations have NOT been validated yet.</strong>
                    If we can&apos;t provide quality teachers, or parents don&apos;t like our teaching method, or any
                    operational complexity arises — the model becomes vulnerable and will need to be fixed.
                    That&apos;s the work we&apos;re doing now.
                </p>
            </CalloutBox>
        </SectionWrapper>
    );
}

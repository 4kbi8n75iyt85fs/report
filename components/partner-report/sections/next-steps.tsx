import { SectionWrapper } from "@/components/report/section-wrapper";
import { CalloutBox } from "@/components/report/callout-box";
import { MessageCircle } from "lucide-react";

export function NextSteps() {
    return (
        <SectionWrapper id="next-steps" bgColor="secondary">
            <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    Next Steps
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    Let&apos;s Talk
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    If you&apos;ve read through this and you&apos;re interested, let&apos;s discuss.
                </p>

                <div className="brutalist-card p-8 text-left mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary text-primary-foreground">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl">Questions?</h3>
                    </div>
                    <p className="text-muted-foreground">
                        If anything in this report is unclear, ask me. I&apos;ll explain in detail.
                        Once you&apos;re ready, we&apos;ll schedule a call and go from there.
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

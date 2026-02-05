import {
    HeroSection,
    Navigation,
    TheBusiness,
    HowItWorks,
    TeamAndCosts,
    YourRole,
    PartnershipTerms,
    NextSteps
} from "@/components/partner-report";

export default function PartnerReportPage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <Navigation />
            <TheBusiness />
            <HowItWorks />
            <TeamAndCosts />
            <YourRole />
            <PartnershipTerms />
            <NextSteps />
        </main>
    );
}

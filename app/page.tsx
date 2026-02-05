import { Navigation } from "@/components/report/navigation";
import { HeroSection } from "@/components/report/hero-section";
import { ExecutiveSummary } from "@/components/report/sections/executive-summary";
import { MarketOverview } from "@/components/report/sections/market-overview";
import { CustomerSegments } from "@/components/report/sections/customer-segments";
import { CompetitiveLandscape } from "@/components/report/sections/competitive-landscape";
import { PricingStrategies } from "@/components/report/sections/pricing-strategies";
import { Operations } from "@/components/report/sections/operations";
import { OnlineOffline } from "@/components/report/sections/online-offline";
import { GeographicOpportunities } from "@/components/report/sections/geographic-opportunities";
import { StrategicRecommendations } from "@/components/report/sections/strategic-recommendations";
import { Footer } from "@/components/report/footer";

export default function DhakaTuitionMarketReport() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Navigation />
      <ExecutiveSummary />
      <MarketOverview />
      <CustomerSegments />
      <CompetitiveLandscape />
      <PricingStrategies />
      <Operations />
      <OnlineOffline />
      <GeographicOpportunities />
      <StrategicRecommendations />
      <Footer />
    </main>
  );
}

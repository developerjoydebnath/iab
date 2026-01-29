import { AboutSection } from './AboutSection';
import { CandidatesSection } from './CandidatesSection';
import { CountdownSection } from './CountdownSection';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { StatsSection } from './StatsSection';
import { SupporterFormSection } from './SupporterFormSection';
import { WhyVoteSection } from './WhyVoteSection';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CountdownSection />
      <SupporterFormSection />
      <StatsSection />
      <AboutSection />
      {/* <ActivitiesSection /> */}
      <WhyVoteSection />
      <CandidatesSection />
      <Footer />
    </div>
  );
}

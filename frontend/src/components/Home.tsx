import { CountdownSection } from './CountdownSection';
import { Footer } from './Footer';
import InternationalVolunteers from './GlobalOutreach';
import { HeroSection } from './HeroSection';
import { OurRequestSection } from './OurRequest';
import VolunteerCount from './VolunteerCount';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <VolunteerCount />
      <CountdownSection />
      <OurRequestSection />
      <InternationalVolunteers />
      <Footer />
    </div>
  );
}

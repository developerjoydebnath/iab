import { CountdownSection } from './CountdownSection';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { OurRequestSection } from './OurRequest';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CountdownSection />
      <OurRequestSection />
      <Footer />
    </div>
  );
}

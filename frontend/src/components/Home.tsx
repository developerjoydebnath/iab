import { CountdownSection } from './CountdownSection';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CountdownSection />
      <Footer />
    </div>
  );
}

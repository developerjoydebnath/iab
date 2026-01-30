import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <AboutSection />
      <Footer />
    </div>
  );
}

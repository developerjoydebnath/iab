import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';
import { StatsSection } from '../components/StatsSection';
import { SupporterFormSection } from '../components/SupporterFormSection';

export function SupporterRegistration() {
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <SupporterFormSection />
      <StatsSection />
      <Footer />
    </div>
  );
}

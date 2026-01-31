import { CandidatesSection } from '../components/CandidatesSection';
import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';

export function Candidates() {
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <CandidatesSection />
      <Footer />
    </div>
  );
}

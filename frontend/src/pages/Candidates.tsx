import { CandidatesSection } from '../components/CandidatesSection';
import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';

export function Candidates() {
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <CandidatesSection />
      <div className="max-w-7xl mx-auto my-8 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">প্রার্থীদের তালিকা (PDF)</h2>
        <div className="w-full border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/pdf/candidates.pdf"
            title="Candidates PDF"
            className="w-full h-screen min-h-[600px]"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

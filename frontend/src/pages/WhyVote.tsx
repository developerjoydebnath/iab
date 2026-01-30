import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';
import { WhyVoteSection } from '../components/WhyVoteSection';

export function WhyVote() {
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <WhyVoteSection />
      <Footer />
    </div>
  );
}

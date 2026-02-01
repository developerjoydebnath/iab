import Contact from '../components/Contact';
import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <Contact />
      <Footer />
    </div>
  );
}

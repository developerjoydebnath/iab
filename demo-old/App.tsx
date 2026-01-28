
import React, { useEffect, useState } from 'react';
import CampaignStats from './components/CampaignStats';
import CandidateIntro from './components/CandidateIntro';
import ChatWidget from './components/ChatWidget';
import ComplaintForm from './components/ComplaintForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import Vision from './components/Vision';
import VoterCheck from './components/VoterCheck';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-islamic-gold selection:text-white">

      <Navbar />

      <main>
        <Hero />
        <CampaignStats />
        <CandidateIntro />
        <Vision />
        <News />
        <ComplaintForm />
        <VoterCheck />
        <CTA />
      </main>

      <Footer />
      <ChatWidget />

    </div>
  );
};

export default App;

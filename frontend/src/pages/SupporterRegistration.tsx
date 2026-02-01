import { useState } from 'react';
import { Footer } from '../components/Footer';
import { PageNavbar } from '../components/PageNavbar';
import { StatsSection } from '../components/StatsSection';
import { SupporterFormSection } from '../components/SupporterFormSection';

export function SupporterRegistration() {
  const [refetch, setRefetch] = useState<number>(1);
  return (
    <div className="min-h-screen bg-white">
      <PageNavbar />
      <SupporterFormSection isEmbedded={false} setRefetch={setRefetch} refetch={refetch} isVolunteerRegistration={true} />
      <StatsSection refetch={refetch} />
      <Footer />
    </div>
  );
}

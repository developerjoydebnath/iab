import { Activity, Users } from 'lucide-react';
import useSWR from 'swr';
import { Skeleton } from '../../components/ui/skeleton';
import api from '../../lib/axios';
import { useAuthStore } from '../../store/authStore';

const fetcher = (url: string) => api.get(url).then(res => res.data);

export function VolunteerDashboard() {
  const { token } = useAuthStore();

  const { data: stats, isLoading } = useSWR(
    token ? '/admin/stats' : null,
    fetcher
  );

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4`}>
      <div className={`bg-${color}-100 p-4 rounded-full text-${color}-600`}>
        <Icon size={32} />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">স্বেচ্ছাসেবক ড্যাশবোর্ড</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {isLoading ? (
          <>
            <Skeleton className="h-32 w-full rounded-xl" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </>
        ) : (
          <>
            <StatCard title="আজকের নিবন্ধিত ভোটার" value={stats?.today_users} icon={Activity} color="emerald" />
            <StatCard title="মোট নিবন্ধিত ভোটার" value={stats?.total_users} icon={Users} color="blue" />
          </>
        )}
      </div>
    </div>
  );
}

import { Activity, BarChart3, Calendar, Users } from 'lucide-react';
import useSWR from 'swr';
import { Skeleton } from '../../components/ui/skeleton';
import api from '../../lib/axios';
import { useAuthStore } from '../../store/authStore';

const fetcher = (url: string) => api.get(url).then(res => res.data);

export function AdminDashboard() {
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

  const SkeletonCard = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">ড্যাশবোর্ড ওভারভিউ</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            <StatCard title="আজকের যুক্ত" value={stats?.today_users} icon={Activity} color="emerald" />
            <StatCard title="এই সপ্তাহের যুক্ত" value={stats?.this_week_users} icon={Calendar} color="blue" />
            <StatCard title="এই মাসের যুক্ত" value={stats?.this_month_users} icon={BarChart3} color="gray" />
            <StatCard title="মোট সর্মথক" value={stats?.total_users} icon={Users} color="amber" />
          </>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4">বিভাগ অনুযায়ী পরিসংখ্যান</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {isLoading ? (
          Array(8).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))
        ) : (
          stats?.division_stats.map((div: any) => (
            <div key={div.division_name} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">{div.division_name}</span>
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold text-sm">
                  {div.count}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

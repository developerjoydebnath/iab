import { Heart, MapPin, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StatsSection() {
  const [supporters, setSupporters] = useState(0);
  const targetSupporters = 947589; // Mock data

  useEffect(() => {
    // Animated counter
    let start = 0;
    const duration = 2000;
    const increment = targetSupporters / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetSupporters) {
        setSupporters(targetSupporters);
        clearInterval(timer);
      } else {
        setSupporters(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: supporters.toLocaleString('bn-BD'),
      label: 'নিবন্ধিত সমর্থক',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: MapPin,
      value: '৩০০',
      label: 'আসনে প্রার্থী',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Heart,
      value: '৬৪',
      label: 'জেলায় কার্যক্রম',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50'
    },
    {
      icon: TrendingUp,
      value: '৯২%',
      label: 'জনসমর্থন বৃদ্ধি',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    }
  ];

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            আমাদের অগ্রগতি
          </h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            জনগণের ভালোবাসা ও সমর্থনেই আমরা এগিয়ে চলেছি
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-300`}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
                <stat.icon className="text-white size-6 sm:size-8" />
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-2">
                {stat.value}
              </div>

              <div className="text-emerald-700 font-semibold text-base sm:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full">
            <div className="flex items-center gap-2">
              <div className="min-w-3 min-h-3 h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-semibold text-left">লাইভ আপডেট</span>
            </div>
            <span className="text-emerald-600 text-left">|</span>
            <span className='text-left'>প্রতিদিন নতুন সমর্থক যুক্ত হচ্ছে</span>
          </div>
        </div>
      </div>
    </div>
  );
}

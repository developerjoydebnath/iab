
import React, { useEffect, useState } from 'react';

const CampaignStats: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, mins: 0, secs: 0 });
  const goalProgress = 85;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, secs: 59, mins: prev.mins - 1 };
        return { ...prev, secs: 59, mins: 59, days: Math.max(0, prev.days - 1) };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          <div className="bg-deep-green text-white px-6 py-8 sm:px-12 sm:py-12 rounded-3xl sm:rounded-[60px] shadow-2xl relative overflow-hidden islamic-pattern">
            <div className="absolute top-0 right-0 w-64 h-64 bg-islamic-gold rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
            <h3 className="text-xl sm:text-3xl font-black mb-10 flex items-center gap-4 font-serif-bn">
              <span className="p-2 sm:p-3 bg-white/10 rounded-2xl">
                <i className="fa-solid fa-kaaba text-islamic-gold"></i>
              </span>
              বিজয়ের দিন আর মাত্র...
            </h3>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
              {[
                { label: 'দিন', val: timeLeft.days },
                { label: 'ঘণ্টা', val: timeLeft.hours },
                { label: 'মিনিট', val: timeLeft.mins },
                { label: 'সেকেন্ড', val: timeLeft.secs }
              ].map((item, i) => (
                <div key={i} className="bg-black/20 backdrop-blur-xl px-2 py-2 sm:py-4 sm:px-4 md:px-6 md:py-6 rounded-lg sm:rounded-2xl md:rounded-[32px] border border-white/10 shadow-inner transition-colors">
                  <p className="text-3xl md:text-5xl font-black mb-1">{item.val.toString().padStart(2, '0')}</p>
                  <p className="text-xs md:text-sm font-black uppercase tracking-wider text-emerald-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-islamic-gold font-black tracking-wider uppercase text-sm font-serif-bn">আমাদের ইমানী সংকল্প</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight font-serif-bn">শোষণমুক্ত বাংলাদেশ গড়ার পথে</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end mb-2">
                <p className="text-base sm:text-lg font-bold text-gray-700">স্বেচ্ছাসেবক লক্ষ্যমাত্রা: <span className="text-bd-green">৫ মিলিয়ন</span></p>
                <span className="text-islamic-gold font-black text-2xl sm:text-3xl">{goalProgress}%</span>
              </div>
              <div className="h-4 sm:h-6 bg-gray-100 rounded-full p-1 sm:p-1.5 shadow-inner">
                <div
                  className="h-full bg-islamic-gold rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${goalProgress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-black text-bd-green font-serif-bn">৪.২৫ মিলিয়ন মোজাহিদ নিবন্ধিত</p>
            </div>

            <p className="text-gray-500 sm:text-lg leading-relaxed font-medium">
              শান্তি ও ইনসাফ কায়েমের এই পথচলায় আমাদের কোনো বিত্তশালী দাতা নেই, আমাদের শক্তি আপনি ও আপনার দোয়া। হাতপাখা প্রতীকের ছায়াতলে সমবেত হোন।
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl shadow-sm border border-gray-100 font-black text-bd-green">
                <i className="fa-solid fa-flag text-islamic-gold text-xl"></i> ৬৪ জেলায় শাখা
              </div>
              <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl shadow-sm border border-gray-100 font-black text-bd-green">
                <i className="fa-solid fa-moon text-islamic-gold text-xl"></i> ইনসাফ ভিত্তিক নীতি
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignStats;

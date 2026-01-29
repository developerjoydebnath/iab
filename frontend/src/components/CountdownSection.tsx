import { Calendar, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CountdownSection() {
  const electionDate = new Date('2026-02-12T08:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = electionDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [electionDate]);

  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
            <Calendar size={18} />
            <span className="font-semibold">নির্বাচনের দিন</span>
          </div>
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            আর মাত্র কিছুদিন বাকি
          </h2>
          <p className="text-xl text-emerald-700">
            ১৫ মার্চ, ২০২৬ - সকাল ৮:০০ টা থেকে ভোটগ্রহণ শুরু
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all transform hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-bold text-emerald-700 mb-2 text-center">
              {timeLeft.days}
            </div>
            <div className="text-emerald-600 text-center font-semibold">দিন</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all transform hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-bold text-emerald-700 mb-2 text-center">
              {timeLeft.hours}
            </div>
            <div className="text-emerald-600 text-center font-semibold">ঘণ্টা</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all transform hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-bold text-emerald-700 mb-2 text-center">
              {timeLeft.minutes}
            </div>
            <div className="text-emerald-600 text-center font-semibold">মিনিট</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all transform hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-bold text-center text-emerald-700 mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-emerald-600 text-center font-semibold">সেকেন্ড</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex w-fit sm:flex-row flex-col mx-auto items-center gap-3 bg-amber-100 text-amber-900 px-6 py-4 rounded-xl">
            <Clock className="text-amber-700" size={24} />
            <span className="font-semibold text-lg">
              প্রস্তুত থাকুন - আপনার ভোট আপনার ভবিষ্যৎ নির্ধারণ করবে
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

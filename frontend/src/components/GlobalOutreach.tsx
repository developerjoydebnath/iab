import { Globe, Heart, MessageCircle, Users } from 'lucide-react';
import GoogleLogin from './GoogleLoginButton';

const InternationalVolunteers = () => {
  const locations = [
    { city: "নিউইয়র্ক", country: "যুক্তরাষ্ট্র", flag: "🇺🇸", volunteers: "৫০০+" },
    { city: "লন্ডন", country: "যুক্তরাজ্য", flag: "🇬🇧", volunteers: "৩২০+" },
    { city: "দুবাই", country: "সংযুক্ত আরব আমিরাত", flag: "🇦🇪", volunteers: "২৮০+" },
    { city: "সিডনি", country: "অস্ট্রেলিয়া", flag: "🇦🇺", volunteers: "১৯০+" },
    { city: "টরেন্টো", country: "কানাডা", flag: "🇨🇦", volunteers: "২২০+" },
    { city: "ঢাকা", country: "বাংলাদেশ", flag: "🇧🇩", volunteers: "১০,০০০+" },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 mb-6 text-sm font-semibold tracking-wide">
            <Globe size={18} />
            আন্তর্জাতিক সমর্থন
          </div>

          <h1 className="font-bn font-bold text-4xl md:text-5xl lg:text-6xl text-emerald-900 leading-tight mb-6">
            বিশ্বের যেকোনো প্রান্ত থেকে
            <span className="block text-emerald-700 mt-2">
              আমাদের সাথে যুক্ত হোন
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            আপনি যেখানেই থাকুন না কেন, দেশের উন্নয়নে আপনার ভূমিকা গুরুত্বপূর্ণ।
            ডিজিটাল মাধ্যমে দূরত্ব আর কোনো বাধা নয়।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}
          <div className="space-y-10">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-green-600 p-10 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Users size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">আন্তর্জাতিক স্বেচ্ছাসেবক</h2>
                  <p className="text-emerald-100 text-sm">
                    বিশ্বজুড়ে বাংলার শক্তিশালী নেটওয়ার্ক
                  </p>
                </div>
              </div>

              <p className="text-emerald-50 leading-relaxed mb-6">
                সামাজিক যোগাযোগ, ডিজিটাল ক্যাম্পেইন এবং সচেতনতার মাধ্যমে
                আপনি দেশের উন্নয়নে সরাসরি অবদান রাখতে পারেন।
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MessageCircle size={18} />
                  <span>ডিজিটাল ক্যাম্পেইন ও অনলাইন সচেতনতা</span>
                </div>
                <div className="flex gap-3">
                  <Heart size={18} />
                  <span>পরিচিতদের অনুপ্রাণিত করা ও সংযুক্ত রাখা</span>
                </div>
              </div>
            </div>

            {/* How to help */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-8">
                আপনি যেভাবে সাহায্য করতে পারেন
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  ["🌐", "সামাজিক মাধ্যম", "অনলাইন প্রচার ও শেয়ারিং"],
                  ["💬", "যোগাযোগ", "পরিচিতদের সাথে কথা বলা"],
                  ["📱", "ডিজিটাল কাজ", "কন্টেন্ট ও ডেটা সহায়তা"],
                  ["🤝", "কমিউনিটি", "স্থানীয় বাংলা সংগঠন"]
                ].map(([icon, title, desc], i) => (
                  <div key={i} className="bg-emerald-50 rounded-2xl p-6 hover:bg-emerald-100 transition">
                    <div className="text-2xl mb-3">{icon}</div>
                    <h4 className="font-semibold text-emerald-800 mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-700">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-emerald-100">
            <div className="flex justify-between items-end mb-8">
              <h3 className="text-2xl font-bold text-emerald-900">
                বিশ্বব্যাপী স্বেচ্ছাসেবক
              </h3>
            </div>

            <div className="space-y-4 overflow-y-auto pr-2">
              {locations.map((l, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center rounded-2xl border border-emerald-100 p-4 hover:shadow-md transition"
                >
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">{l.flag}</span>
                    <div>
                      <div className="font-semibold">{l.city}</div>
                      <div className="text-sm text-gray-600">{l.country}</div>
                    </div>
                  </div>


                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <GoogleLogin />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternationalVolunteers;

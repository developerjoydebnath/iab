import { Award, Eye, Shield, Target } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'আমাদের লক্ষ্য',
      description: 'ইসলামী মূল্যবোধ ও আধুনিক উন্নয়নের সমন্বয়ে একটি সমৃদ্ধ বাংলাদেশ গড়া।',
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      icon: Eye,
      title: 'আমাদের দৃষ্টিভঙ্গি',
      description: 'সকল নাগরিকের জন্য সমান সুযোগ, ন্যায়বিচার ও শান্তিপূর্ণ সমাজ প্রতিষ্ঠা।',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Award,
      title: 'আমাদের প্রতিশ্রুতি',
      description: 'দুর্নীতিমুক্ত প্রশাসন, সুষম উন্নয়ন এবং জনকল্যাণমূলক নীতি বাস্তবায়ন।',
      color: 'bg-amber-100 text-amber-700'
    },
    {
      icon: Shield,
      title: 'আমাদের শক্তি',
      description: 'জনগণের আস্থা, নিবেদিত কর্মী ও সৎ নেতৃত্ব আমাদের সবচেয়ে বড় সম্পদ।',
      color: 'bg-rose-100 text-rose-700'
    }
  ];

  return (
    <div id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-lg sm:text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            ইসলামী আন্দোলন বাংলাদেশ একটি গণতান্ত্রিক, শান্তিপূর্ণ ও মানবকল্যাণমূলক রাজনৈতিক দল।
            আমরা বিশ্বাস করি সত্য ও ন্যায়ের পথে চললেই দেশের প্রকৃত উন্নয়ন সম্ভব।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-emerald-100"
            >
              <div className={`inline-flex p-4 rounded-xl ${value.color} mb-6`}>
                <value.icon size={32} />
              </div>
              <h3 className="font-bn text-2xl font-bold text-emerald-900 mb-4">
                {value.title}
              </h3>
              <p className="text-emerald-700 text-lg leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br islamic-pattern from-emerald-700 to-green-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-bn text-3xl md:text-4xl font-bold mb-6">
              আমাদের অঙ্গীকার
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-emerald-50">
              "আমরা প্রতিশ্রুতিবদ্ধ একটি ন্যায়ভিত্তিক, দুর্নীতিমুক্ত ও সমৃদ্ধ বাংলাদেশ গড়তে।
              যেখানে প্রতিটি নাগরিক পাবে তার মৌলিক অধিকার, সম্মান ও সুযোগ।
              আমরা কাজ করবো জনগণের কল্যাণে, দেশের উন্নয়নে এবং ইসলামী মূল্যবোধ সমুন্নত রাখতে।"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">ইসলাম</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">দেশ</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">মানবতা</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { BookOpen, Briefcase, FileCheck, GraduationCap, Landmark, Scale, Shield, Users } from 'lucide-react';

export function WhyVoteSection() {
  const reasons = [
    {
      icon: Shield,
      title: 'রাষ্ট্র পরিচালনার সর্বত্র শরীয়াহ-র প্রধান্য',
      description: 'রাষ্ট্র পরিচালনার সকল ক্ষেত্রে কুরআন ও সুন্নাহভিত্তিক শরীয়াহ প্রয়োগের মাধ্যমে ন্যায়, ইনসাফ, মানবিকতা ও কল্যাণমূলক রাষ্ট্রব্যবস্থা প্রতিষ্ঠা করা হবে।',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Scale,
      title: 'পর্যায়ক্রমিক সংস্কার',
      description: 'বাস্তবতা ও জনগণের সক্ষমতা বিবেচনায় রেখে ধাপে ধাপে প্রশাসন, অর্থনীতি, শিক্ষা ও বিচারব্যবস্থায় টেকসই ও কার্যকর সংস্কার বাস্তবায়ন করা হবে।',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileCheck,
      title: 'জুলাই সনদের প্রতি দায়বদ্ধতা',
      description: 'জাতীয় ঐক্য ও ন্যায়ভিত্তিক রাষ্ট্র গঠনে জুলাই সনদের সকল অঙ্গীকার বাস্তবায়নে দৃঢ় দায়বদ্ধতা বজায় রেখে জনগণের অধিকার নিশ্চিত করা হবে।',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Landmark,
      title: 'অর্থনৈতিক সমৃদ্ধি',
      description: 'ন্যায়ভিত্তিক ও সুদমুক্ত অর্থনৈতিক নীতির মাধ্যমে দারিদ্র্য বিমোচন, কর্মসংস্থান বৃদ্ধি এবং সম্পদের সুষম বণ্টন নিশ্চিত করে অর্থনৈতিক সমৃদ্ধি অর্জন করা হবে।',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Briefcase,
      title: 'তারুণ্যের কর্মসংস্থান',
      description: 'দক্ষতা উন্নয়ন, প্রযুক্তিনির্ভর প্রশিক্ষণ ও উদ্যোক্তা সহায়তার মাধ্যমে দেশ-বিদেশে সম্মানজনক কর্মসংস্থান সৃষ্টি করে তরুণ সমাজকে শক্তিতে রূপান্তর করা হবে।',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: GraduationCap,
      title: 'কর্মমূখি বিজ্ঞানভিত্তিক নৈতিক শিক্ষা ব্যবস্থা',
      description: 'নৈতিকতা ও আধুনিক বিজ্ঞানসমন্বিত কর্মমুখী শিক্ষা ব্যবস্থার মাধ্যমে দক্ষ, সৎ ও দেশপ্রেমিক নাগরিক গড়ে তোলা হবে।',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'আর্থিক-সামরিক ও কূটনৈতিক সক্ষমতা বৃদ্ধি',
      description: 'আর্থিক স্বনির্ভরতা, আধুনিক সামরিক প্রস্তুতি ও কার্যকর কূটনীতির মাধ্যমে জাতীয় নিরাপত্তা ও আন্তর্জাতিক মর্যাদা সুদৃঢ় করা হবে।',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'সুশাসন প্রতিষ্ঠা',
      description: 'দুর্নীতি ও অপশাসনমুক্ত, স্বচ্ছ ও জবাবদিহিমূলক শাসনব্যবস্থা প্রতিষ্ঠার মাধ্যমে আইনের শাসন ও জনগণের আস্থা নিশ্চিত করা হবে।',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            কেন আমাদের ভোট দেবেন?
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            আমরা শুধু প্রতিশ্রুতি দিই না, বাস্তবায়ন করি। আপনার ভোট হবে দেশ পরিবর্তনের হাতিয়ার।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-emerald-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${reason.color} mb-6 shadow-lg`}>
                <reason.icon className="text-white" size={28} />
              </div>

              <h3 className="font-bn text-xl font-bold text-emerald-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-emerald-700 leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-emerald-700 to-green-700 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl">
          <h3 className="font-bn text-3xl md:text-4xl font-bold mb-6">
            আপনার ভোটই পারে দেশকে বদলে দিতে
          </h3>
          <p className="text-xl text-emerald-50 mb-8 max-w-3xl mx-auto">
            একসাথে আমরা গড়বো একটি সুন্দর, সমৃদ্ধ ও ন্যায়ভিত্তিক বাংলাদেশ।
            আপনার সমর্থন আমাদের শক্তি, আপনার ভোট আমাদের দায়িত্ব।
          </p>
          <a
            href="#support"
            className="inline-block bg-white text-emerald-700 px-12 py-5 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            এখনই সমর্থক হিসেবে যুক্ত হন
          </a>
        </div>
      </div>
    </div>
  );
}
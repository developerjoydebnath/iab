import { ArrowRight, Users } from 'lucide-react';

export function CandidatesSection() {
  return (
    <div id="candidates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            আমাদের প্রার্থীগণ
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            ৩০০ টি আসনে আমাদের যোগ্য, সৎ ও দক্ষ প্রার্থীরা প্রতিদ্বন্দ্বিতা করছেন
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-br from-emerald-700 to-green-700 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">৩০০</div>
              <div className="text-emerald-100">মোট আসন</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">৬৪</div>
              <div className="text-emerald-100">জেলা</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">৮</div>
              <div className="text-emerald-100">বিভাগ</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">১০০%</div>
              <div className="text-emerald-100">কভারেজ</div>
            </div>
          </div>
        </div>

        {/* CTA to View All Candidates */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-12 text-center border-2 border-emerald-200">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-100 p-6 rounded-full">
              <Users className="text-emerald-700" size={48} />
            </div>
          </div>
          <h3 className="font-bn text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
            সকল প্রার্থীদের তালিকা দেখুন
          </h3>
          <p className="text-emerald-700 mb-8 max-w-2xl mx-auto">
            আপনার এলাকার প্রার্থী সম্পর্কে বিস্তারিত জানুন। আমাদের সকল প্রার্থী যোগ্য, সৎ ও জনসেবায় নিবেদিত।
          </p>
          <a
            href="/candidates"
            className="inline-flex items-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span>সকল প্রার্থী দেখুন</span>
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            ফিরে যান
          </Link>
          <h1 className="text-4xl font-bold font-bn">গোপনীয়তা নীতি</h1>
          <p className="mt-2 text-emerald-100">সর্বশেষ আপডেট: জানুয়ারি ২৯, ২০২৬</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100/50 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">১. ভূমিকা</h2>
            <p>
              ইসলামী আন্দোলন বাংলাদেশ আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। আমরা যখন আপনার কাছ থেকে কোনো তথ্য সংগ্রহ করি, তখন তা কীভাবে ব্যবহার ও সংরক্ষণ করা হয় তা এই গোপনীয়তা নীতিতে বর্ণনা করা হয়েছে।
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">২. আমরা কি তথ্য সংগ্রহ করি?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>নাম, ঠিকানা, ফোন নম্বর এবং ইমেল ঠিকানা।</li>
              <li>ভোটার আইডি বা অন্যান্য সনাক্তকরণ তথ্য (প্রযোজ্য ক্ষেত্রে)।</li>
              <li>স্বেচ্ছাসেবক হিসেবে নিবন্ধনের তথ্য।</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">৩. তথ্যের ব্যবহার</h2>
            <p>
              আমরা আপনার তথ্য শুধুমাত্র নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>দলীয় কার্যক্রম ও আপডেট জানানো।</li>
              <li>স্বেচ্ছাসেবক ব্যবস্থাপনা।</li>
              <li>নির্বাচনী প্রচারণা ও জনসংযোগ।</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">৪. তথ্য সুরক্ষা</h2>
            <p>
              আমরা আপনার ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিতে আধুনিক প্রযুক্তি এবং নিরাপত্তা ব্যবস্থা গ্রহণ করি। অনুমতি ব্যতীত তৃতীয় পক্ষের সাথে কোনো তথ্য শেয়ার করা হয় না।
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">৫. যোগাযোগ</h2>
            <p>
              গোপনীয়তা নীতি সম্পর্কিত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করতে পারেন: info@islamiandolon.bd
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

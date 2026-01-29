import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            ফিরে যান
          </Link>
          <h1 className="text-4xl font-bold font-bn">শর্তাবলী</h1>
          <p className="mt-2 text-emerald-100">সর্বশেষ আপডেট: জানুয়ারি ২৯, ২০২৬</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-emerald-100/50 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">১. সাইট ব্যবহারের শর্তাবলী</h2>
            <p>
              এই ওয়েবসাইটটি ব্যবহারের মাধ্যমে আপনি আমাদের শর্তাবলীর সাথে সম্মত হচ্ছেন। যদি আপনি এই শর্তগুলোর সাথে একমত না হন, তবে অনুগ্রহ করে সাইটটি ব্যবহার করা থেকে বিরত থাকুন।
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">২. কন্টেন্ট ব্যবহার</h2>
            <p>
              এই ওয়েবসাইটের সকল কন্টেন্ট (টেক্সট, ছবি, ভিডিও) ইসলামী আন্দোলন বাংলাদেশ-এর সম্পত্তি। অনুমতি ছাড়া কোনো কন্টেন্ট বাণিজ্যিক উদ্দেশ্যে ব্যবহার করা নিষিদ্ধ।
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">৩. আচরণ বিধি</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>কোনো প্রকার স্প্যামিং বা মিথ্যা তথ্য প্রদান করা যাবে না।</li>
              <li>সাইটের নিরাপত্তা বিঘ্নিত হয় এমন কোনো কাজ করা যাবে না।</li>
              <li>অশালীন বা আক্রমণাত্মক মন্তব্য করা থেকে বিরত থাকতে হবে।</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">৪. শর্তাবলীর পরিবর্তন</h2>
            <p>
              কর্তৃপক্ষ যেকোনো সময় এই শর্তাবলী পরিবর্তন বা পরিবর্ধন করার অধিকার সংরক্ষণ করে। আপডেটের জন্য নিয়মিত এই পেজটি ভিজিট করার অনুরোধ করা হলো।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

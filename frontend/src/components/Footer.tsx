import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import { HandFanIcon } from './HandFanIcon';

export function Footer() {
  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <HandFanIcon className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-bn font-bold text-lg">ইসলামী আন্দোলন</h3>
                <p className="text-emerald-200 text-sm">বাংলাদেশ</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed mb-6">
              সত্য ও ন্যায়ের পথে এগিয়ে চলা একটি গণতান্ত্রিক রাজনৈতিক দল।
              দেশ ও জনগণের সেবায় নিবেদিত।
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bn font-bold text-xl mb-6">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#activities" onClick={(e) => handleNavClick(e, '#activities')} className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> কার্যক্রম
                </a>
              </li>
              <li>
                <a href="#candidates" onClick={(e) => handleNavClick(e, '#candidates')} className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> প্রার্থীগণ
                </a>
              </li>
              <li>
                <a href="#support" onClick={(e) => handleNavClick(e, '#support')} className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> সমর্থক নিবন্ধন
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> ম্যানিফেস্টো
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bn font-bold text-xl mb-6">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-100">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <span>কেন্দ্রীয় কার্যালয়<br />ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100">
                <Phone className="flex-shrink-0 mt-1" size={20} />
                <span>০৯৬১২-৩৪৫৬৭৮<br />০১৭XX-XXXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100">
                <Mail className="flex-shrink-0 mt-1" size={20} />
                <span>info@islamiandolon.bd<br />support@islamiandolon.bd</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bn font-bold text-xl mb-6">নিউজলেটার</h3>
            <p className="text-emerald-100 mb-4">
              নির্বাচনী আপডেট ও কার্যক্রমের খবর পেতে সাবস্ক্রাইব করুন
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                পাঠান
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200 text-center md:text-left">
              © ২০২৬ ইসলামী আন্দোলন বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-emerald-200">
              <a href="#" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">সাইটম্যাপ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Election Reminder */}
      <div className="bg-amber-500 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-amber-900 font-bold text-lg">
            ভোট দিন • দেশ গড়ুন • ইসলামী আন্দোলন বাংলাদেশকে জয়ী করুন
          </p>
        </div>
      </div>
    </footer>
  );
}

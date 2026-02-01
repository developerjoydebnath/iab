
export function Footer() {

  return (
    <footer className="">
      {/*  <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <img src="/images/logo-2.png" alt="Logo" className='h-12 w-12 min-h-12 min-w-12' />
              </div>
              <div>
                <h3 className="font-bn font-bold text-lg">ইসলামী আন্দোলন</h3>
                <p className="text-emerald-200 text-sm">বাংলাদেশ</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed mb-6">
              ইসলামী আন্দোলন বাংলাদেশ —
              যারা ইনসাফ কায়েম ও শোষণমুক্ত
              একটি উন্নত রাষ্ট্র গড়তে বদ্ধপরিকর।
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/iab87" target='_blank' className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/IAB_1987" target='_blank' className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/islamiandolanbd" target='_blank' className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/iab.official" target='_blank' className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bn font-bold text-xl mb-6">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/candidates" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> প্রার্থীগণ
                </Link>
              </li>
              <li>
                <Link to="/supporter-registration" className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2">
                  <span>→</span> সমর্থক নিবন্ধন
                </Link>
              </li>
              <li>
                <Link to="/why-vote"
                  className="text-emerald-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>→</span> কেন ভোট দিবেন
                </Link>
              </li>
            </ul>
          </div>

     
          <div>
            <h3 className="font-bn font-bold text-xl mb-6">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-100">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <span>কেন্দ্রীয় কার্যালয়<br />৫৫/বি (৩য় তলা), পুরানা পল্টন, ঢাকা-১০০০</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100">
                <Phone className="flex-shrink-0 mt-1" size={20} />
                <span>ফোন : ০২-৯৫৬৭১৩০<br />ফ্যাক্স : ০২-৭১৬১০৮০</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100">
                <Mail className="flex-shrink-0 mt-1" size={20} />
                <span>info@hatpakha.bd</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-200 text-center md:text-left">
              © ২০২৬ ইসলামী আন্দোলন বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-emerald-200">
              <Link to="/privacy" className="hover:text-white transition-colors">গোপনীয়তা নীতি</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-white transition-colors">শর্তাবলী</Link>
              <span>|</span>
              <Link to="/sitemap" className="hover:text-white transition-colors">সাইটম্যাপ</Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Election Reminder */}
      <div className="bg-emerald-900 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-lg">
            ভোট দিন • দেশ গড়ুন • ইসলামী আন্দোলন বাংলাদেশকে জয়ী করুন
          </p>
        </div>
      </div>
    </footer>
  );
}

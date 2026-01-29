import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router';

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle menu open/close with animation
  const openMenu = () => {
    setMobileMenuOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setMobileMenuOpen(false), 300);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="relative islamic-pattern bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 min-h-screen overflow-hidden">

      {/* Full Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden islamic-pattern fixed inset-0 z-50 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col transition-all duration-300 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Mobile Menu Header */}
          <div className={`flex items-center justify-between px-6 py-6 transition-all duration-300 delay-100 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
            <div className="bg-white p-2 rounded-full shadow-lg h-14 w-14 flex items-center justify-center">
              <img src="/images/logo-1.png" alt="LOGO" className='h-full w-full object-contain' />
            </div>
            <button
              className="text-white hover:text-emerald-300 p-2"
              onClick={closeMenu}
            >
              <X size={36} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            <a
              href="/#about"
              className={`text-2xl font-bold text-white hover:text-emerald-600 transition-all duration-300 delay-150 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              onClick={closeMenu}
            >
              আমাদের সম্পর্কে
            </a>
            <a
              href="/#activities"
              className={`text-2xl font-bold text-white hover:text-emerald-600 transition-all duration-300 delay-200 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              onClick={closeMenu}
            >
              কার্যক্রম
            </a>
            <a
              href="/#candidates"
              className={`text-2xl font-bold text-white hover:text-emerald-600 transition-all duration-300 delay-[250ms] ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              onClick={closeMenu}
            >
              প্রার্থীগণ
            </a>
            <a
              href="/#support"
              className={`mt-4 w-full max-w-xs bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 delay-300 text-center shadow-lg ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                }`}
              onClick={closeMenu}
            >
              সমর্থন করুন
            </a>
          </div>

          {/* Social Icons */}
          <div className={`flex items-center justify-center gap-4 pb-8 transition-all duration-300 delay-[350ms] ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <a href="https://www.facebook.com/iab87" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://x.com/IAB_1987" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="https://www.instagram.com/iab.official" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.youtube.com/islamiandolanbd" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-lg h-16 w-16 flex items-center justify-center">
              <img src="/images/logo-1.png" alt="LOGO" className='h-full w-full object-contain' />
            </div>
            <div>
              <h1 className="font-bn text-white text-2xl font-bold">হাতপাখায় ভোট দিন</h1>
              <p className="text-emerald-100 text-sm">ইসলামী আন্দোলন বাংলাদেশ</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-white hover:text-emerald-100 transition-colors">আমাদের সম্পর্কে</a>
            <a href="/#activities" className="text-white hover:text-emerald-100 transition-colors">কার্যক্রম</a>
            <a href="/#candidates" className="text-white hover:text-emerald-100 transition-colors">প্রার্থীগণ</a>
            <a href="/#support" className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
              সমর্থন করুন
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={openMenu}
          >
            <Menu size={36} />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-12 items-center">
          <div>
            <div className='flex lg:justify-start justify-center'>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                <span className="text-white font-semibold">নির্বাচন ২০২৬</span>
              </div>
            </div>

            <h2 className="font-bn text-center lg:text-left text-5xl md:text-[56px] font-bold text-white mb-6 leading-[1.125]">
              এসো জনপ্রত্যাশার বাংলাদেশ গড়ি
              <br />
              <span className="text-emerald-200">আগামীর রাজনীতি বদলে দিব, ঘরে বসেই</span>
            </h2>

            <p className="text-lg text-center max-w-xl mx-auto lg:mx-0 lg:text-left text-emerald-50 mb-8 leading-relaxed">
              একটি জনকল্যাণমূলক রাষ্ট্র গড়তে আমরা প্রতিশ্রুতি বদ্ধ। ওদের আছে কালো টাকা আর
              পেশি শক্তির দাপট।
              আমাদের আছে মহান রবের আল্লাহর প্রতি
              অবিচল বিশ্বাস। আপনার মা/বাবা, ভাই/বোন, স্ত্রী/সন্তান,
              আত্নীয়সজন/পাড়া-পড়শীর ও বন্ধুবান্ধব সম্পর্কের কারণে
              আপনার কথার মুল্যে তাদের কাছে অনেক্ক বেশি।
              বন্ধু বন্ধুত্ব কারণে আপনার কথা ফেলতে পারে না।
              আজ ঘরে বসেই আপনার ২ মিনিটের ফোন কল বদলে দিতে পারে জাতীয় নির্বাচন ২০২৬ এর ফলাফল,
              কর‍তে পারে গেইম চেঞ্জ।।
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#support"
                className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                সমর্থক হিসেবে নিবন্ধন করুন
              </a>
              <a
                href="#about"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                আরও জানুন
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-12 pt-12 border-t border-emerald-400/30">
              <div>
                <div className="text-center text-2xl sm:text-3xl font-bold text-white mb-1">৩০০</div>
                <div className="text-center text-emerald-100 text-sm">সংসদীয় আসন</div>
              </div>
              <div>
                <div className="text-center text-2xl sm:text-3xl font-bold text-white mb-1">৬৪</div>
                <div className="text-center text-emerald-100 text-sm">জেলায় সংগঠন</div>
              </div>
              <div>
                <div className="text-center text-2xl sm:text-3xl font-bold text-white mb-1">৫ কোটি+</div>
                <div className="text-center text-emerald-100 text-sm">সমর্থক</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Symbol */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Main Symbol */}
              <div className='overflow-hidden bg-white w-fit outline-[6px] outline-[#d4af37] rounded-3xl flex justify-center items-center p-4 shadow-2xl'>
                <div className="relative bg-linear-to-t from-gray-200 to-amber-200 rounded-xl overflow-hidden">
                  <img className='transform hover:scale-105 transition-transform duration-300 px-4 py-6' src='/images/logo-2.png' alt='Logo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

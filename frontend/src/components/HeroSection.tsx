import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 min-h-screen overflow-hidden">
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

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
            <a href="#about" className="text-white hover:text-emerald-100 transition-colors">আমাদের সম্পর্কে</a>
            <a href="#activities" className="text-white hover:text-emerald-100 transition-colors">কার্যক্রম</a>
            <a href="#candidates" className="text-white hover:text-emerald-100 transition-colors">প্রার্থীগণ</a>
            <a href="#support" className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
              সমর্থন করুন
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-emerald-800 shadow-lg py-4">
            <div className="flex flex-col gap-4 px-6">
              <a href="#about" className="text-white hover:text-emerald-100 transition-colors py-2">আমাদের সম্পর্কে</a>
              <a href="#activities" className="text-white hover:text-emerald-100 transition-colors py-2">কার্যক্রম</a>
              <a href="#candidates" className="text-white hover:text-emerald-100 transition-colors py-2">প্রার্থীগণ</a>
              <a href="#support" className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors text-center">
                সমর্থন করুন
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              <span className="text-white font-semibold">নির্বাচন ২০২৬</span>
            </div>

            <h2 className="font-bn text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              এসো জনপ্রত্যাশার
              <br />
              <span className="text-emerald-200">বাংলাদেশ গড়ি</span>
            </h2>

            <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
              একটি জনকল্যাণমূলক রাষ্ট্র গড়তে আমরা প্রস্তুতি বদ্ধ। আপনার ভোটই হবে পরিবর্তনের মূল চাবিকাঠি।
              আসুন, একসাথে গড়ে তুলি একটি সুন্দর, সমৃদ্ধ ও ন্যায়ভিত্তিক বাংলাদেশ।
            </p>

            <div className="flex flex-wrap gap-4">
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
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-emerald-400/30">
              <div>
                <div className="text-center text-3xl font-bold text-white mb-1">৩০০</div>
                <div className="text-center text-emerald-100 text-sm">সংসদীয় আসন</div>
              </div>
              <div>
                <div className="text-center text-3xl font-bold text-white mb-1">৬৪</div>
                <div className="text-center text-emerald-100 text-sm">জেলায় সংগঠন</div>
              </div>
              <div>
                <div className="text-center text-3xl font-bold text-white mb-1">৫ কোটি+</div>
                <div className="text-center text-emerald-100 text-sm">সমর্থক</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Symbol */}
          <div className="relative block">
            <div className="relative">
              {/* Main Symbol */}
              <div style={{ backgroundColor: '#fff', width: 'fit-content', outline: '6px solid #d4af37' }} className='overflow-hidden rounded-3xl flex justify-center items-center p-4 shadow-2xl'>
                <div style={{ backgroundColor: '#ddd' }} className="relative rounded-xl overflow-hidden">
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

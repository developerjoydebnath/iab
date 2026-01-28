
import React from 'react';
import { CAMPAIGN_VISION, IMAGES } from '../constants';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-16 sm:py-20 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-islamic-gold/10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-6 border border-islamic-gold/20">
            <h2 className="text-bd-green font-black tracking-wider uppercase text-xs sm:text-sm">আমাদের ইশতেহার</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 font-serif-bn">সুশাসন ও উন্নয়নের রূপরেখা</h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            গাজীপুর-৫ (কালীগঞ্জ) আসনের সামগ্রিক উন্নয়নে আমাদের অঙ্গীকার। ইনসাফ ও মানবিক মর্যাদার ভিত্তিতে সমাজ গড়তে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPAIGN_VISION.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-lg border border-transparent hover:border-islamic-gold transition-all duration-500 group relative">
              <div className="sm:w-16 h-12 w-12 sm:h-16 bg-bd-green text-white rounded-lg sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-xl transition-transform">
                <i className={`${item.icon} text-2xl sm:text-3xl`}></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 font-serif-bn">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
              <div className="mt-6 w-10 h-1 bg-islamic-gold opacity-30 group-hover:w-20 transition-all"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 islamic-pattern rounded-[30px] sm:rounded-[40px] md:rounded-[60px] p-6 sm:p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 relative overflow-hidden shadow-2xl border-b-[12px] border-islamic-gold">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-islamic-gold rounded-full -mr-48 -mt-48 opacity-20 blur-3xl"></div>

          <div className="lg:w-2/3 space-y-8 relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight font-serif-bn">"ইনসাফ কায়েমের লড়াইয়ে <br className='lg:flex hidden' />আপনার ভোট ইমানী দায়িত্ব।"</h3>
            <p className="text-emerald-50 text-lg sm:text-xl font-medium leading-relaxed opacity-90">
              আমরা কোনো নির্দিষ্ট গোষ্ঠীর জন্য নয়, বরং বাংলার প্রতিটি নাগরিকের অধিকার ও মর্যাদার জন্য লড়ছি। হাতপাখা শান্তি ও ন্যায়ের প্রতীক।
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <button className="bg-white text-bd-green px-5 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all flex items-center gap-3 shadow-2xl shadow-black/20">
                ইশতেহার ডাউনলোড করুন <i className="fa-solid fa-file-pdf"></i>
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="h-40 rounded-2xl md:rounded-[32px] w-40 sm:h-80 sm:w-80">
                <img src={IMAGES.IAB_LOGO} alt="logo" className="object-contain h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;


import React from 'react';
import { CANDIDATE_NAME, CONSTITUENCY, IMAGES, YOUTUBE_VIDEO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 lg:pt-24 pb-6 lg:pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none islamic-pattern -z-10"></div>
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-bd-green/10 rounded-full blur-[120px] -z-20"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-islamic-gold/5 rounded-full blur-[120px] -z-20"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 bg-bd-green text-white rounded-xl text-xs sm:text-sm font-bold shadow-xl border-b-4 border-islamic-gold">
            <i className="fa-solid fa-map-location-dot text-islamic-gold"></i>
            {CONSTITUENCY}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight font-serif-bn">
            জনপ্রত্যাশার <br />
            <span className="text-bd-green">বাংলাদেশ গড়তে</span> <br />
            <span className="text-islamic-gold underline decoration-bd-green underline-offset-8">হাতপাখায়</span> ভোট দিন
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
            "ইসলাম, দেশ ও মানবতার কল্যাণে মুক্তিযুদ্ধ ও ২৪-এর গণঅভ্যুত্থানের চেতনা ধারণ করে ঐক্যবদ্ধ হওয়ার এখনই সময়।"
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <a href={YOUTUBE_VIDEO} target="_blank" rel="noreferrer" className="w-auto px-6 md:px-10 py-3 md:py-5 bg-red-600 text-white rounded-2xl font-black text-base md:text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 active:scale-95 border-none">
              <i className="fa-brands fa-youtube"></i> প্রার্থীর বক্তব্য শুনুন
            </a>
          </div>

          <div className="flex items-center gap-8 justify-center lg:justify-start pt-6">
            <div className="text-center group cursor-pointer">
              <div className="relative">
                <div className="h-20 w-20">
                  <img src={IMAGES.HAT_PAKHA} alt="logo" className="object-contain h-full w-full" />
                </div>
              </div>
            </div>
            <div className="h-20 w-px bg-gray-200"></div>
            <div className="space-y-1">
              <p className="text-sm font-black text-bd-green uppercase tracking-wider">ইনসাফ প্রতিষ্ঠার লড়াই</p>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-users text-islamic-gold"></i>
                <span className="text-xl font-black text-gray-800">জনতার আস্থায়</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative order-1 lg:order-2 h-full flex-1 w-full">
          {/* Main Visual Container - Removed islamic-border, added standard border-radius */}
          <div className="relative z-10 p-4 border-4 border-islamic-gold rounded-[30px] bg-white shadow-2xl overflow-hidden group">
            <div className="bg-slate-200 aspect-[1/1.1] h-full flex items-center justify-center relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-bd-green/20 to-islamic-gold/10"></div>
              <i className="fa-solid fa-user-tie text-9xl text-bd-green/20"></i>
              <img
                src={IMAGES.CANDIDATE_MAIN}
                alt={CANDIDATE_NAME}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* Logo Badge */}
            <div className="absolute top-8 right-8 bg-white p-2 rounded-full sm:flex hidden shadow-2xl gold-glow border-2 border-islamic-gold z-20">
              <img src={IMAGES.IAB_LOGO} alt="IAB Logo" className="w-14 h-14 rounded-full object-contain" />
            </div>
          </div>


          {/* Name Label */}
          <div className="absolute -bottom-6 left-10 sm:block hidden sm:-left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border-l-8 border-islamic-gold max-w-[320px]">
            <p className="text-[10px] text-bd-green font-black uppercase tracking-wider mb-1">প্রার্থী: {CONSTITUENCY}</p>
            <p className="text-2xl font-black text-gray-900 leading-tight font-serif-bn">{CANDIDATE_NAME}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-1 flex-1 bg-islamic-gold"></span>
              <i className="fa-solid fa-leaf text-bd-green"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

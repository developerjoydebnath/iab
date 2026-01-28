
import React from 'react';
import { IMAGES, NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
  return (
    <section id="news" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-2 bg-islamic-gold rounded-full"></span>
              <span className="w-4 h-2 bg-bd-green rounded-full"></span>
            </div>
            <h2 className="text-bd-green font-black tracking-wider uppercase text-xs mb-4">মুভমেন্ট গ্যালারি ও সংবাদ</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-serif-bn">রক্তিম সূর্যদয়ের দিনগুলো</h3>
          </div>
          <button className="text-bd-green font-black flex items-center gap-2 group border-b-4 border-islamic-gold pb-2 hover:text-islamic-gold transition-all text-lg font-serif-bn">
            সব খবর দেখুন <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
          </button>
        </div>

        {/* Movement Imagery Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            IMAGES.MOVEMENT_1,
            IMAGES.MOVEMENT_2,
            IMAGES.MOVEMENT_3,
            IMAGES.MOVEMENT_4,
          ].map((url, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl h-64 group">
              <img src={url} className="w-full md:grayscale hover:grayscale-0 h-full object-cover group-hover:scale-110 transition-all duration-700" alt="জুলাই বিপ্লব" />
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main News Card */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] md:rounded-[50px] mb-10 shadow-2xl ring-1 ring-gray-100">
              <img src={IMAGES.LATEST_NEWS} className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" alt="News feature" />
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-islamic-gold text-white px-6 py-2 rounded-2xl text-sm font-black uppercase tracking-wider shadow-2xl animate-pulse">
                সর্বশেষ আপডেট
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-10">
                <p className="text-islamic-gold font-black text-sm mb-2 font-serif-bn">১৮ অক্টোবর, ২০২৪</p>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-serif-bn">বিপ্লবী সংস্কারের লক্ষ্যে দেশজুড়ে ইসলামী আন্দোলন বাংলাদেশ-র গণসংযোগ শুরু</h4>
              </div>
            </div>
          </div>

          {/* Sidebar News */}
          <div className="space-y-8">
            {NEWS_ITEMS.map((item) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] border-2 border-gray-100 bg-gray-50/30 hover:bg-bd-green/5 hover:border-islamic-gold/20 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-islamic-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                <p className="text-islamic-gold font-black text-xs mb-3 font-serif-bn">{item.date}</p>
                <h5 className="font-extrabold text-xl text-gray-900 mb-3 group-hover:text-bd-green transition-colors leading-snug font-serif-bn">{item.title}</h5>
                <p className="text-sm text-gray-500 font-medium line-clamp-2">{item.excerpt}</p>
              </a>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

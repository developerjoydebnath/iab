
import React from 'react';
import { IMAGES, PARTY_NAME, SOCIAL_LINKS, SYMBOL_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="join" className="islamic-pattern text-white pb-6 sm:pb-8 md:pb-12 pt-16 sm:pt-20 md:pt-24 relative overflow-hidden border-t-8 border-islamic-gold">
      <div className="absolute inset-0 bg-bd-green/60 backdrop-blur-[1px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-xl">
                <img src={IMAGES.IAB_LOGO} alt="IAB Logo" className="min-w-12 min-h-12 h-12 w-12 object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase leading-none font-serif-bn">{PARTY_NAME}</span>
            </div>
            <p className="text-emerald-50 text-lg leading-relaxed font-medium">
              ইসলামী আন্দোলন বাংলাদেশ — যারা ইনসাফ কায়েম ও শোষণমুক্ত একটি উন্নত রাষ্ট্র গড়তে বদ্ধপরিকর।
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(social => (
                <a key={social.icon} href={social.link} className="min-w-14 h-14 w-14 min-h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-bd-red hover:border-bd-red hover:scale-110 transition-all group">
                  <i className={`fa-brands fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-black mb-8 text-xl border-b-4 border-islamic-gold inline-block pb-1 uppercase tracking-wider font-serif-bn">প্রচারণা</h5>
            <ul className="space-y-5 text-emerald-50 font-bold">
              {[
                { name: 'আমাদের লক্ষ্য', link: '#vision' },
                { name: 'মুভমেন্ট গ্যালারি', link: '#news' },
                { name: 'ইশতেহার ২০২৪', link: '#' },
                { name: 'জেলা ভিত্তিক শাখা', link: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="hover:text-islamic-gold transition-colors flex items-center gap-3 font-serif-bn">
                    <i className="fa-solid fa-circle text-[6px] text-islamic-gold"></i> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-8 text-xl border-b-4 border-islamic-gold inline-block pb-1 uppercase tracking-wider font-serif-bn">সাহায্য</h5>
            <ul className="space-y-5 text-emerald-50 font-bold">
              {[
                { name: 'স্বেচ্ছাসেবক আবেদন', link: '#' },
                { name: 'অনুদান নীতিমালা', link: '#' },
                { name: 'মিডিয়া সেন্টারে প্রবেশ', link: '#' },
                { name: 'অভিযোগ ও পরামর্শ', link: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="hover:text-islamic-gold transition-colors font-serif-bn">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h5 className="font-black mb-8 text-xl border-b-4 border-islamic-gold inline-block pb-1 lg:self-end uppercase tracking-wider font-serif-bn">ভোটের আহ্বান</h5>
            <div className="bg-white p-10 rounded-[50px] text-center shadow-2xl transition-all duration-500 max-w-[280px] border-4 border-islamic-gold group">
              <img src={IMAGES.HAT_PAKHA} alt={SYMBOL_NAME} className="w-28 h-28 object-contain mx-auto mb-6 transition-transform" />
              <div className="space-y-1">
                <p className="text-islamic-gold font-black text-2xl uppercase leading-none font-serif-bn">{SYMBOL_NAME} মার্কায়</p>
                <p className="text-bd-green font-black text-3xl uppercase leading-none font-serif-bn">ভোট দিন</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 md:pt-12 border-t border-white/10 flex flex-col md:text-left text-center md:flex-row justify-between items-center gap-8 text-emerald-100/60 text-sm font-black">
          <p>© ২০২৪ ইসলামী আন্দোলন বাংলাদেশ | শান্তি ও ইনসাফ কায়েমের শপথ</p>
          <div className="flex gap-10">
            {[
              { name: 'নিরাপত্তা নীতিমালা', link: '#' },
              { name: 'যোগাযোগ', link: '#' }
            ].map((item) => (
              <a key={item.name} href={item.link} className="hover:text-white transition-colors">{item.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
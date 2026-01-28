
export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] islamic-pattern pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[32px] sm:rounded-[48px] md:rounded-[60px] p-6 sm:p-12 md:p-20 text-center shadow-2xl border-t-8 border-bd-green relative overflow-hidden">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight font-serif-bn">বিপ্লব পরবর্তী ইনসাফ কায়েমের আন্দোলন</h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            আপনার একটি ভোট বদলে দিতে পারে দেশের ভবিষ্যৎ। দুর্নীতি ও শোষণের অবসান ঘটিয়ে ইনসাফ কায়েম করতে হাতপাখা প্রতীকে ঐক্যবদ্ধ হোন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#search-voter">
              <button className="bg-bd-green text-white px-12 py-3 sm:py-4 md:py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-bd-green/30 active:scale-95 border-bd-green border-4 font-serif-bn">ভোটার তথ্য যাচাই</button>
            </a>
            <a href="#join">
              <button className="bg-white border-4 border-islamic-gold text-bd-green px-12 py-3 sm:py-4 md:py-5 rounded-2xl font-black text-lg hover:bg-islamic-gold hover:text-white transition-all shadow-xl active:scale-95 font-serif-bn">পরামর্শ দিন</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const ComplaintForm = () => {
  return (
    <section id="join" className="py-24 px-4 sm:px-6">
      <div className="bg-white p-4 sm:p-8 max-w-2xl mx-auto rounded-[32px] sm:rounded-[50px] shadow-2xl border-4 border-bd-green relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-bd-red/5 rounded-full -mr-16 -mt-16"></div>

        <div className="relative z-10 text-center mb-6">
          <div className="w-16 h-16 bg-bd-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-envelope-open-text text-3xl text-bd-green"></i>
          </div>
          <h5 className="font-black text-gray-900 text-xl">জনপ্রত্যাশার গাজীপুর ০৫ গড়তে আপনার পরামর্শ দিন</h5>
          <p className="text-xs mt-2 text-gray-500 font-bold uppercase tracking-wider mt-1">আপনার অধিকার রক্ষায় আমরা সচেষ্ট</p>
        </div>

        <form className="space-y-4 relative z-10 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-black text-bd-green uppercase mb-1 ml-2">আপনার নাম</label>
            <input
              type="text"
              placeholder="নাম লিখুন"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-bd-green focus:bg-white outline-none transition-all text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-bd-green uppercase mb-1 ml-2">মোবাইল অথবা ইমেইল</label>
            <input
              type="text"
              placeholder="০১৭XXXXXXXX / email@example.com"
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-bd-green focus:bg-white outline-none transition-all text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-bd-green uppercase mb-1 ml-2">বিস্তারিত বার্তা</label>
            <textarea
              rows={3}
              placeholder="আপনার বার্তাটি এখানে লিখুন..."
              className="w-full px-5 py-3 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-bd-green focus:bg-white outline-none transition-all text-sm font-bold resize-none"
            ></textarea>
          </div>

          <button className="w-full bg-bd-green text-white py-3 sm:py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-bd-green/20 active:scale-95">
            বার্তা পাঠান <i className="fa-solid fa-paper-plane ml-2"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ComplaintForm;

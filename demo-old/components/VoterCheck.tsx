const VoterCheck = () => {
  return (
    <section id="search-voter" className="py-16 sm:py-20 md:py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative bg-[#1a202c] sm:px-10 sm:py-10 px-4 py-6 rounded-[24px] sm:rounded-[40px] border border-gray-800 shadow-2xl overflow-hidden group">
          {/* Upcoming Feature Badge & Overlay */}
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px] z-20 flex flex-col items-center justify-center text-center">
            <div className="bg-bd-red/90 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider shadow-xl animate-bounce mb-4">
              শীঘ্রই আসছে (Upcoming)
            </div>
            <p className="text-white text-lg font-bold max-w-md px-6">
              এই ফিচারটির মাধ্যমে আপনি আপনার সংসদীয় আসনের ভোটার তথ্য যাচাই করতে পারবেন। আমাদের সাথেই থাকুন।
            </p>
          </div>

          <div className="relative z-10 opacity-40 select-none pointer-events-none">
            <div className="mb-10">
              <h3 className="text-2xl font-black text-white mb-2">ভোটার তথ্য যাচাই</h3>
              <div className="h-1 w-20 bg-bd-red rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 ml-1">এলাকার নাম</label>
                <div className="relative">
                  <input
                    disabled
                    type="text"
                    placeholder="Type to search area..."
                    className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none"
                  />
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 ml-1">ভোটারের নাম</label>
                <input
                  disabled
                  type="text"
                  placeholder="ভোটারের নাম"
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 ml-1">পিতার নাম</label>
                <input
                  disabled
                  type="text"
                  placeholder="পিতার নাম"
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 ml-1">মাতার নাম</label>
                <input
                  disabled
                  type="text"
                  placeholder="মাতার নাম"
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none"
                />
              </div>
              <div className="lg:col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 ml-1">ঠিকানা</label>
                <input
                  disabled
                  type="text"
                  placeholder="ঠিকানা"
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none"
                />
              </div>
              <div className="lg:col-span-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 ml-1">জন্ম তারিখ</label>
                <div className="relative">
                  <input
                    disabled
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm outline-none"
                  />
                  <i className="fa-solid fa-calendar absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end border-t border-gray-800 pt-8">
              <button disabled className="bg-[#6366f1] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">
                <i className="fa-solid fa-magnifying-glass"></i>
                Search Voters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoterCheck;

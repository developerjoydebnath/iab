export function OurRequestSection() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="relative max-w-4xl mx-auto">

          {/* Main Card */}
          <div className="relative bg-white border-2 border-emerald-200 rounded-4xl p-8 md:p-12 shadow-2xl shadow-emerald-100/50 backdrop-blur-sm">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full">
                  আমাদের প্রতিশ্রুতি
                </span>
              </div>
              <h2 className="font-bn font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-emerald-800 mb-4">
                একটি জনকল্যাণমূলক রাষ্ট্র গড়তে আমরা প্রতিশ্রুতি বদ্ধ
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-8">
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed text-center">
                  ওদের আছে কালো টাকা আর পেশি শক্তির দাপট।
                  আমাদের আছে মহান রবের আল্লাহর প্রতি অবিচল বিশ্বাস।
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed text-center">
                  আপনার মা/বাবা, ভাই/বোন, স্ত্রী/সন্তান,
                  আত্নীয়সজন/পাড়া-পড়শীর ও বন্ধুবান্ধব সম্পর্কের কারণে
                  আপনার কথার মুল্যে তাদের কাছে অনেক বেশি।
                </p>
                <p className="text-xl md:text-2xl font-bold text-center mt-4 text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-200">
                  বন্ধু বন্ধুত্ব কারণে আপনার কথা ফেলতে পারে না।
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed text-center">
                  আজ ঘরে বসেই আপনার ২ মিনিটের ফোন কল বদলে দিতে পারে
                  <span className="font-bold text-emerald-700"> জাতীয় নির্বাচন ২০২৬</span> এর ফলাফল,
                  করতে পারে <span className="font-bold text-emerald-700">গেইম চেঞ্জ</span>।
                </p>
              </div>
            </div>

            {/* Target Section */}
            <div className="mt-12">
              <div className="max-w-sm mx-auto">
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-1 shadow-2xl shadow-green-500/30">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 text-center">
                    <div className="inline-block mb-8">
                      <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-200/50 px-4 py-2 rounded-full">
                        আমাদের টার্গেট
                      </span>
                    </div>
                    <h3 className="text-7xl md:text-8xl font-black text-emerald-900 leading-none mb-4">
                      ১৭ টি
                    </h3>
                    <div className="text-2xl font-bold text-gray-800">
                      করে ভোট নিশ্চিত করা
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-gray-900">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="relative flex justify-center items-center mt-20">
          <div className="relative group">

            {/* Main Logo Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 w-fit outline-4 outline outline-emerald-300 rounded-3xl flex justify-center items-center p-6 md:p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5"></div>

              {/* Logo Background */}
              <div className="relative bg-gradient-to-b from-gray-100 to-white rounded-2xl overflow-hidden shadow-inner">
                <img
                  className='transform w-fit group-hover:scale-110 transition-transform duration-500 px-6 py-8 md:px-8 md:py-10'
                  src='/images/logo-2.png'
                  alt='Logo'
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
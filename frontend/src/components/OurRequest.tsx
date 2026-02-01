export function OurRequestSection() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Target Section */}
          <div className="mb-20">
            <div className="max-w-sm mx-auto">
              <div className="relative  rounded-3xl p-1 border-4 border-emerald-600 shadow-lg bg-white">
                <div className="rounded-2xl p-8 text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-8">
                    আপনার টার্গেট
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

        {/* Logo Section */}
        <div className="relative flex justify-center items-center mt-40">
          <div className="relative group">

            {/* Main Logo Container */}
            <div className="relative overflow-hidden w-fit outline-4 outline-emerald-600 rounded-3xl flex justify-center items-center p-6 md:p-6 shadow-2xl">
              <div className="absolute inset-0 "></div>

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
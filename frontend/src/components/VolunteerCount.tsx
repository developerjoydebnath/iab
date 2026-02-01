import useSWR from "swr";
import api from "../lib/axios";

const fetcher = (url: string) => api.get(url).then(res => res.data);

const VolunteerCount = () => {
  const { data, error, isLoading } = useSWR('/volunteer-count', fetcher);

  // Skeleton loader
  if (isLoading) {
    return (
      <div className="bg-emerald-50 py-20">
        <div className="relative max-w-3xl w-full mx-auto px-4 sm:px-6">
          {/* Main Card - Skeleton */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
            {/* Current Count Section - Side by side layout */}
            <div className="flex justify-between items-center mb-8">
              {/* Current Volunteers Skeleton */}
              <div className="text-left flex-1">
                <div className="text-xs md:text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  বর্তমান স্বেচ্ছাসেবক
                </div>
                <div className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-none">
                  <div className="h-12 sm:h-16 md:h-20 bg-gray-200 rounded-lg animate-pulse w-32"></div>
                </div>
              </div>

              {/* Target Volunteers Skeleton */}
              <div className="text-right flex-1">
                <div className="text-xs md:text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  লক্ষ্যমাত্রা
                </div>
                <div className="text-3xl sm:text-5xl md:text-6xl font-black text-emerald-700 leading-none">
                  <div className="h-12 sm:h-16 md:h-20 bg-gray-200 rounded-lg animate-pulse w-32 ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Progress Bar Section Skeleton */}
            <div className="mb-8">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gray-300 rounded-full relative overflow-hidden w-1/3">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-24"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
              </div>
            </div>

            {/* Remaining Section Skeleton */}
            <div className="pt-6 border-t border-gray-200">
              <div className="text-base md:text-lg text-center text-gray-700 leading-relaxed">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-emerald-50">
        <div className="relative max-w-3xl w-full mx-auto -translate-y-20 md:-translate-y-28 lg:-translate-y-32 px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 text-center">
            <div className="text-red-500 text-lg">ডেটা লোড করতে সমস্যা হয়েছে</div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              আবার চেষ্টা করুন
            </button>
          </div>
        </div>
      </div>
    );
  }

  const current = data?.volunteer_count || 0;
  const target = 500000;
  const remaining = target - current;
  const progressPercentage = (current / target) * 100;

  return (
    <div className="bg-emerald-50 py-20">
      <div className="relative max-w-3xl w-full mx-auto px-4 sm:px-6">
        {/* Main Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
          {/* Current Count Section - Side by side layout */}
          <div className="flex justify-between items-center mb-8">
            {/* Current Volunteers */}
            <div className="text-left flex-1">
              <div className="text-xs md:text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                বর্তমান স্বেচ্ছাসেবক
              </div>
              <div className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-none">
                {current.toLocaleString('bn-BD')}
              </div>
            </div>

            {/* Target Volunteers */}
            <div className="text-right flex-1">
              <div className="text-xs md:text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                লক্ষ্যমাত্রা
              </div>
              <div className="text-3xl sm:text-5xl md:text-6xl font-black text-emerald-700 leading-none">
                {target.toLocaleString('bn-BD')}
              </div>
            </div>
          </div>

          {/* Progress Bar Section */}
          <div className="mb-8">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full relative overflow-hidden transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-semibold text-gray-800">
                {progressPercentage.toFixed(1)}% পূর্ণ
              </span>
              <span className="text-gray-600 font-medium font-serif">
                {current.toLocaleString('bn-BD')} / {target.toLocaleString('bn-BD')}
              </span>
            </div>
          </div>

          {/* Remaining Section */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-base md:text-lg text-center text-gray-700 leading-relaxed">
              পেশীশক্তির রাজনীতি বন্ধ করতে আমাদের আরও{' '}
              <span className="font-black text-xl md:text-2xl text-emerald-600">
                {remaining.toLocaleString('bn-BD')}
              </span>{' '}
              জন স্বেচ্ছাসেবক প্রয়োজন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCount;
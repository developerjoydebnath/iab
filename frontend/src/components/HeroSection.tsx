import { Link } from 'react-router';
import { useAuthStore } from '../store/authStore';
import GoogleLogin from './GoogleLoginButton';
import Navbar from './Navbar';

export function HeroSection() {
  const { isAuthenticated, user } = useAuthStore();
  return (
    <div className="relative islamic-pattern bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 min-h-screen overflow-hidden">

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-32">

        <div className="flex flex-col items-center justify-center">
          <div className='col-span-full'>
            <h1 className='border border-white/50 px-4 sm:px-6 py-1.5 sm:py-2 mb-8 md:mb-8 rounded-full text-sm md:text-base font-serif font-medium bg-white/20 backdrop-blur-sm text-white'>পেশী শক্তি নয়, পরিবর্তন</h1>
          </div>
          <div>

            <h2 className="font-bn text-center text-[40px] md:text-[52px] lg:text-7xl font-bold text-white mb-8 md:mb-8 leading-[1.125]">
              এসো জনপ্রত্যাশার বাংলাদেশ গড়ি
              <br />
              <span className="text-[32px] md:text-[40px] lg:text-[52px] text-amber-100">আগামীর রাজনীতি বদলে দিবো,
                <br /> ঘরে বসেই</span>
            </h2>

            <p className='text-lg md:text-xl lg:text-xl text-center mx-auto lg:mx-0 max-w-4xl text-emerald-50 mb-8 leading-relaxed'>
              একটি জনকল্যাণমূলক রাষ্ট্র গড়তে আমরা প্রতিশ্রুতি বদ্ধ। ওদের আছে কালো টাকা আর পেশি শক্তির দাপট। আমাদের আছে মহান রবের আল্লাহর প্রতি অবিচল বিশ্বাস। আপনার মা/বাবা, ভাই/বোন, স্ত্রী/সন্তান, আত্নীয়সজন/পাড়া-পড়শীর ও বন্ধুবান্ধব <span className='text-xl md:text-[22px] lg:text-[22px] text-amber-400 font-bold'> সম্পর্কের কারণে আপনার কথার মুল্যে তাদের কাছে অনেক....  বেশি। বন্ধু বন্ধুত্বের  কারণে আপনার কথা ফেলতে পারে না। </span> আজ ঘরে বসেই আপনার ২ মিনিটের ফোন কল বদলে দিতে পারে জাতীয় <span className='text-amber-400 bold text-xl md:text-[22px] lg:text-[22px] font-bold'> নির্বাচন ২০২৬ </span> এর ফলাফল, কর‍তে পারে <span className='text-amber-400 bold text-xl md:text-[22px] lg:text-[22px] font-bold'>গেইম চেঞ্জ।।</span></p>

            <p className="text-lg md:text-xl lg:text-xl text-center mx-auto lg:mx-0 text-emerald-50 mb-8 leading-relaxed">
              স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন। <br /> <span className='text-lg'>বিশ্বের যে কোন জায়গা থেকে স্বেচ্ছাসেবক হতে পারবেন</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <GoogleLogin />
              {isAuthenticated ? (
                <Link
                  to={user?.role === 'admin' ? "/admin/dashboard" : "/volunteer/dashboard"}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 text-lg rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন
                </Link>
              ) : (
                <Link
                  to="/supporter-registration?role=volunteer"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 text-lg rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

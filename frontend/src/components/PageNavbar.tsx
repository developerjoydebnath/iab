import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useAuthStore } from '../store/authStore';

export function PageNavbar() {
  const { isAuthenticated, user } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openMenu = () => {
    setMobileMenuOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setMobileMenuOpen(false), 300);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Full Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden islamic-pattern fixed inset-0 z-50 bg-gradient-to-b from-emerald-700 to-emerald-900 flex flex-col transition-all duration-300 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Mobile Menu Header */}
          <div className={`flex items-center justify-between px-6 py-6 transition-all duration-300 delay-100 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
            <Link to="/" className="bg-white p-2 rounded-full shadow-lg h-14 w-14 flex items-center justify-center">
              <img src="/images/logo-1.png" alt="LOGO" className='h-full w-full object-contain' />
            </Link>
            <button
              className="text-white hover:text-emerald-300 p-2"
              onClick={closeMenu}
            >
              <X size={36} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            <Link
              to="/about"
              className={`text-2xl font-bold text-white hover:text-emerald-300 transition-all duration-300 delay-150 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onClick={closeMenu}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/why-vote"
              className={`text-2xl font-bold text-white hover:text-emerald-300 transition-all duration-300 delay-200 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onClick={closeMenu}
            >
              কেন ভোট দিবেন
            </Link>
            <Link
              to="/candidates"
              className={`text-2xl font-bold text-white hover:text-emerald-300 transition-all duration-300 delay-250 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onClick={closeMenu}
            >
              প্রার্থীগণ
            </Link>
            <Link
              to="/contact"
              className={`text-2xl font-bold text-white hover:text-emerald-300 transition-all duration-300 delay-250 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              onClick={closeMenu}
            >
              যোগাযোগ
            </Link>
            {isAuthenticated ? (
              <Link
                to={user?.role === 'admin' ? "/admin/dashboard" : "/volunteer/dashboard"}
                className={`mt-4 w-full max-w-xs bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 delay-300 text-center shadow-lg ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                onClick={closeMenu}
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <Link
                to="/supporter-registration"
                className={`mt-4 w-full max-w-xs bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 delay-300 text-center shadow-lg ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                onClick={closeMenu}
              >
                স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন
              </Link>
            )}
          </div>

          {/* Social Icons */}
          <div className={`flex items-center justify-center gap-4 pb-8 transition-all duration-300 delay-[350ms] ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <a href="https://www.facebook.com/iab87" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://x.com/IAB_1987" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="https://www.instagram.com/iab.official" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.youtube.com/islamiandolanbd" target='_blank' className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-white hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative islamic-pattern z-20 px-6 py-6 bg-gradient-to-r from-emerald-700 to-green-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-lg h-16 w-16 flex items-center justify-center">
              <img src="/images/logo-1.png" alt="LOGO" className='h-full w-full object-contain' />
            </div>
            <div>
              <h1 className="font-bn text-white text-2xl font-bold">হাতপাখায় ভোট দিন</h1>
              <p className="text-emerald-100 text-sm">ইসলামী আন্দোলন বাংলাদেশ</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-white hover:text-emerald-100 transition-colors">আমাদের সম্পর্কে</Link>
            <Link to="/why-vote" className="text-white hover:text-emerald-100 transition-colors">কেন ভোট দিবেন</Link>
            <Link to="/candidates" className="text-white hover:text-emerald-100 transition-colors">প্রার্থীগণ</Link>
            <Link to="/contact" className="text-white hover:text-emerald-100 transition-colors">যোগাযোগ</Link>
            {isAuthenticated ? (
              <Link 
                to={user?.role === 'admin' ? "/admin/dashboard" : "/volunteer/dashboard"} 
                className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg ml-2"
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <Link to="/supporter-registration" className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg ml-2">
                স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={openMenu}
          >
            <Menu size={36} />
          </button>
        </div>
      </nav>
    </>
  );
}

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export function PageNavbar() {
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
              to="/supporter-registration"
              className={`mt-4 w-full max-w-xs bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 delay-300 text-center shadow-lg ${isAnimating ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
              onClick={closeMenu}
            >
              নিবন্ধন করুন
            </Link>
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
            <Link to="/supporter-registration" className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg ml-2">
              নিবন্ধন করুন
            </Link>
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

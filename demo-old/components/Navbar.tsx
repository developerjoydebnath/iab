import { IMAGES, PARTY_NAME } from '@/constants';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${scrolled && !menuOpen ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3 border-b border-gray-100' :
        menuOpen ? 'bg-white py-3' : 'bg-transparent py-6'
        }`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between gap-4 items-center">
          <a href="#hero" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <img src={IMAGES.IAB_LOGO} alt="Logo" className="rounded-md w-14 h-14 min-w-14 min-h-14 object-contain" />
            </div>
            <span className={`sm:flex hidden text-lg sm:text-xl font-black tracking-tighter transition-colors ${scrolled ? 'text-bd-green' : 'text-bd-green'}`}>{PARTY_NAME}</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['লক্ষ্য', 'আপডেট', 'ভোটার তথ্য যাচাই'].map((item, idx) => (
              <a key={idx} href={['#vision', '#news', '#search-voter'][idx]} className="text-sm font-black text-gray-800 hover:text-bd-red transition-all uppercase tracking-wider relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bd-red group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#join" className="bg-bd-green text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-bd-red transition-all shadow-lg shadow-bd-green/20 font-serif-bn">
              পরামর্শ দিন
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden h-12 w-12 flex justify-center items-center rounded-xl active:scale-90 transition-all z-50 ${menuOpen ? 'text-bd-red bg-bd-red/10' : 'text-bd-green bg-bd-green/10'
              }`}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] lg:hidden transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 relative">
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-bd-green/5 rounded-full blur-3xl"></div>

          {['লক্ষ্য', 'আপডেট', 'ভোটার তথ্য যাচাই'].map((item, idx) => (
            <a
              key={idx}
              href={['#vision', '#news', '#search-voter'][idx]}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black text-gray-900 hover:text-bd-red transition-all uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="w-full max-w-xs text-center bg-bd-red text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-bd-red-light transition-all shadow-xl shadow-bd-red/30"
          >
            পরামর্শ দিন
          </a>

          <div className="flex gap-6 mt-12">
            {['facebook-f', 'twitter', 'instagram', 'whatsapp'].map(icon => (
              <a key={icon} href="#" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-bd-green hover:text-white transition-all">
                <i className={`fa-brands fa-${icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

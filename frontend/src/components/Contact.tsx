import { Facebook, Instagram, Mail, MapPin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+8801635232926";
    const message = "Hello, I have a query from hatpakha.bd";
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleImoClick = () => {
    window.open('https://imo.me/8801635232926', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-bn font-bold text-4xl md:text-5xl lg:text-6xl text-emerald-900 mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            আপনার যদি কোন সমস্যা বা ভোটার তথ্য নিয়ে কোন প্রশ্ন থাকে, আমাদের সাথে সরাসরি যোগাযোগ করুন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Right Column - Contact Info */}
          {/* Office Address Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <MapPin size={24} className="text-emerald-700" />
              </div>
              <h3 className="font-bn font-bold text-2xl text-emerald-900">কার্যালয় ঠিকানা</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-800 mb-2">কেন্দ্রীয় কার্যালয়</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  ৫৫/বি (৩য় তলা), পুরানা পল্টন<br />
                  ঢাকা-১০০০, বাংলাদেশ
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-800 mb-2">ফোন ও ফ্যাক্স</h4>
                <div className="space-y-2 text-gray-700 text-lg">
                  <div>ফোন: <span className="font-bold">০২-৯৫৬৭১৩০</span></div>
                  <div>ফ্যাক্স: <span className="font-bold">০২-৭১৬১০৮০</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Email & Social Media Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Mail size={24} className="text-emerald-700" />
              </div>
              <h3 className="font-bn font-bold text-2xl text-emerald-900">ইমেইল ও সোশ্যাল মিডিয়া</h3>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-800 mb-3">ইমেইল ঠিকানা</h4>
                <a
                  href="mailto:info@hatpakha.bd"
                  className="inline-flex items-center gap-2 text-lg text-emerald-700 hover:text-emerald-800 font-medium"
                >
                  <Mail size={20} />
                  info@hatpakha.bd
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-bold text-emerald-800 mb-4">সামাজিক যোগাযোগ মাধ্যমে অনুসরণ করুন</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <a
                    href="https://www.facebook.com/iab87"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="group bg-emerald-100 hover:bg-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <Facebook size={28} className="text-emerald-700 mx-auto mb-2" />
                    <span className="text-sm font-medium text-emerald-800">Facebook</span>
                  </a>
                  <a
                    href="https://x.com/IAB_1987"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="group bg-emerald-100 hover:bg-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <Twitter size={28} className="text-emerald-700 mx-auto mb-2" />
                    <span className="text-sm font-medium text-emerald-800">Twitter</span>
                  </a>
                  <a
                    href="https://www.youtube.com/islamiandolanbd"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="group bg-emerald-100 hover:bg-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <Youtube size={28} className="text-emerald-700 mx-auto mb-2" />
                    <span className="text-sm font-medium text-emerald-800">YouTube</span>
                  </a>
                  <a
                    href="https://www.instagram.com/iab.official"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="group bg-emerald-100 hover:bg-emerald-200 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <Instagram size={28} className="text-emerald-700 mx-auto mb-2" />
                    <span className="text-sm font-medium text-emerald-800">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-emerald-200">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              আপনার যোগাযোগ আমাদের জন্য গুরুত্বপূর্ণ
            </h3>
            <p className="text-emerald-100 mb-8 text-lg">
              আমরা আপনার প্রতিটি প্রশ্ন এবং মতামত গুরুত্ব সহকারে বিবেচনা করি
            </p>

            <div className='border w-fit mx-auto px-6 sm:px-8 py-4 rounded-3xl text-2xl sm:text-3xl font-bold text-white mb-8 bg-white/20 backdrop-blur-sm'>
              +880 1635-232926
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors duration-200 text-lg"
              >
                WhatsApp এ বার্তা পাঠান
              </button>
              <button
                onClick={handleImoClick}
                className="bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-900 transition-colors duration-200 text-lg border border-white/20"
              >
                IMO তে বার্তা পাঠান
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
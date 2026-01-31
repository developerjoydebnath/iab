import { ArrowLeft, FileText, Home, Users, Vote } from 'lucide-react';
import { Link } from 'react-router';

export function Sitemap() {
  const sections = [
    {
      title: "মূল পাতা",
      links: [
        { label: "হোম", path: "/", icon: <Home size={18} /> },
        { label: "আমাদের সম্পর্কে", path: "/about", icon: <Users size={18} /> },
        { label: "কেন ভোট দিবেন", path: "/why-vote", icon: <Users size={18} /> },
        { label: "প্রার্থীগণ", path: "/candidates", icon: <Users size={18} /> },
        { label: "সমর্থক নিবন্ধন", path: "/supporter-registration", icon: <Vote size={18} /> },
      ]
    },
    {
      title: "নীতিমালা",
      links: [
        { label: "গোপনীয়তা নীতি", path: "/privacy", icon: <FileText size={18} /> },
        { label: "শর্তাবলী", path: "/terms", icon: <FileText size={18} /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            ফিরে যান
          </Link>
          <h1 className="text-4xl font-bold font-bn">সাইটম্যাপ</h1>
          <p className="mt-2 text-emerald-100">ওয়েবসাইটের সকল পৃষ্ঠার তালিকা</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100/50">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6 border-b border-gray-100 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    
                      <Link
                        to={link.path}
                        className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors group"
                      >
                        <span className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors text-emerald-600">
                          {link.icon}
                        </span>
                        <span className="font-medium">{link.label}</span>
                      </Link>
                  
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

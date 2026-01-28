
import React from 'react';
import { CANDIDATE_BIO, CANDIDATE_NAME, IMAGES } from '../constants';

const CandidateIntro: React.FC = () => {
   return (
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-bd-green/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>

         <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-16">
               {/* Visual Side */}
               <div className="lg:w-1/3 relative">
                  {/* Removed islamic-border, added standard border-radius */}
                  <div className="border-4 border-islamic-gold rounded-[30px] p-3 bg-white shadow-2xl relative z-10 group sticky top-24">
                     <div className="bg-slate-100 aspect-[3/4] overflow-hidden rounded-2xl">
                        <img
                           src={IMAGES.CANDIDATE_SIDE}
                           alt={CANDIDATE_NAME}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                           onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                     </div>
                     <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500 uppercase  font-black">প্রার্থীর নাম</p>
                        <p className="text-lg font-bold text-bd-green">{CANDIDATE_NAME}</p>
                        <p className="text-sm font-bold text-gray-800 mt-2">গাজীপুর ৫ সংসদ সদস্য পদপ্রার্থী</p>
                     </div>
                  </div>
               </div>

               {/* Text Side */}
               <div className="lg:w-2/3 space-y-10">
                  <div className="space-y-4">
                     <h2 className="text-islamic-gold font-black tracking-wider uppercase text-sm border-l-4 border-bd-green pl-4">প্রার্থীর সংক্ষিপ্ত পরিচিতি</h2>
                     <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 font-serif-bn leading-tight">{CANDIDATE_NAME}</h3>
                     <p className="text-lg sm:text-xl text-gray-600 font-medium italic">
                        "আমরা হযরত মুহাম্মদ (সা:) ও সাহাবিদের আদর্শ শুধু মুখে নয় বরং কর্মে বাস্তবায়ন করতে চাই।"
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     {/* Education */}
                     <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-islamic-gold/30 transition-colors">
                        <div className="w-12 h-12 bg-bd-green/10 rounded-xl flex items-center justify-center mb-6">
                           <i className="fa-solid fa-graduation-cap text-bd-green text-xl"></i>
                        </div>
                        <h4 className="text-xl font-black text-gray-900 mb-4 font-serif-bn">শিক্ষা জীবন</h4>
                        <ul className="space-y-3">
                           {CANDIDATE_BIO.education.map((edu, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                                 <i className="fa-solid fa-check text-islamic-gold mt-1"></i>
                                 {edu}
                              </li>
                           ))}
                        </ul>
                        <p className="mt-4 text-xs text-bd-green font-bold bg-bd-green/5 inline-block px-3 py-1 rounded-full">ত্রিধারা শিক্ষাব্যবস্থায় কৃতিত্বের স্বাক্ষর</p>
                     </div>

                     {/* Politics */}
                     <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-islamic-gold/30 transition-colors">
                        <div className="w-12 h-12 bg-islamic-gold/10 rounded-xl flex items-center justify-center mb-6">
                           <i className="fa-solid fa-landmark text-islamic-gold text-xl"></i>
                        </div>
                        <h4 className="text-xl font-black text-gray-900 mb-4 font-serif-bn">রাজনৈতিক জীবন</h4>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                           {CANDIDATE_BIO.politics}
                        </p>
                     </div>
                  </div>

                  <div className="bg-deep-green text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl relative overflow-hidden">
                     <div className="relative z-10">
                        <h4 className="text-xl font-black mb-4 font-serif-bn border-b border-white/20 pb-2 inline-block">কর্মজীবন ও লেখালেখি</h4>
                        <p className="text-emerald-50 leading-relaxed mb-4">
                           {CANDIDATE_BIO.career}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-islamic-gold font-bold">
                           <i className="fa-solid fa-plane"></i>
                           <span>বিদেশ ভ্রমণ: {CANDIDATE_BIO.travels}</span>
                        </div>
                     </div>
                     <div className="absolute right-0 bottom-0 opacity-10 text-9xl">
                        <i className="fa-solid fa-pen-nib"></i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CandidateIntro;

import { Droplet, GraduationCap, Heart, Stethoscope, Users, Wheat } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ActivitiesSection() {
  const activities = [
    {
      icon: Heart,
      title: 'সামাজিক সেবা',
      description: 'বিনামূল্যে খাদ্য বিতরণ, বস্ত্র সহায়তা ও দরিদ্রদের পাশে দাঁড়ানো',
      image: 'https://images.unsplash.com/photo-1638653051755-6092c26c7f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwY29tbXVuaXR5JTIwc2VydmljZSUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzY5NjIxMDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '৫০,০০০+ পরিবার'
    },
    {
      icon: GraduationCap,
      title: 'শিক্ষা কার্যক্রম',
      description: 'দরিদ্র মেধাবী শিক্ষার্থীদের বৃত্তি প্রদান ও শিক্ষা উপকরণ সহায়তা',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      stats: '১০,০০০+ শিক্ষার্থী'
    },
    {
      icon: Stethoscope,
      title: 'স্বাস্থ্যসেবা',
      description: 'বিনামূল্যে চিকিৎসা শিবির, ঔষধ বিতরণ ও স্বাস্থ্য পরামর্শ',
      image: 'https://images.unsplash.com/photo-1726390415318-e6872be3da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwaGVhbHRoY2FyZSUyMG1lZGljYWwlMjBjbGluaWN8ZW58MXx8fHwxNzY5NjIxMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '৩০,০০০+ রোগী'
    },
    {
      icon: Droplet,
      title: 'দুর্যোগ ব্যবস্থাপনা',
      description: 'বন্যা, ঘূর্ণিঝড় ও অন্যান্য দুর্যোগে জরুরি সাহায্য ও পুনর্বাসন',
      image: 'https://images.unsplash.com/photo-1640269930687-a7aa385a5f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwZmxvb2QlMjByZWxpZWYlMjBkaXNhc3RlcnxlbnwxfHx8fDE3Njk2MjEwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '২০,০০০+ পরিবার'
    },
    {
      icon: Wheat,
      title: 'কৃষি উন্নয়ন',
      description: 'কৃষকদের আধুনিক কৃষি প্রশিক্ষণ, বীজ ও সার সহায়তা',
      image: 'https://images.unsplash.com/photo-1761961851508-43db0337480a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwcnVyYWwlMjBkZXZlbG9wbWVudCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2OTYyMTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '১৫,০০০+ কৃষক'
    },
    {
      icon: Users,
      title: 'যুব উন্নয়ন',
      description: 'তরুণদের দক্ষতা উন্নয়ন প্রশিক্ষণ ও কর্মসংস্থান সহায়তা',
      image: 'https://images.unsplash.com/photo-1767330855462-978574a857f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwcGVvcGxlJTIwY3Jvd2QlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzY5NjIxMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '২৫,০০০+ যুবক'
    }
  ];

  return (
    <div id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            আমাদের কার্যক্রম
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            সারাদেশে আমরা মানুষের পাশে দাঁড়িয়ে কাজ করছি। জনকল্যাণই আমাদের লক্ষ্য।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-emerald-100"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <activity.icon size={20} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-semibold text-lg">
                    {activity.stats}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bn text-2xl font-bold text-emerald-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-emerald-700 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gradient-to-br from-emerald-700 to-green-700 rounded-3xl p-12 text-white">
          <div className="text-center">
            <h3 className="font-bn text-3xl font-bold mb-6">
              সামগ্রিক প্রভাব
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-5xl font-bold mb-2">১.৫ লক্ষ+</div>
                <div className="text-emerald-100">মানুষ উপকৃত হয়েছে</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">৬৪</div>
                <div className="text-emerald-100">জেলায় কার্যক্রম</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">৫ বছর</div>
                <div className="text-emerald-100">নিরবচ্ছিন্ন সেবা</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { CheckCircle, Mail, MapPin, Phone, Send, User } from 'lucide-react';
// import { useState } from 'react';

// export function SupporterFormSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     district: '',
//     constituency: '',
//     message: ''
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real application with backend, this would send data to server
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         district: '',
//         constituency: '',
//         message: ''
//       });
//     }, 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div id="support" className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 relative overflow-hidden">
//       {/* Decorative Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="font-bn text-4xl md:text-5xl font-bold text-white mb-4">
//             সমর্থক হিসেবে নিবন্ধন করুন
//           </h2>
//           <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
//             আপনার সমর্থন আমাদের শক্তি। আমাদের সাথে যুক্ত হয়ে দেশ গড়ার অংশীদার হন।
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Form */}
//           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
//             {!isSubmitted ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-emerald-900 font-semibold mb-2">
//                     পূর্ণ নাম *
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600" size={20} />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="আপনার নাম লিখুন"
//                       className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-emerald-900"
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-emerald-900 font-semibold mb-2">
//                     মোবাইল নম্বর *
//                   </label>
//                   <div className="relative">
//                     <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600" size={20} />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       placeholder="০১৭xxxxxxxx"
//                       className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-emerald-900"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-emerald-900 font-semibold mb-2">
//                     ইমেইল (ঐচ্ছিক)
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600" size={20} />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="your@email.com"
//                       className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-emerald-900"
//                     />
//                   </div>
//                 </div>

//                 {/* Constituency */}
//                 <div>
//                   <label className="block text-emerald-900 font-semibold mb-2">
//                     আসন (ঐচ্ছিক)
//                   </label>
//                   <input
//                     type="text"
//                     name="constituency"
//                     value={formData.constituency}
//                     onChange={handleChange}
//                     placeholder="যেমন: ঢাকা-১"
//                     className="w-full px-4 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-emerald-900"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-emerald-900 font-semibold mb-2">
//                     বার্তা (ঐচ্ছিক)
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                     placeholder="আপনার মতামত বা পরামর্শ লিখুন..."
//                     className="w-full px-4 py-4 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-emerald-900 resize-none"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-5 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
//                 >
//                   <Send size={24} />
//                   নিবন্ধন সম্পন্ন করুন
//                 </button>
//               </form>
//             ) : (
//               <div className="text-center py-12">
//                 <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6">
//                   <CheckCircle className="text-emerald-600" size={48} />
//                 </div>
//                 <h3 className="font-bn text-3xl font-bold text-emerald-900 mb-4">
//                   ধন্যবাদ!
//                 </h3>
//                 <p className="text-xl text-emerald-700">
//                   আপনার নিবন্ধন সফলভাবে সম্পন্ন হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Info Section */}
//           <div className="text-white space-y-8">
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//               <h3 className="font-bn text-2xl font-bold mb-4">কেন নিবন্ধন করবেন?</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="flex-shrink-0 mt-1" size={24} />
//                   <span className="text-emerald-50">নির্বাচনী কার্যক্রমের নিয়মিত আপডেট পাবেন</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="flex-shrink-0 mt-1" size={24} />
//                   <span className="text-emerald-50">স্বেচ্ছাসেবক হিসেবে কাজ করার সুযোগ</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="flex-shrink-0 mt-1" size={24} />
//                   <span className="text-emerald-50">এলাকার প্রার্থীর সাথে সরাসরি যোগাযোগ</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <CheckCircle className="flex-shrink-0 mt-1" size={24} />
//                   <span className="text-emerald-50">পার্টির কর্মসূচিতে অংশগ্রহণের আমন্ত্রণ</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//               <h3 className="font-bn text-2xl font-bold mb-4">যোগাযোগ</h3>
//               <div className="space-y-3 text-emerald-50">
//                 <p className="flex items-center gap-3">
//                   <Phone size={20} />
//                   <span>হটলাইন: ০৯৬১২-৩৪৫৬৭৮</span>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Mail size={20} />
//                   <span>info@islamiandolon.bd</span>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <MapPin size={20} />
//                   <span>কেন্দ্রীয় কার্যালয়, ঢাকা</span>
//                 </p>
//               </div>
//             </div>

//             <div className="bg-amber-500 rounded-2xl p-6 text-center">
//               <p className="text-amber-900 font-semibold text-lg">
//                 আপনার তথ্য সম্পূর্ণ গোপনীয় ও সুরক্ষিত থাকবে
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Lock, MapPin, Phone, Send, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';

// Helper to clean mobile number
const cleanMobileNumber = (val: string) => {
  if (val.startsWith('+88')) {
    return val.replace('+88', '');
  }
  return val;
};

const formSchema = z.object({
  name: z.string().min(2, { message: "নাম কমপক্ষে ২ অক্ষরের হতে হবে" }),
  mobile: z.string().transform(cleanMobileNumber).refine((val) => /^01[3-9]\d{8}$/.test(val), {
    message: "সঠিক ১ digit মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)",
  }),
  password: z.string().min(6, { message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে" }),
  confirmPassword: z.string(),
  seat_id: z.string().min(1, "আসন নির্বাচন করুন"),
  division_id: z.string().min(1, "বিভাগ নির্বাচন করুন"),
  district_id: z.string().min(1, "জেলা নির্বাচন করুন"),
  upazila_id: z.string().min(1, "উপজেলা নির্বাচন করুন"),
  union_id: z.string().min(1, "ইউনিয়ন নির্বাচন করুন"),
  message: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "পাসওয়ার্ড মিলছে না",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

export function SupporterFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Geo Data States
  const [divisions, setDivisions] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [upazilas, setUpazilas] = useState<any[]>([]);
  const [unions, setUnions] = useState<any[]>([]);
  const [seats, setSeats] = useState<any[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      seat_id: "",
      division_id: "",
      district_id: "",
      upazila_id: "",
      union_id: "",
      message: "",
    },
  });

  // Base API URL - Assuming local backend for now or proxy
  const API_BASE = 'http://localhost:8000/api';

  useEffect(() => {
    // Initial Fetch: Divisions and Seats
    const fetchInitial = async () => {
      try {
        const [divRes, seatRes] = await Promise.all([
          fetch(`${API_BASE}/divisions`),
          fetch(`${API_BASE}/seats`)
        ]); // Removed catch here to let it fail silently or log in outer catch if needed, but fetch doesn't throw on 404
        if (divRes.ok) setDivisions(await divRes.json());
        if (seatRes.ok) setSeats(await seatRes.json());
      } catch (error) {
        console.error("Failed to fetch initial data", error);
      }
    };
    fetchInitial();
  }, []);

  const handleDivisionChange = async (divisionId: string) => {
    form.setValue('district_id', '');
    form.setValue('upazila_id', '');
    form.setValue('union_id', '');
    setDistricts([]);
    setUpazilas([]);
    setUnions([]);

    if (!divisionId) return;

    try {
      const res = await fetch(`${API_BASE}/districts?pid=${divisionId}`);
      if (res.ok) setDistricts(await res.json());
    } catch (error) {
      console.error("Failed to fetch districts", error);
    }
  };

  const handleDistrictChange = async (districtId: string) => {
    form.setValue('upazila_id', '');
    form.setValue('union_id', '');
    setUpazilas([]);
    setUnions([]);

    if (!districtId) return;

    try {
      const res = await fetch(`${API_BASE}/upazilas?pid=${districtId}`);
      if (res.ok) setUpazilas(await res.json());
    } catch (error) {
      console.error("Failed to fetch upazilas", error);
    }
  };

  const handleUpazilaChange = async (upazilaId: string) => {
    form.setValue('union_id', '');
    setUnions([]);

    if (!upazilaId) return;

    try {
      const res = await fetch(`${API_BASE}/unions?pid=${upazilaId}`);
      if (res.ok) setUnions(await res.json());
    } catch (error) {
      console.error("Failed to fetch unions", error);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      // API expects password_confirmation, Zod has confirmPassword. Map it.
      const payload = {
        ...values,
        password_confirmation: values.confirmPassword,
      };

      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Registration failed", data);
        // Can handle server errors here (e.g., mobile already taken)
        if (data.mobile) {
          form.setError('mobile', { message: data.mobile[0] });
        }
      }
    } catch (error) {
      console.error("Network error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="support" className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-white mb-4">
            সমর্থক হিসেবে নিবন্ধন করুন
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            আপনার সমর্থন আমাদের শক্তি। আমাদের সাথে যুক্ত হয়ে দেশ গড়ার অংশীদার হন।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="inline-flex bg-green-100 text-green-600 p-6 rounded-full mb-6">
                  <CheckCircle size={64} />
                </div>
                <h3 className="text-3xl font-bold text-emerald-900 mb-4">অভিনন্দন!</h3>
                <p className="text-emerald-700 text-lg">
                  আপনার নিবন্ধন সফল হয়েছে। আমাদের সাথে থাকার জন্য ধন্যবাদ।
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-emerald-900">পূর্ণ নাম *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input placeholder="আপনার নাম লিখুন" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mobile */}
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-emerald-900">মোবাইল নম্বর *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input placeholder="০১৭xxxxxxxx" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Password & Confirm */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-emerald-900">পাসওয়ার্ড *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <Input type="password" placeholder="******" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-emerald-900">পুনরায় পাসওয়ার্ড *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <Input type="password" placeholder="******" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Seat */}
                  <FormField
                    control={form.control}
                    name="seat_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-emerald-900">আসন / সিট *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="আসন নির্বাচন করুন" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {seats.map((seat) => (
                              <SelectItem key={seat.id} value={seat.id.toString()}>
                                {seat.seat_no} - {seat.seat_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Geo Cascading */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="division_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-emerald-900">বিভাগ *</FormLabel>
                          <Select onValueChange={(val) => {
                            field.onChange(val);
                            handleDivisionChange(val);
                          }} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {divisions.map((div) => (
                                <SelectItem key={div.id} value={div.id.toString()}>
                                  {div.bn_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="district_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-emerald-900">জেলা *</FormLabel>
                          <Select
                            disabled={!form.getValues('division_id')}
                            onValueChange={(val) => {
                              field.onChange(val);
                              handleDistrictChange(val);
                            }}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="জেলা নির্বাচন করুন" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {districts.map((dist) => (
                                <SelectItem key={dist.id} value={dist.id.toString()}>
                                  {dist.bn_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="upazila_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-emerald-900">উপজেলা *</FormLabel>
                          <Select
                            disabled={!form.getValues('district_id')}
                            onValueChange={(val) => {
                              field.onChange(val);
                              handleUpazilaChange(val);
                            }} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="উপজেলা নির্বাচন করুন" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {upazilas.map((upz) => (
                                <SelectItem key={upz.id} value={upz.id.toString()}>
                                  {upz.bn_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="union_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-emerald-900">ইউনিয়ন *</FormLabel>
                          <Select
                            disabled={!form.getValues('upazila_id')}
                            onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="ইউনিয়ন নির্বাচন করুন" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {unions.map((uni) => (
                                <SelectItem key={uni.id} value={uni.id.toString()}>
                                  {uni.bn_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-emerald-900">বার্তা (ঐচ্ছিক)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="আপনার কোন পরামর্শ বা বার্তা থাকলে লিখুন..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        অপেক্ষা করুন...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>নিবন্ধন সম্পন্ন করুন</span>
                        <Send size={18} />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Contact Info (Static Side) */}
          <div className="text-white space-y-8 mt-8">
            <h3 className="font-bn text-3xl font-bold mb-6">যোগাযোগের ঠিকানা</h3>
            <div className="bg-emerald-800/30 backdrop-blur-md rounded-2xl p-8 border border-emerald-500/30">
              <div className="hover:bg-emerald-800/40 transition-all rounded-xl p-4 -mx-4">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <MapPin className="text-emerald-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">কেন্দ্রীয় কার্যালয়</h4>
                    <p className="text-emerald-100">৮৫/১, পুরানা পল্টন লাইন,<br />ঢাকা-১০০০</p>
                  </div>
                </div>
              </div>

              <div className="hover:bg-emerald-800/40 transition-all rounded-xl p-4 -mx-4 mt-2">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Phone className="text-emerald-300" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">হটলাইন</h4>
                    <p className="text-emerald-100">+৮৮০ ২ ৯৩৫xxxx</p>
                    <p className="text-emerald-100">+৮৮০ ১৭১১ xxxxxx</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/50 rounded-2xl p-8 mt-8">
              <h4 className="font-bold text-xl mb-4">স্বেচ্ছাসেবক হতে চান?</h4>
              <p className="text-emerald-200 mb-6">
                আমাদের প্রচারণায় সরাসরি অংশগ্রহণ করতে চাইলে সরাসরি যোগাযোগ করুন অথবা ফর্মের মন্তব্যের ঘরে উল্লেখ করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
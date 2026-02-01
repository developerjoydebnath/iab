import { zodResolver } from '@hookform/resolvers/zod';
import { Check, CheckCircle, ChevronsUpDown, Phone, Send, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../components/ui/command';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { cn } from '../components/ui/utils';
import api from '../lib/axios';

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
    message: "সঠিক ১১ digit মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)",
  }),
  seat_id: z.string().min(1, "আসন নির্বাচন করুন"),
  division_id: z.string().min(1, "বিভাগ নির্বাচন করুন"),
  district_id: z.string().min(1, "জেলা নির্বাচন করুন"),
  upazila_id: z.string().min(1, "উপজেলা নির্বাচন করুন"),
  union_id: z.string().min(1, "ইউনিয়ন নির্বাচন করুন"),
  is_volunteer: z.string(),
  message: z.string().optional(),
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
  const [seatOpen, setSeatOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      seat_id: "",
      division_id: "",
      district_id: "",
      upazila_id: "",
      union_id: "",
      is_volunteer: "false",
      message: "",
    },
  });

  useEffect(() => {
    // Initial Fetch: Divisions and Seats
    const fetchInitial = async () => {
      try {
        const [divRes, seatRes] = await Promise.all([
          api.get('/divisions'),
          api.get('/seats')
        ]);
        setDivisions(divRes.data);
        setSeats(seatRes.data);
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
      const res = await api.get(`/districts?pid=${divisionId}`);
      setDistricts(res.data);
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
      const res = await api.get(`/upazilas?pid=${districtId}`);
      setUpazilas(res.data);
    } catch (error) {
      console.error("Failed to fetch upazilas", error);
    }
  };

  const handleUpazilaChange = async (upazilaId: string) => {
    form.setValue('union_id', '');
    setUnions([]);

    if (!upazilaId) return;

    try {
      const res = await api.get(`/unions?pid=${upazilaId}`);
      setUnions(res.data);
    } catch (error) {
      console.error("Failed to fetch unions", error);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      // API expects boolean for is_volunteer
      const payload = {
        ...values,
        is_volunteer: values.is_volunteer === "true",
      };

      await api.post('/auth/register', payload);

      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000); // Keep it visible longer so they can see the success message
    } catch (error: any) {
      if (error.response) {
        const data = error.response.data;
        console.error("Registration failed", data);
        // Can handle server errors here (e.g., mobile already taken)
        if (data.mobile) {
          form.setError('mobile', { message: data.mobile[0] });
        }
      } else {
        console.error("Network error", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="support" className="py-20 islamic-pattern bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-white mb-4">
            ভোটার হিসেবে নিবন্ধন করুন
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            আপনার সমর্থন আমাদের শক্তি। আমাদের সাথে যুক্ত হয়ে দেশ গড়ার অংশীদার হন।
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white flex justify-center items-center h-full w-full rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-20 w-full flex-1">
                <div className="inline-flex bg-green-100 text-green-600 p-6 rounded-full mb-6">
                  <CheckCircle size={64} />
                </div>
                <h3 className="text-3xl font-bold text-emerald-900 mb-4">অভিনন্দন!</h3>
                <p className="text-emerald-700 text-lg">
                  আপনার নিবন্ধন সফল হয়েছে। আমাদের সাথে থাকার জন্য ধন্যবাদ। ইনশাআল্লাহ এবার বিজয় আমাদের এই হবে। জনপ্রত্যাশার বাংলাদেশ গড়তে সমর্থন দিয়ে পাশেই থাকবেন। এবারের লড়াই ইনসাফের লড়াই।
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full flex-1">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className='relative'>
                        <FormLabel className="font-bold text-emerald-900">পূর্ণ নাম *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input placeholder="আপনার নাম লিখুন" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Mobile */}
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem className='relative'>
                        <FormLabel className="font-bold text-emerald-900">মোবাইল নম্বর *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input placeholder="01xxxxxxxxx" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Seat */}
                  <FormField
                    control={form.control}
                    name="seat_id"
                    render={({ field }) => (
                      <FormItem className="relative flex flex-col">
                        <FormLabel className="font-bold text-emerald-900">আসন / সিট *</FormLabel>
                        <Popover open={seatOpen} onOpenChange={setSeatOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              aria-expanded={seatOpen}
                              className={cn(
                                "w-full justify-between border border-gray-300 font-normal h-9",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? (() => {
                                  const seat = seats.find((s) => s.id.toString() === field.value);
                                  return seat ? `${seat.seat_no} - ${seat.seat_name}` : "আসন নির্বাচন করুন";
                                })()
                                : "আসন নির্বাচন করুন"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-(--radix-popover-trigger-width) border-gray-300 p-0" align="start" sideOffset={4}>
                            <Command
                              filter={(value, search) => {
                                const seat = seats.find((s) => s.id.toString() === value);
                                if (!seat) return 0;
                                const searchLower = search.toLowerCase();
                                const matchNo = seat.seat_no.toString().includes(search);
                                const matchName = seat.seat_name.toLowerCase().includes(searchLower);
                                return matchNo || matchName ? 1 : 0;
                              }}
                            >
                              <CommandInput placeholder="আসন খুঁজুন..." />
                              <CommandList>
                                <CommandEmpty>কোন আসন পাওয়া যায়নি</CommandEmpty>
                                <CommandGroup>
                                  {seats.map((seat) => (
                                    <CommandItem
                                      key={seat.id}
                                      className='hover:bg-gray-200 cursor-pointer'
                                      value={seat.id.toString()}
                                      onSelect={(currentValue) => {
                                        field.onChange(currentValue === field.value ? "" : currentValue);
                                        setSeatOpen(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          field.value === seat.id.toString() ? "opacity-100" : "opacity-0"
                                        )}
                                      />
                                      {seat.seat_no} - {seat.seat_name}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
                      </FormItem>
                    )}
                  />




                  {/* Volunteer Status */}
                  {/* <FormField
                    control={form.control}
                    name="is_volunteer"
                    render={({ field }) => (
                      <FormItem className="space-y-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                        <FormLabel className="font-bold text-emerald-900">আপনি কি স্বেচ্ছাসেবক হতে ইচ্ছুক? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="false" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer text-emerald-900">
                                না, আমি শুধু সমর্থক হিসেবে থাকতে চাই
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="true" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer text-emerald-900 font-bold">
                                হ্যাঁ, আমি স্বেচ্ছাসেবক হিসেবে কাজ করতে চাই
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  {/* Geo Cascading */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                    <FormField
                      control={form.control}
                      name="division_id"
                      render={({ field }) => (
                        <FormItem className="relative">
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
                          <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="district_id"
                      render={({ field }) => (
                        <FormItem className="relative">
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
                          <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="upazila_id"
                      render={({ field }) => (
                        <FormItem className="relative">
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
                          <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="union_id"
                      render={({ field }) => (
                        <FormItem className="relative">
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
                          <FormMessage className="absolute left-0 top-full mt-1 text-xs" />
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
        </div>
      </div>
    </div>
  );
}
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Phone } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Location, useLocation, useNavigate } from 'react-router';
import * as z from 'zod';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import { Button } from '../../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { useAuthStore } from '../../store/authStore';

const formSchema = z.object({
  mobile: z.string().min(11, "১১ ডিজিটের মোবাইল নম্বর দিন").max(11, "১১ ডিজিটের মোবাইল নম্বর দিন"),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"),
});

type FormValues = z.infer<typeof formSchema>;

export function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      password: "",
    },
  });

  const location = useLocation();
  const state = location.state as { from?: Location };

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        login(result.access_token, result.user);
        
        // Handle redirect back to where user came from
        const from = state?.from?.pathname || (result.user.role === 'admin' ? '/admin/dashboard' : '/volunteer/dashboard');
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">প্রবেশ</h1>
          <p className="text-gray-500">দয়া করে আপনার ক্রেডেনশিয়াল দিয়ে লগইন করুন</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>মোবাইল</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input placeholder="01xxxxxxxxx" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>পাসওয়ার্ড</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input type="password" placeholder="******" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full text-white bg-emerald-700 hover:bg-emerald-800"
              disabled={loading}
            >
              {loading ? 'প্রবেশ করা হচ্ছে...' : 'প্রবেশ করুন'}
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">অথবা</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <GoogleLoginButton btnLabel="Google দিয়ে প্রবেশ করুন" />
              </div>
              <div className="flex justify-center">
                <Button 
                  type='button' 
                  variant="outline" 
                   className='w-fit border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-full py-6 font-bold'
                  onClick={() => navigate('/supporter-registration?role=volunteer')}
                >
                  স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

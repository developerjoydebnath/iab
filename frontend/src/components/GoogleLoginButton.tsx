import { useGoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { mutate } from 'swr';
import api from '../lib/axios';
import { useAuthStore } from '../store/authStore';
import { Button } from './ui/button';

export default function GoogleLogin({ btnLabel }: { btnLabel?: string }) {
  const { login: loginStore } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: async (response: any) => {
      const res = await api.post(
        `/auth/google`,
        { token: response.access_token }
      );

      if (!res.data.access_token || !res.data.user) {
        console.error("Invalid login response", res.data);
        return;
      }

      toast.success("Congratulations! You are added as a volunteer successfully");

      loginStore(res.data.access_token, res.data.user);
      mutate((url: string) => url.includes('/volunteer-count'));
    },
    onError: () => {
      toast.error("Login Failed! Please try again.");
    }
  });

  return (
    <Button onClick={() => login()} className="border bg-white h-auto px-6 py-3 lg:px-8 lg:py-4 shadow-xl rounded-full text-lg font-bold gap-2">
      <img src="/images/google.webp" alt="google" className='h-6 w-6' />
      {btnLabel || 'Signup With Google'}
    </Button>
  );
}

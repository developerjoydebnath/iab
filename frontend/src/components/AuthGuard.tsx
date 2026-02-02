import { Navigate, useLocation } from 'react-router';
import { useAuthStore } from '../store/authStore';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get('role');

  // Special case: Allow /supporter-registration?role=volunteer for unauthenticated users
  if (location.pathname === '/supporter-registration' && role === 'volunteer') {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

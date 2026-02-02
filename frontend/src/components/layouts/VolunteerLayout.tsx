import { Globe, LayoutDashboard, LogOut, Menu, UserPlus, Users, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router';
import { useAuthStore } from '../../store/authStore';

export function VolunteerLayout() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isAuthenticated || user?.role !== 'volunteer') {
    return <Navigate to="/login" replace />; // Or maybe a separate volunteer login?
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden bg-emerald-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bn font-bold">স্বেচ্ছাসেবক প্যানেল</h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-emerald-900 text-white flex flex-col transition-transform duration-300 ease-in-out overflow-y-auto
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-emerald-800">
          <h1 className="text-xl font-bn font-bold">স্বেচ্ছাসেবক প্যানেল</h1>
          <p className="text-sm text-emerald-300">ইসলামী আন্দোলন বাংলাদেশ</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/volunteer/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/volunteer/dashboard') ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/50'}`}
          >
            <LayoutDashboard size={20} />
            ড্যাশবোর্ড
          </Link>
          <Link
            to="/volunteer/users"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/volunteer/users') ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/50'}`}
          >
            <Users size={20} />
            আমার তালিকা
          </Link>
          <Link
            to="/volunteer/register-user"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/volunteer/register-user') ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/50'}`}
          >
            <UserPlus size={20} />
            নতুন ভোটার নিবন্ধন
          </Link>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-emerald-100 hover:bg-emerald-800/50"
          >
            <Globe size={20} />
            ওয়েবসাইটে যান
          </Link>
        </nav>

        <div className="p-4 border-t border-emerald-800">
          <div className='mb-4 px-4'>
             <p className='text-xs text-emerald-400'>স্বেচ্ছাসেবক</p>
             <p className='font-bold'>{user.name}</p>
          </div>
          <button
            onClick={() => {
              logout();
              navigate('/', { replace: true });
            }}
            className="flex items-center gap-3 w-full px-4 py-3 text-emerald-100 hover:bg-emerald-800/50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            লগআউট
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="p-4 md:p-8 pb-20 md:pb-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

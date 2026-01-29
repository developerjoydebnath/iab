import { LayoutDashboard, LogOut, Users } from 'lucide-react';
import { Link, Navigate, Outlet, useLocation } from 'react-router';
import { useAuthStore } from '../../store/authStore';

export function AdminLayout() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-900 text-white flex flex-col">
        <div className="p-6 border-b border-emerald-800">
          <h1 className="text-2xl font-bn font-bold">অ্যাডমিন প্যানেল</h1>
          <p className="text-sm text-emerald-300">ইসলামী আন্দোলন বাংলাদেশ</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/admin/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/dashboard') ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/50'}`}
          >
            <LayoutDashboard size={20} />
            ড্যাশবোর্ড
          </Link>
          <Link
            to="/admin/users"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin/users') ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-800/50'}`}
          >
            <Users size={20} />
            ব্যবহারকারী
          </Link>
        </nav>

        <div className="p-4 border-t border-emerald-800">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-emerald-100 hover:bg-emerald-800/50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            লগআউট
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

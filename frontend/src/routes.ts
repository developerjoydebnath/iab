import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Sitemap } from "./components/Sitemap";
import { Terms } from "./components/Terms";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminLogin } from "./pages/admin/Login";
import { AdminUsers } from "./pages/admin/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/sitemap",
    Component: Sitemap,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms",
    Component: Terms,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        path: "dashboard",
        Component: AdminDashboard,
      },
      {
        path: "users",
        Component: AdminUsers,
      },
    ],
  },
  {
    path: "*",
    Component: Home,
  },
]);

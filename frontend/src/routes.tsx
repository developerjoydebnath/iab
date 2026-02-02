import { createBrowserRouter } from "react-router";
import { AuthGuard } from "./components/AuthGuard";
import { Home } from "./components/Home";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { VolunteerLayout } from "./components/layouts/VolunteerLayout";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Sitemap } from "./components/Sitemap";
import { Terms } from "./components/Terms";
import { About } from "./pages/About";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminLogin } from "./pages/admin/Login";
import { AdminUsers } from "./pages/admin/Users";
import { Candidates } from "./pages/Candidates";
import { ContactPage } from "./pages/ContactPage";
import { SupporterRegistration } from "./pages/SupporterRegistration";
import { VolunteerDashboard } from "./pages/volunteer/Dashboard";
import { VolunteerUserRegistration } from "./pages/volunteer/UserRegistration";
import { VolunteerUsers } from "./pages/volunteer/Users";
import { WhyVote } from "./pages/WhyVote";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AuthGuard><About /></AuthGuard>,
  },
  {
    path: "/contact",
    element: <AuthGuard><ContactPage /></AuthGuard>,
  },
  {
    path: "/why-vote",
    element: <AuthGuard><WhyVote /></AuthGuard>,
  },
  {
    path: "/candidates",
    element: <AuthGuard><Candidates /></AuthGuard>,
  },
  {
    path: "/sitemap",
    element: <AuthGuard><Sitemap /></AuthGuard>,
  },
  {
    path: "/privacy",
    element: <AuthGuard><PrivacyPolicy /></AuthGuard>,
  },
  {
    path: "/terms",
    element: <AuthGuard><Terms /></AuthGuard>,
  },
  {
    path: "/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
    ],
  },
  {
    path: "/volunteer",
    element: <VolunteerLayout />,
    children: [
      {
        path: "dashboard",
        element: <VolunteerDashboard />,
      },
      {
        path: "users",
        element: <VolunteerUsers />,
      },
      {
        path: "register-user",
        element: <VolunteerUserRegistration />,
      },
    ],
  },
  {
    path: "/supporter-registration",
    element: <AuthGuard><SupporterRegistration /></AuthGuard>,
  },
  {
    path: "*",
    element: <AuthGuard><Home /></AuthGuard>,
  },
]);

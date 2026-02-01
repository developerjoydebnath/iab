import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { AdminLayout } from "./components/layouts/AdminLayout";
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
import { WhyVote } from "./pages/WhyVote";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/why-vote",
    Component: WhyVote,
  },
  {
    path: "/candidates",
    Component: Candidates,
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
    path: "/supporter-registration",
    Component: SupporterRegistration,
  },
  {
    path: "*",
    Component: Home,
  },
]);

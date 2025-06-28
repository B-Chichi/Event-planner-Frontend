import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/home";
import { DashboardLayout } from "./Pages/Dashboard";
import { AddEventPage } from "./Pages/Add-Event";
import { CalendarPage } from "./Pages/Calendar";
import { LoginForm } from "./components/login-form";
import { SignInForm } from "./components/signin-form";
import { ProfilePage } from "./Pages/Profile";
import { SettingsPage } from "./Pages/Settings";
import AboutUs from "./components/Layout/AboutUs";
import BookingTicket from "./components/Layout/BookingTicket";
import { Toaster } from "react-hot-toast";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/booking",
    element:<BookingTicket/>
  },
  {
    path: "/signin",
    element: <SignInForm />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/add-event",
    element: <AddEventPage />,
  },
  {
    path: "/about-us",
    element:<AboutUs/>
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right"/>
    <RouterProvider router={routes} />
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {HomePage} from './Pages/home'
import { DashboardLayout } from "./Pages/Dashboard";
import EventForm from "./components/Layout/Event-Form";
import Calendar2 from "./components/calendar-02";
import { LoginForm } from './components/login-form'
import { SignInForm } from './components/signin-form'
import Profile from './components/Layout/Profile'
import Settings from './components/Layout/Settings'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element:<LoginForm/>
  },
  {
    path: "/signin",
    element: <SignInForm/>
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/settings",
    element:<Settings/>
  },
  {
    path: "/add-event",
    element: <EventForm />,
  },
  {
    path: "/calendar",
    element: <Calendar2 />,
  },
  {
    path: "/profile",
    element:<Profile/>
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)

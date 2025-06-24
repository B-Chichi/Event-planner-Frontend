import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/home'
import { DashboardLayout } from "./Pages/Dashboard";
import EventForm from "./components/Layout/Event-Form";
import Calendar2 from "./components/calendar-02";
import { LoginForm } from './components/login-form'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/home", 
    element:<Homepage/>
  },
  {
    path: "/login",
    element:<LoginForm/>
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/add-event",
    element:<EventForm/>
  },
  {
    path: "/calendar",
    element:<Calendar2/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)

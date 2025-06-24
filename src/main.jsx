import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./Pages/Dashboard";
import { LoginForm } from "./components/login-form";
import EventForm from "./components/Layout/Event-Form";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/add-event",
    element:<EventForm/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

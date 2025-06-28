import * as React from "react";
import {
  Home,
  LayoutDashboard,
  Calendar,
  Trash2,
  SquarePlusIcon,
  Settings,
  User,
  List,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

export function AppSidebar({ ...props }) {
  const navigate = useNavigate()

  const data = {
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: Home,
      },
      {
        title: "My Events",
        url: "/dashboard",
        icon: List,
      },
      {
        title: "Profile",
        url: "/profile",
        icon: User,
      },
      {
        title: "Add Event",
        url: "/add-event",
        icon: SquarePlusIcon,
      },
    ],
    navSecondary: [
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
      },
      {
        title: "Logout",
        onClick: () => {
          localStorage.removeItem("access_token");
          navigate("/login")
        },
        icon: Trash2,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  };

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <h1 className="text-2xl">Event Planner</h1>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent className=" text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-12">
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

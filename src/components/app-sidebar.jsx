import * as React from "react";
import {
  Home,
  LayoutDashboard,
  Calendar,
  Trash2,
  SquarePlusIcon,
  Settings,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
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
      url: "/login",
      icon: Trash2,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <h1 className="text-2xl">Event Planner</h1>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

import * as React from "react";
import { Home, LayoutDashboard, Calendar, Trash2 } from "lucide-react";

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
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: false,
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Logout",
      url: "#",
      icon: Trash2,
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

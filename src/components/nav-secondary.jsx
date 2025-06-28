import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({ items, ...props }) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </button>
                ) : (
                  <a href={item.url} className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                )}
              </SidebarMenuButton>
              {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

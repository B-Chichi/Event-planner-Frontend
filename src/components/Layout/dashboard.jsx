import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";


export function Dashboard({ children }) {
  
  return (
    <SidebarProvider>
      <AppSidebar className="text-gray-900 dark:bg-gray-900 dark:text-black px-6 py-12" />
      <SidebarInset className="min-h-screen text-gray-900 dark:bg-gray-900 dark:text-black px-6 py-12">
        <header className="flex h-5 shrink-0 items-center pt-4">
          <div className="flex flex-1 items-center px-3">
            <SidebarTrigger />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-3 px-4 py-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

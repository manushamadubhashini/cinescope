import { AdminSidebar } from "@/components/admin-sidebar";
import UserNav from "@/components/user-nav";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export const metadata = {
  title: "Cinescope | Admin Dashboard",
  description: "Movie Database and Management Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    //  <div className="min-h-screen bg-yellow-100 flex ">
    //   {/* side bar */}
    //   <div className="bg-green-200 flex-2">side bar</div>
    //   <div className="bg-pink-500 flex-10 flex flex-col">
    //     <div className="bg-purple-500 flex-1">header</div>
    //     <div className="bg-orange-300 flex-10">{children}</div>
    //   </div>
    //   {/* {children} */}
    //   </div>
    <SidebarProvider>
      {/* 1 . sidebar section */}
      <AdminSidebar />
      {/* 2 . Main content area */}
      <SidebarInset>
        <header className="sticky top-0 z-50 bg-background border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            {/* user navigation dropdown */}
           <UserNav/>
          </div>
        </header>
        <main className="flex p-4 md:p-8">{children}</main>
         {/* big sizes p-8 */}
      </SidebarInset>
    </SidebarProvider>
  );
}

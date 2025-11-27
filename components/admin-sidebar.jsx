"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import {
  BarChart,
  BarChartIcon,
  FilmIcon,
  Home,
  HomeIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
  Users,
  UsersIcon,
} from "lucide-react";
import { Logo } from "./logo";
import ModeToggle from "./mode-toggle";
import Link from "next/link";

const menuItem = [
  { title: "Dashboard", href: "/dashboard", icon: HomeIcon, exact: true },
  { title: "Movies", href: "/dashboard/movies", icon: FilmIcon },
  { title: "Users", href: "/dashboard/users", icon: UsersIcon },
  { title: "Reviews", href: "/dashboard/reviews", icon: MessageSquareIcon },
  { title: "Analytics", href: "/dashboard/analytics", icon: BarChartIcon },
  { title: "Setting", href: "/dashboard/settings", icon: SettingsIcon },
];
const accountItem = [
  { title: "Profile", href: "/dashboard/profile", icon: UserIcon },
  { title: "Public Site", href: "/", icon: FilmIcon },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (item) =>{
    if (item.exact) {
      return pathname === item.href;
    }
    if(item.href === '/'){
      return pathname === '/';
    }
    return pathname.startsWith(item.href);
  }
  // if current path same it is  active 
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col">
        <div className="flex items-center p-2">
          <Logo />
          <h2 className="text-xl font-bold ml-2">CineScope</h2>
          <div className="ml-auto flex items-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                  className={isActive(item) ? 'bg-primary/20 font-medium' : ''}
                  asChild>
                    <Link href={item.href}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                   className={isActive(item) ? 'bg-primary/20 font-medium' : ''}
                   asChild>
                    <Link href={item.href}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

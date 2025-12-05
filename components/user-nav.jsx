import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon, SettingsIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
export default function UserNav() {
  return (
    //  <div className="h-8 w-8 bg-amber-200 rounded-full"></div>
    <DropdownMenu>
      {/* // trigger as de0fault button */}
      <DropdownMenuTrigger asChild>
        <Avatar className="h-10 w-10 border-2 border-primary">
          <AvatarImage src="https://github.com/shadcn.png" />
          {/* when fallback to avator */}
          <AvatarFallback className="bg-primary text-white">CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="flex flex-col space-y-1">
          <div>
            <p className="text-sm font-medium leading-none">Admin User</p>
            <p className="text-muted-foreground text-xs leading-none">
              {" "}
              manusha@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">
            <UserIcon className="h-4 w-4 mr-2" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/setting">
            <SettingsIcon className="h-4 w-4 mr-2" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem >
            <LogOutIcon className="h-4 w-4 mr-2" />
            <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

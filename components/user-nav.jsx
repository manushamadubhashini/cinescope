import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        <DropdownMenuLabel>
            <div>
                <p>Admin Account</p>
                <p className="text-xs text-gray-400"> manusha@gmail.com</p>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="text-sm text-gray-500">
        Workspace &gt; Folder 2 &gt;{" "}
        <span className="font-medium text-black">Spreadsheet 3</span>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search within sheet"
          className="w-64 text-sm px-3 py-1.5"
        />

        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </div>

        <div className="flex items-center space-x-2">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://i.pravatar.cc/40?u=john"
              alt="John Doe"
              className="h-full w-full object-cover"
            />
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-gray-500">john.doe@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

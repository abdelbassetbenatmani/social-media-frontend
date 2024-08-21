import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "../Feeds/hooks/useGetUsers";
import useDeleteStory from "./hooks/useDeleteStory";

export const UserInfo = ({ user }: { user: User }) => {
  const { deleteStory } = useDeleteStory();
  return (
    <div className="relative z-10 flex items-center justify-between mt-[10px] text-white">
      <div className="flex items-center">
        <Avatar className="w-8 h-8">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.username}</AvatarFallback>
        </Avatar>
        <p className="flex items-center gap-x-1">
          <span className="ml-2 text-sm font-semibold text-white">{user.username}</span>
          <span className="material-symbols-outlined">verified</span>
          <span className="ml-2 text-[#D9D9D9]">32 min</span>
        </p>
      </div>
      <div className="flex items-center gap-x-3">
        <img src="/icons/pause.svg" alt="" />
        <img src="/icons/mute.svg" alt="" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="block font-bold material-symbols-outlined">more_vert</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => deleteStory(user.stories[0].id)}>
              <span className="material-symbols-outlined">delete</span>
              <span className="font-medium">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

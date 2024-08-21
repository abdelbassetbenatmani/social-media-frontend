import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FriendProps } from "@/lib/friends";


const SuggestionCard = ({ name, role, avatar }: FriendProps) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-x-[10px]">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="flex items-center font-semibold gap-x-1">
            <span>{name}</span>
            <span className="material-symbols-rounded">verified</span>
          </h3>
          <p className="text-[#808080] text-xs">{role}</p>
        </div>
      </div>
      <button className="rounded-full border-2 font-semibold border-brand py-1 px-[17px]">Follow</button>
    </div>
  );
};

export default SuggestionCard;

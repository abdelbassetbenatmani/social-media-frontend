import { friends } from "@/lib/friends";
import { cn } from "@/lib/utils";

const RightSidebar = () => {
  return (
    <div className="hidden bg-white w-0 md:block md:w-[100px] fixed right-0 shadow-md h-[calc(100vh-55px)] ">
      <div className="flex flex-col items-center justify-center py-4 space-y-4 border-b border-black">
        <div className="bg-[#ECECEC] w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <span className="material-symbols-rounded">chat_bubble</span>
        </div>
        <div className="bg-[#ECECEC] w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <span className="material-symbols-rounded">group_add</span>
        </div>
      </div>

      {/* Fiends list */}
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        {friends.slice(0, 6).map((friend, index) => (
          <div key={index} className={cn("flex flex-col items-center justify-center relative")}>
            <img src={friend.avatar} alt={friend.name} className="w-[50px] h-[50px] rounded-full" />
            {/* online status */}
            <div className="absolute bottom-1 right-0 w-[10px] h-[10px] bg-green-500 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
      <div className="bg-[#ECECEC] absolute bottom-10 w-[50px] h-[50px]  rounded-full flex items-center justify-center">
        <span className="material-symbols-rounded">person_search</span>
      </div>
      </div>
    </div>
  );
};

export default RightSidebar;

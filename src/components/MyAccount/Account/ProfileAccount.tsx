import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AccountAnalytics from "./AccountAnalytics";

const ProfileAccount = () => {
  return (
    <div className="rounded-[20px] w-full shadow-md max-h-[200px] bg-white">
      <div className="rounded-[20px] h-[100px] w-full">
        <img
          className="rounded-t-[20px] h-full bg-cover w-full"
          src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="max-h-12 rounded-b-[20px] flex">
        <Avatar className="w-[75px] h-[75px] -translate-y-11 ml-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2">
          <div className="flex items-center mt-1 gap-x-1">
            <h2 className="font-semibold">Shadrach Odekhe</h2>
            <span className="material-symbols-rounded ">verified</span>
            <span className="material-symbols-rounded text-[#808080]">fiber_new</span>
          </div>
          <p className="text-[#808080] flex items-center gap-x-2 text-[11px] lg:text-sm">
            <span>Software Developer</span>
          </p>
        </div>
      
      </div>
      <AccountAnalytics/>
    </div>
  );
};

export default ProfileAccount;

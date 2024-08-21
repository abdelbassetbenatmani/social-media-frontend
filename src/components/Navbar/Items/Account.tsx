import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Account = () => {
  return (
    <div className="lg:bg-[#ECECEC] lg:h-10 lg:w-[120px]  rounded-full flex items-center ml-6 mr-3">
      <Avatar className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="hidden ml-2 text-sm font-semibold lg:block">Ibrahim</span>
    </div>
  );
};

export default Account;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FileInputForm from "./UploadStoryInput";
import useGetUsers from "./hooks/useGetUsers";
import { Link } from "react-router-dom";

const Stories = () => {
  const users = useGetUsers();

  return (
    <div className="relative w-full">
      <div className="bg-[#f0f2f5] flex items-center gap-x-4 overflow-x-auto lg:overflow-x-hidden lg:bg-white lg:rounded-[20px] lg:shadow-md border-black/20 py-3 pl-3 scrollbar-hide">
        {users.map((friend, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center">
            <Link to={`/stories`}>
              <Avatar className="w-[60px] h-[60px] min-w-[60px] min-h-[60px]">
                <AvatarImage src={friend.avatar} />
                <AvatarFallback>{friend.username}</AvatarFallback>
              </Avatar>
            </Link>
            <span className="text-xs text-center truncate max-w-[70px]">{friend.username}</span>

            {/* the user can upload story */}
            {index === 0 && <FileInputForm />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;

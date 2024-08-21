import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PostAnalytics from "./PostAnalytics";

export interface PostCardProps {
  image: string;
  role: string;
  username: string;
  caption: string;
  avatar: string;
  likes: number;
  comments: number;
  views: number;
  appreciate: number;
}

const PostCard = ({
  image,
  role,
  username,
  caption,
  avatar,
  likes,
  comments,
  views,
  appreciate,
}: PostCardProps) => {
  return (
    <div className="rounded-[12px] lg:rounded-[25px] shadow-md border border-black/20 p-[15px] w-full bg-white">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-x-4">
            <img
              src={avatar}
              alt="avatar"
              className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-x-1">
                <h2 className="font-semibold">{username}</h2>
                <span className="material-symbols-rounded ">verified</span>
                <span className="font-semibold text-brand">Follow</span>
              </div>
              <p className="text-[#808080] flex items-center gap-x-2 text-[11px] lg:text-sm">
                <span>{role} </span>
                <span> 5week</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-x-2">
            <span className="block font-bold material-symbols-outlined">bookmark</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="block material-symbols-rounded">more_vert</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="my-[10px]">
          <p>{caption}</p>
        </div>
        <img src={image} alt="post" className="w-full rounded-2xl h-[340px] lg:h-[600px] bg-cover" />
      </div>
      <PostAnalytics appreciate={appreciate} likes={likes} comments={comments} views={views}/>
    </div>
  );
};

export default PostCard;

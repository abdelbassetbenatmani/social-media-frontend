import { User } from "../Feeds/hooks/useGetUsers";
import ProgressBar from "../progressbar/ProgressBar";
import { CarouselItem } from "../ui/carousel";
import { GradientOverlay } from "./GradientOverlay";
import StoryReaction from "./StoryReaction";
import { UserInfo } from "./UserInfo";

export const UserStory = ({ user }: { user: User }) => {
  if (user.stories.length === 0 || !user.stories[0].content) {
    return null;
  }

  
  return (
    <CarouselItem className="rounded-[15px]">
      <div
        className="flex flex-col justify-between h-[900px] w-[523px] py-4 px-5 rounded-2xl relative bg-cover bg-center"
        style={{ backgroundImage: `url(https://social-media-backend-phi-one.vercel.app/uploads/${user.stories[0].content})` }}>
        <div>
          <ProgressBar />
          <UserInfo user={user} />
        </div>
        <StoryReaction />
        <GradientOverlay rotate="-rotate-180" position="top-0" />
        <GradientOverlay rotate="" position="bottom-0" />
      </div>
    </CarouselItem>
  );
};

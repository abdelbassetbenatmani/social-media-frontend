import useGetUsers from "@/components/Feeds/hooks/useGetUsers";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


import { useRef } from "react";
import { UserStory } from "@/components/Stories/UserStory";
import CloseButton from "@/components/CloseButton";

const Stories = () => {
  const users = useGetUsers();
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-[#1a1a1a]">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-xl"
      >
        <CarouselContent>
          {users.map((user, index) => (
            <UserStory key={index} user={user} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <CloseButton/>
    </div>
  );
};

export default Stories;

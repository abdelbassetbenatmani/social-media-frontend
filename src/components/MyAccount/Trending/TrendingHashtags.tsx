import { useState, useEffect } from 'react';
import { hashtags } from "@/lib/hashtags";
import TrendingItem from "./TrendingItem";
import { Separator } from "@/components/ui/separator";

const TrendingHashtags = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = 1100; // Change this value to the desired scroll position
      setIsFixed(scrollTop > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`rounded-[20px] w-full shadow-md p-4 bg-white max-w-[350px] ${isFixed ? 'fixed top-16' : 'relative'}`}>
      <h2 className="mb-6 text-base font-bold">People you may know</h2>
      <div className="flex flex-col">
        {hashtags.map((hashtag, index) => (
          <div key={index}>
          <TrendingItem icon={hashtag.icon} title={hashtag.title} post={hashtag.post} />
          {(index + 1) % 3 === 0 && index !== hashtags.length - 1 ? <Separator className="my-2" /> : null}
        </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingHashtags;
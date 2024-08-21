import { posts } from "@/lib/posts";
import Stories from "./Stories";
import PostCard from "./Post/PostCard";

const Feeds = () => {
  return (
    <div className="max-w-[629px] w-full ">
      <Stories />
      <div className="mt-1.5 space-y-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;

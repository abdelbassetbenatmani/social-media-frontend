
interface PostAnalyticsProps {
    comments: number;
    views: number;
    likes: number;
    appreciate: number;
    }

const PostAnalytics = ({
    comments,
    views,
    likes,
    appreciate,
}:PostAnalyticsProps) => {
  return (
    <div className="flex items-center justify-between mt-[10px] px-4">
      <div className="flex flex-col items-center justify-center">
        <img src="/icons/comments.png" alt="comments" className="w-6 h-6" />
        <span className="text-[10px] lg:text-sm text-[#414142]">{comments} Comments</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/icons/views.png" alt="views" className="w-6 h-6" />
        <span className="text-[10px] lg:text-sm text-[#414142]">{views} views</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/icons/Like.png" alt="like" className="w-6 h-6" />
        <span className="text-[10px] lg:text-sm text-[#414142]">{likes} Likes </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/icons/workspace_premium.png" alt="workspace_premium" className="w-6 h-6" />
        <span className="text-[10px] lg:text-sm text-[#414142]">{appreciate} Appreciate </span>
      </div>
    </div>
  );
};

export default PostAnalytics;

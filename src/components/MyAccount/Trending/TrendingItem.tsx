import { Badge } from "@/components/ui/badge";

export interface TrendingItemProps {
  icon: string;
  title: string;
  post: string;
}

const TrendingItem = ({ icon, title, post }: TrendingItemProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-x-3">
        <span className="material-symbols-rounded">{icon}</span>
        <p>#{title}</p>
      </div>
      <Badge className="text-xs bg-[#F0F2F5] text-black">{post} Posts</Badge>
    </div>
  );
};

export default TrendingItem;

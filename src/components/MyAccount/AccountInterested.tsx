import Ads from "./Ads";
import PeopleSuggestion from "./PeopleSuggestion";
import ProfileAccount from "./Account/ProfileAccount";
import ToDo from "./Todo/ToDo";
import TrendingHashtags from "./Trending/TrendingHashtags";

const AccountInterested = () => {
  return (
    <div className="hidden lg:block lg:max-w-[350px] h-screen space-y-4">
      <ProfileAccount />
      <TrendingHashtags />
      <ToDo />
      <PeopleSuggestion />
      <Ads />
    </div>
  );
};

export default AccountInterested;

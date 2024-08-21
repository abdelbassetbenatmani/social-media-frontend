import { friends } from "@/lib/friends"
import SuggestionCard from "./SuggestionCard"

const PeopleSuggestion = () => {
  return (
    <div className="rounded-[20px] w-full shadow-md p-4 bg-white">
        <h2 className="mb-6 text-base font-semibold">People you may know</h2>

        <div className="flex flex-col space-y-5">
          {
            friends.slice(0,3).map((friend, index) => (
              <SuggestionCard key={index} {...friend} />
            ))
          }
        </div>
    </div>
  )
}

export default PeopleSuggestion
import Comment from "./Comment"
import Like from "./Like"

const StoryReaction = () => {
  return (
    <div className="z-10 flex items-center gap-x-3">
        <Comment/>
        <Like/>
    </div>
  )
}

export default StoryReaction
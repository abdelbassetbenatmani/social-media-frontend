const Comment = () => {
  return (
    <div className="rounded-[20px] border border-white w-full">
      <form action="" className="flex items-center justify-between">
        <input type="text" name="" id="" className="text-white bg-transparent outline-none ml-[18px] text-sm placeholder:text-white w-full" placeholder="Replay to name of the person" />
        <button type="submit" className="flex items-center justify-center w-10 h-10 border relative border-white rounded-full min-h-10 min-w-10 -right-[1px]">
          <span className="ml-1 text-white material-symbols-outlined">send</span>
        </button>
      </form>
    </div>
  );
};

export default Comment;

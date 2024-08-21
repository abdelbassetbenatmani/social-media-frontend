const Notifications = () => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="relative items-center justify-center hidden lg:flex">
        <span className="material-symbols-outlined">forum</span>
        <div className="absolute top-0 right-0 w-1 h-1 rounded-full bg-brand"></div>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="material-symbols-outlined">notifications</span>
        <div className="absolute flex items-center justify-center w-4 h-4 text-white rounded-full bg-brand -top-1 -right-1">8</div>
      </div>
    </div>
  );
};

export default Notifications;

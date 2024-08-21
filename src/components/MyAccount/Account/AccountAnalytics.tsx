const AccountAnalytics = () => {
  return (
    <div className="flex items-center justify-center pb-4 gap-x-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-center">220</h1>
        <p className="text-[#808080] text-sm">Posts</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-center">10.624</h1>
        <p className="text-[#808080] text-sm">Followers</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-center">1125</h1>
        <p className="text-[#808080] text-sm">Following</p>
      </div>
    </div>
  );
};

export default AccountAnalytics;

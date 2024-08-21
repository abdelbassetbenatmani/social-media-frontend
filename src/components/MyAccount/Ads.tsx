import { Button } from "../ui/button";

const Ads = () => {
  return (
    <div className="rounded-[20px] w-full shadow-md p-4 space-y-2 bg-white">
      <div className="bg-[#ececec] rounded-[15px] flex items-center w-full h-[160px]">
        <img src="/ads-1.png" alt="" />
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-sm">Ford Motor Company</h4>
          <span className="text-[#767676] text-xs">https://www.ford.com/usa</span>
          <h3 className="text-center">manufacturer headquartered in Dearborn</h3>
          <Button size={"sm"} className="bg-[#808080] text-white rounded-full text-sm  font-normal mt-1">
            Buy Now
          </Button>
        </div>
      </div>
      <div className="bg-[#ececec] rounded-[15px] flex items-center w-full h-[160px]">
        <img src="/ads-1.png" alt="" />
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-sm">Ford Motor Company</h4>
          <span className="text-[#767676] text-xs">https://www.ford.com/usa</span>
          <h3 className="text-center">manufacturer headquartered in Dearborn</h3>
          <Button size={"sm"} className="bg-[#808080] text-white rounded-full text-sm font-normal mt-1">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ads;

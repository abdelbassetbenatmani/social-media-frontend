import LargeSidebar from "./LargeSidebar";
import MediumSidebar from "./MediumSidebar";

const Sidebar = () => {
  return (
    <div className="w-0 fixed md:w-20 2xl:w-[282px] 2xl:min-w-[282px] shadow-md bg-white">
      <div className="hidden h-screen pt-16 md:block 2xl:hidden">
        <MediumSidebar/>
      </div>
      <div className="hidden h-[calc(100vh-55px)]  pt-20 2xl:block">
        <LargeSidebar/>
      </div>
    </div>
  );
};

export default Sidebar;

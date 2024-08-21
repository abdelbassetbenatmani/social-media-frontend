import Logo from "./Items/Logo";
import NavItems from "./NavItems";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <div className="w-full h-[55px] flex items-center justify-between  bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Logo />
      <div className="flex items-center justify-between  xl:w-[1104px] 2xl:w-[1212px] gap-x-20">
        <NavList />
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;

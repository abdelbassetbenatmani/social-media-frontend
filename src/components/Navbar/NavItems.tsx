import Account from "./Items/Account";
import Notifications from "./Items/Notifications";
import SearchInput from "./Items/SearchInput";
import Time from "./Items/Time";

const NavItems = () => {
  return (
    <div className="flex items-center w-full ">
      <Time />
      <SearchInput />
      <Notifications />
      <Account/>
    </div>
  );
};

export default NavItems;

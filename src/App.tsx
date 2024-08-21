import "./App.css";
import AddButton from "./components/AddButton";
import Feeds from "./components/Feeds/Feeds";
import AccountInterested from "./components/MyAccount/AccountInterested";
import BottomNavbar from "./components/Navbar/BottomNavbar";
import Navbar from "./components/Navbar/Navbar";
import RightSidebar from "./components/Sidebar/RightSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="flex items-start justify-between mt-[55px]">
        <Sidebar />
        <div className="flex items-start justify-center w-full gap-x-8 2xl:ml-[300px] lg:mt-5">
          <Feeds />
          <AccountInterested />
        </div>
        <RightSidebar />
      </div>
      <BottomNavbar />
      <Toaster />

      <AddButton/>
    </div>
  );
}

export default App;

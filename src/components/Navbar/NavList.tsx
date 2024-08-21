import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavList = () => {
  return (
    <Tabs defaultValue="timeline">
      <TabsList className="uppercase space-x-11 bg-white pt-[10px] hidden lg:flex">
        <TabsTrigger value="timeline" className="flex flex-col items-center justify-center">
          <img src="/icons/clarify.svg" alt="video" className="w-6 h-6" />
          <span className="text-[10px] uppercase text-brand tracking-widest">Timeline</span>
        </TabsTrigger>
        <TabsTrigger value="blogs" className="flex flex-col items-center justify-center">
          <img src="/icons/feed.svg" alt="video" className="w-6 h-6" />
          <span className="text-[10px] uppercase tracking-widest">Blogs</span>
        </TabsTrigger>
        <TabsTrigger value="videos" className="flex flex-col items-center justify-center">
          <img src="/icons/subscriptions.svg" alt="video" className="w-6 h-6" />
          <span className="text-[10px] uppercase tracking-widest">Videos</span>
        </TabsTrigger>
        <TabsTrigger value="messaging" className="flex flex-col items-center justify-center">
          {" "}
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[10px] uppercase tracking-widest">Messaging</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NavList;

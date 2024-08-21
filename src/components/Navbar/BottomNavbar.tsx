import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BottomNavbar = () => {
  return (
    // <div className="absolute bottom-0 left-0 right-0 lg:hidden w-full h-[45px] flex items-center justify-between  bg-white shadow-md">
    <Tabs
      defaultValue="timeline"
      className="fixed  bottom-0 left-0 right-0 lg:hidden w-full h-[45px] flex items-center justify-center  bg-white shadow-md">
      <TabsList className="space-x-5 uppercase bg-white">
        <TabsTrigger value="timeline" className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-10 h-6 rounded-full bg-brand/20">
            <span className="material-symbols-outlined text-brand">home</span>
          </div>
          <span className="text-[8px] uppercase text-brand tracking-widest">Timeline</span>
        </TabsTrigger>
        <TabsTrigger value="blogs" className="flex flex-col items-center justify-center">
          <img src="/icons/feed.svg" alt="video" className="w-6 h-6" />
          <span className="text-[8px] uppercase tracking-widest">Blogs</span>
        </TabsTrigger>
        <TabsTrigger value="videos" className="flex flex-col items-center justify-center">
          <img src="/icons/subscriptions.svg" alt="video" className="w-6 h-6" />
          <span className="text-[8px] uppercase tracking-widest">Videos</span>
        </TabsTrigger>
        <TabsTrigger value="messaging" className="flex flex-col items-center justify-center">
          {" "}
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[8px] uppercase tracking-widest">Messaging</span>
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="timeline">Timeline</TabsContent>
      <TabsContent value="blogs">Blogs</TabsContent>
      <TabsContent value="videos">Videos</TabsContent>
      <TabsContent value="messaging">Messaging</TabsContent> */}
    </Tabs>
    // </div>
  );
};

export default BottomNavbar;

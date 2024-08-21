import { sidebarLinks } from "@/lib/sidebarLinks";
import { cn } from "@/lib/utils";

const LargeSidebar = () => {
  return (
    <div className="flex flex-col w-full h-full px-4">
      {sidebarLinks.map((link, index) => (
        <div
          key={index}
          className={cn("flex  items-center p-3 gap-x-2 relative", index === 0 ? "bg-[#F0F2F5] rounded-2xl before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-[5px] before:rounded-r-md before:h-full before:bg-brand" : "")}>
          <span className="material-symbols-outlined text-brand">{link.icon}</span>
          <span className="text-[#434343] font-semibold">{link.name}</span>
        </div>
      ))}

        <div className="absolute flex items-center p-3 bottom-10 ab gap-x-2">
            <span className="material-symbols-outlined text-brand">settings</span>
            <span className="text-[#434343] font-semibold">Settings</span>
        </div>
    </div>
  );
};

export default LargeSidebar;

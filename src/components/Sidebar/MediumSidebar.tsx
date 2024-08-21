import { sidebarMediumLinks } from "@/lib/sidebarLinks";
import { cn } from "@/lib/utils";

const MediumSidebar = () => {
  return (
    <div className="flex flex-col w-full h-full px-4 space-y-5">
      {sidebarMediumLinks.map((link, index) => (
        <div
          key={index}
          className={cn(
            "flex  items-center flex-col justify-center  relative",
          )}>
          <span className="material-symbols-outlined text-[#1C1B1F]">{link.icon}</span>
          <span className="text-[#434343] text-xs text-center">{link.name}</span>
        </div>
      ))}

      <div className="absolute flex flex-col items-center justify-center bottom-20 ab gap-x-2">
        <span className="material-symbols-outlined text-[#1C1B1F]">settings</span>
        <span className="text-[#434343] text-xs text-center">Settings</span>
      </div>
    </div>
  );
};

export default MediumSidebar;

import { cn } from "@/lib/utils";
import "./checkbox.css";
interface TaskItemProps {
  variant: "completed" | "pending";
  name: string;
}

const TaskItem = ({ variant, name }: TaskItemProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-[15px] py-[5px] px-[10px] text-[15px] mb-3",
        variant === "completed" ? "bg-[#ececec] flex items-center justify-between" : "bg-brand/15"
      )}>
      <p className={cn("text-[15px]", variant === "completed" ? "text-[#808080] line-through" : "text-black")}>{name}</p>
      {variant === "completed" && (
        <label className="box w-[20px]">
          <input type="checkbox" />
          <div className="checkmark"></div>
        </label>
      )}
    </div>
  );
};

export default TaskItem;

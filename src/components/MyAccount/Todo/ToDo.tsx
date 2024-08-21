import { Button } from "../../ui/button";
import TaskItem from "./TaskItem";

const ToDo = () => {
  return (
    <div className="rounded-[20px] w-full shadow-md p-4 bg-white">
      <h2 className="mb-6 text-base font-semibold">3 Important Things To get done today</h2>
      <TaskItem variant="pending" name="Read pages 20 from marketing book" />
      <TaskItem variant="completed" name="Design a new logo" />
      <TaskItem
        variant="completed"
        name="Here is an example of putting long tasks that skip the first line"
      />

      <div className="flex justify-center">
        <Button variant="link" className="mx-auto text-center underline text-brand">
          View the calendar
        </Button>
      </div>
    </div>
  );
};

export default ToDo;

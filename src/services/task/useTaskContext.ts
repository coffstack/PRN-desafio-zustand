import { useContext } from "react";
import { TaskService } from "./taskTypes";
import { TaskContext } from "./providers/TaskProvider";

export function useTaskContext(): TaskService {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Toast must be used within a ToastProvider");
  }

  return context;
}

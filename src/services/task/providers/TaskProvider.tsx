import { createContext, useState } from "react";

import { Task, TaskService } from "../taskTypes";
import { mock } from "../mock";
import { utils } from "../../../utils/utils";

export const TaskContext = createContext<TaskService>({
  tasks: [],
  selectedTask: null,
  add: () => {},
  remove: () => {},
  update: () => {},
  select: () => {},
});

export function TaskProvider({ children }: React.PropsWithChildren<{}>) {
  const [tasks, setTasks] = useState<Task[]>(mock);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  function add(task: Omit<Task, "id">) {
    const newTask = {
      ...task,
      id: utils.uuidv4(),
    };
    setTasks((list) => [...list, newTask]);
    setSelectedTask(null);
  }

  function remove(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function update(task: Task) {
    const updatedList = tasks.map((item) =>
      item.id === task.id ? task : item
    );

    setTasks(updatedList);
    setSelectedTask(null);
  }

  function select(taskId: string) {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setSelectedTask(task);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        add,
        remove,
        update,
        select,
        selectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

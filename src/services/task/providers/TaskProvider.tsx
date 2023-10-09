import { createContext, useState } from "react";

import { Task, TaskService } from "../taskTypes";
import { mock } from "../mock";

export const TaskContext = createContext<TaskService>({
  tasks: [],
  selectedTask: null,
  selectTask: () => {},
  mode: "create",
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
});

export function TaskProvider({ children }: React.PropsWithChildren<{}>) {
  const [tasks, setTasks] = useState<TaskService["tasks"]>(mock);
  const [selectedTask, setSelectedTask] =
    useState<TaskService["selectedTask"]>(null);
  const [mode, setMode] = useState<TaskService["mode"]>("create");

  function addTask(_task: Task) {
    setTasks((old) => [...old, _task]);
  }

  function removeTask(taskId: number) {
    setTasks(tasks.filter((oldTask) => oldTask.id !== taskId));
  }

  function selectTask(taskId: number) {
    setMode("update");
    setSelectedTask(tasks.filter((oldTask) => oldTask.id === taskId)[0]);
  }

  function updateTask(_task: Task) {
    let newTaskList = tasks.map((oldTask) => {
      if (oldTask.id === _task.id) return _task;
      else return oldTask;
    });

    setTasks(newTaskList);
    setMode("create");
    setSelectedTask(null);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        selectedTask,
        mode,
        addTask,
        removeTask,
        selectTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

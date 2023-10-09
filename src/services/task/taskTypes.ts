export interface Task {
  id: number;
  message: string;
}

export interface TaskService {
  tasks: Task[];
  selectedTask: Task | null;
  mode: "create" | "update";
  selectTask: (taskId: number) => void;
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  updateTask: (task: Task) => void;
}

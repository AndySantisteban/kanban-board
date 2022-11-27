import { createContext, ReactNode } from "react";
import { InitialData } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";
import { status, Task } from "../models/task.model";
import { createUUID } from "../utils/uuid.utilities";

export type TaskContextType = {
  tasks: Task[];
  saveTask: (title: string, description: string) => void;
  deleteTask: (id: string) => void;
  changeStatus: (id: string, status: status) => void;
};

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  changeStatus: () => {},
  deleteTask: () => {},
  saveTask: () => {},
});

export interface TaskProviderProps {
  children: ReactNode;
}
const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("@data_task", InitialData);

  const saveTask = (title: string, description: string) => {
    const newTask: Task = {
      id: createUUID(),
      title: title,
      description: description,
      status: status.backlog,
    };
    setTasks([...tasks, newTask]);
  };

  const changeStatus = (id: string, status: status) => {
    tasks.filter((task) => {
      if (task.id === id) {
        task.status = status;
        setTasks([...tasks]);
      }
    });
  };

  const deleteTask = (id: string) => {
    const filteredTask = tasks?.filter((item) => item.id !== id) ?? [];
    setTasks(filteredTask);
  };

  return (
    <TaskContext.Provider value={{ tasks, saveTask, changeStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

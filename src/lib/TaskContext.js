import React, { createContext, useState , useContext , useEffect} from "react";
import {getTasks, saveTasks} from "@/components/TaskService";

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load tasks from local Storage on first load
  useEffect(() => {
    setTasks(getTasks());
  }, []);

  // Save tasks to Local Storage whenever tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks ,  filter, setFilter  }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

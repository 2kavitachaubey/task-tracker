const STORAGE_KEY = "tasks";

// Fetch tasks from localStorage
export const getTasks = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save updated tasks to localStorage
export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
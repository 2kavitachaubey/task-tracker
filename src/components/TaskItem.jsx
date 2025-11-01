import React from "react";
import { useTasks } from "@/lib/TaskContext";

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useTasks();

  // Toggle a task between completed or pending
  const toggleComplete = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete Task
  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleComplete}
          />
          <span className="task-title">{task.title}</span>
        </div>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
      </div>
      <button onClick={deleteTask} className="delete-btn">🗑</button>
    </li>
  );
};

export default TaskItem;

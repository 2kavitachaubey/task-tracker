import React from "react";
import { useTasks } from "@/lib/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, filter, setFilter } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;  // if completed
    if (filter === "Pending") return !task.completed;  // not completed
    return true; // All tasks
  });

  return (
    <div className="task-list">
      <div className="filter-buttons">
        {["All", "Completed", "Pending"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;

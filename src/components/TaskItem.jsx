import React, { useState } from "react";
import { useTasks } from "@/lib/TaskContext";

const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editErrors, setEditErrors] = useState("");

  // Toggle a task between completed or pending
  const toggleComplete = () => {
    setTasks(
      tasks.map((value) =>
        value.id === task.id ? { ...value, completed: !value.completed } : t
      )
    );
  };

  // Delete Task
  const deleteTask = () => {
    setTasks(tasks.filter((value) => value.id !== task.id));
  };

  // edit task
  const saveEdit = () => {
    if (editTitle.trim() === "") {
      setEditErrors("Please fill this field");
      return;
    }
    setTasks(
      tasks.map((value) => {
        value.id === task.id
          ? { ...value, title: editTitle, description: editDescription }
          : value;
      })
    );
    setError("");
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        {isEditing ? (
          <div className="edit-section">
            <input
              type="text"
              placeholder="Task Title"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
                if (editErrors) setError("");
              }}
              className={editErrors && editTitle.trim() === "" ? "error-input" : ""}
            />
            {editErrors && <span className="error-text">{editErrors}</span>}
            <textarea
              placeholder="Task Description"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <button className="save-btn" onClick={saveEdit}>
              save
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="task-actions">
        {!isEditing && (
          <button onClick={() => setIsEditing(true)} className="edit-btn">
            Edit
          </button>
        )}
        <button onClick={deleteTask} className="delete-btn">
          🗑
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

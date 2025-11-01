import { useTasks } from "@/lib/TaskContext";
import React, { useState } from "react";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });

  // Global task state from Context
  const {tasks, setTasks} = useTasks();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "title") {
      setTaskTitle(value);
      if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
    }
    
    if (name === "taskDescription") {
      setTaskDescription(value);
      if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { title: "", description: "" };
    
    if (!taskTitle.trim()) {
      newErrors.title = "Please fill this field";
    }

    if (newErrors.title) {
      setErrors(newErrors);
      return;
    }

    //new task - unique ID and default 'not completed'
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
    
    //Reset 
    setTaskTitle("");
    setTaskDescription("");
    setErrors({ title: "", description: "" });
  };

  return (
    <div>
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title*</label>
          <input
            id="title"
            name="title"
            type="text"
            value={taskTitle}
            onChange={handleChange}
            className={errors.title ? "error-input" : ""}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div>
          <label htmlFor="taskDescription">Description</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={taskDescription}
            onChange={handleChange}
          />
        </div>

        <button type="submit">+ Add Task</button>
      </form>
      
    </div>
  );
};

export default TaskForm;
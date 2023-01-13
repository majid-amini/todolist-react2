import React from "react";

function AddTaskForm({ newtask, setNewTask, addTask }) {
  return (
    <div className="addTaskForm">
      <input
        value={newtask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
      ></input>
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default AddTaskForm;

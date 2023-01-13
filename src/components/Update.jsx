import React from "react";

function Update({updateData,changeTask,updateTask,cancelUpdate}) {
  return (
    <div className="editTaskForm">
      <input
        type="text"
        value={updateData && updateData.title}
        onChange={(e) => changeTask(e)}
      ></input>
      <button className="btn-edit" onClick={updateTask}>
        Edit
      </button>
      <button className="btn-cancel" onClick={cancelUpdate}>
        Cancel
      </button>
    </div>
  );
}

export default Update;

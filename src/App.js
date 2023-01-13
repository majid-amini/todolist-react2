import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  //tasks for todolist
  const [toDo, setTodo] = useState([]);

  //temporary tasks
  const [newtask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //add tasks

  const addTask = () => {
    if (newtask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newtask, status: false };
      setTodo([...toDo, newEntry]);
      setNewTask("");
    }
    // let number = {id: }
  };

  //delete Tasks
  const deleteTask = (id) => {
    let filteredTasks = toDo.filter((task) => task.id !== id);
    setTodo(filteredTasks);
  };

  //completed Tasks

  const completedTask = (id) => {
    let markTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(markTask);
  };

  //cancle Update

  const cancelUpdate = () => {
    setUpdateData("");
  };

  //change Task For Update

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //update Task

  const updateTask = () => {
    let filteredTasks = [...toDo].filter((task) => task.id !== updateData.id);
    let allItems = [...filteredTasks, updateData];
    setTodo(allItems);
    setUpdateData("");
  };

  return (
    <div className="App">
      <h2>TODO List</h2>

      {/* editTask form  */}
      {updateData && updateData ? (
        <div className="editTaskForm">
          <input
            type="text"
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
          ></input>
          <button className="btn-edit" onClick={updateTask}>
            Edit
          </button>
          <button className="btn-cancel" onClick={cancelUpdate}>Cancel</button>
        </div>
      ) : (
        /* addTask form  */
        <div className="addTaskForm">
          <input
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
          ></input>
          <button onClick={addTask}>Add task</button>
        </div>
      )}

      {/* Display todos */}
      <br></br>
      <div className="taskContainer">
        {toDo && toDo.length ? "" : "no tasks..."}

        {toDo &&
          toDo
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="tasksItems">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskContent">{task.title}</span>
                    </div>

                    <div className="iconsTotal">
                      <span
                        title="Completed / Not Completed"
                        onClick={(e) => completedTask(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>

                      {task.status ? null : (
                        <span
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
      </div>
    </div>
  );
}

export default App;

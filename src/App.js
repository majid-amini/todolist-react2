import "./App.css";
import { useState } from "react";

import AddTaskForm from "./components/AddTaskForm";
import Update from "./components/Update";
import ToDo from "./components/Todo";
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
        <Update
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        /* addTask form  */
        <AddTaskForm
          newtask={newtask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display todos */}
      <br></br>
      <div className="taskContainer">
        {toDo && toDo.length ? "" : "no tasks..."}
        <ToDo
          setUpdateData={setUpdateData}
          toDo={toDo}
          completedTask={completedTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
export default App;

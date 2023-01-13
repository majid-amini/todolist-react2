import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPen,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
function Todo({ setUpdateData, toDo, completedTask, deleteTask }) {
  return (
    <>
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
    </>
  );
}

export default Todo;

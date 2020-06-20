import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./Task.scss";

const Task = ({ task, index, isUpArrowHidden, isDownArrowHidden }) => {
  //console.log(isDownArrowHidden);
  const {
    deleteTask,
    findTask,
    configs,
    moveTaskUp,
    moveTaskDown,
  } = useContext(GlobalContext);

  const isTaskInfo = configs[0].showTaskInfo
    ? "task-info-bar-second-row"
    : "task-info-bar-second-row task-hidden";

  const isTaskInfoArrows = configs[0].showTaskInfo
    ? "task-btn"
    : "task-btn task-hidden";

  const isUpArrowHiddenBtn = isUpArrowHidden
    ? "task-btn task-hidden"
    : "task-btn";

  const isDownArrowHiddenBtn = isDownArrowHidden
    ? "task-btn task-arrow"
    : "task-btn";

  return (
    <li className="task-container">
      <div className="task-info-bar">
        <div>{task.title}</div>
        <div className={isTaskInfo}>
          <div>Priority: {task.priority}</div>
          <div>Today: {task.today === true ? "Yes" : "No"}</div>
        </div>
      </div>
      <div>
        <button
          className={(isTaskInfoArrows, isUpArrowHiddenBtn)}
          onClick={() => moveTaskUp(index)}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <button
          className={isTaskInfoArrows}
          onClick={() => moveTaskDown(index)}
        >
          <i className={`fas fa-chevron-down ${isDownArrowHiddenBtn}`}></i>
        </button>
        <button className="task-btn" onClick={() => findTask(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
        <button className="task-btn" onClick={() => deleteTask(task.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;

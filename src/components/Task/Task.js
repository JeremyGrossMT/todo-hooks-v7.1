import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./Task.scss";

const Task = ({ task, index, isUpArrowHidden, isDownArrowHidden }) => {
  //console.log(isUpArrowHidden);
  const {
    deleteTask,
    findTask,
    configs,
    moveTaskUp,
    moveTaskDown,
  } = useContext(GlobalContext);

  const { showTaskInfo } = configs[0];

  const isTaskInfo = configs[0].showTaskInfo ? "" : " task-hidden";

  const isTaskInfoArrows = configs[0].showTaskInfo
    ? "task-btn"
    : "task-btn task-hidden";

  const isDownArrowHiddenBtn = isDownArrowHidden
    ? "task-btn task-arrow"
    : "task-btn";

  const isTaskInfoArrowsUp = showTaskInfo
    ? isUpArrowHidden
      ? "task-btn task-hidden"
      : "task-btn"
    : "task-btn task-hidden";

  return (
    <li className="task-container">
      <div className="task-info-bar">
        <div>{task.title}</div>
        <div className={`task-info-bar-second-row ${isTaskInfo}`}>
          <div>Priority: {task.priority}</div>
          <div>Today: {task.today === true ? "Yes" : "No"}</div>
        </div>
      </div>
      <div>
        <button
          className={isTaskInfoArrowsUp}
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

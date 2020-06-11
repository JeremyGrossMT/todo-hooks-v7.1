import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import "./Task.scss";

const Task = ({ task }) => {
  return (
    <li className="task-container">
      <div className="task-info-bar">
        <div>{task.priority}</div>
        <div>
          <CheckBox />
        </div>
        <div>{task.title}</div>
      </div>
      <div>
        <button className="task-btn ">
          <i className="fas fa-pen"></i>
        </button>
        <button className="task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;

import React, { useEffect, useRef, useState } from "react";
import { DataTasks } from "../../App";
import { useContext } from "react";
import "./Task.css";
import { CSSTransition } from "react-transition-group";

export default function Task({ text, date, task }) {
  const { tasks, setTasks } = useContext(DataTasks);
  const [animState, setAnimState] = useState(true);

  // Events
  const deleteHandler = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
    setAnimState(!animState);
  };

  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
  };
  return (
    <CSSTransition
      in={animState}
      key={task}
      timeout={700}
      classNames="animation"
      unmountOnExit
      onExit={animState}>
      <li className={`task-item  ${task.status && "task-complete"}`}>
        <span className="task-info">
          <span className="text">{text}</span>
          <span className="date">{date}</span>
        </span>
        <span className="task-btn">
          <button
            onClick={completeHandler}
            className={`btn btn-mark ${
              task.status === true ? "btn-uncomplete" : "btn-complete"
            }`}>
            {`${task.status === true ? "Undone" : "Done"}`}
          </button>
          <button onClick={deleteHandler} className="btn btn-remove">
            Remove
          </button>
        </span>
      </li>
    </CSSTransition>
  );
}

import React, { useState } from "react";
import { DataContext } from "../Application/Application";
import { useContext } from "react";
import Btn from "../../UI/Buttons/Btn";
import { REMOVE } from "../CONFIG/Config";
// import { CSSTransition } from "react-transition-group";

export default function Task({ text, date, task }) {
  const { tasks, setTasks } = useContext(DataContext);
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
    // <CSSTransition
    //   in={animState}
    //   key={task}
    //   timeout={700}
    //   classNames="animation"
    //   unmountOnExit
    //   onExit={animState}>
    <li className={`task-item  ${task.status && "task-complete"}`}>
      <span className="task-info">
        <span className="text">{text}</span>
        <span className="date">{date}</span>
      </span>
      <span className="task-btn">
        <Btn
          onClick={completeHandler}
          className={`${
            task.status === true ? "btn-uncomplete" : "btn-complete"
          }`}>
          {`${task.status === true ? "Undone" : "Done"}`}
        </Btn>
        <Btn onClick={deleteHandler} className="btn-remove">
          <REMOVE />
        </Btn>
      </span>
    </li>
    // </CSSTransition>
  );
}

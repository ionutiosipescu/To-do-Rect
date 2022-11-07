import React, { useContext } from "react";
import { DataTasks } from "../../App";
import "./TaskList.css";
import Task from "../Task/Task";
import { TransitionGroup } from "react-transition-group";
// import Fade from "react-reveal/Fade";

export default function TaskList() {
  const { tasks, setStatus, filteredTasks } = useContext(DataTasks);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container-list">
      <h2>Tasks:</h2>
      <select onChange={statusHandler} className="dropdown">
        <option className="first">Filter</option>
        <option className="op">All</option>
        <option className="op">Complete</option>
        <option className="op">Undone</option>
      </select>
      <TransitionGroup component="ul" className="task-group">
        {filteredTasks?.map((task) => (
          <Task key={task.id} date={task.date} text={task.text} task={task} />
        ))}
      </TransitionGroup>
    </div>
  );
}

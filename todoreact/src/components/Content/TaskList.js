import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

export default function TaskList({ tasks }) {
  return (
    <div className="container-list">
      <h2>Tasks:</h2>
      <select className="dropdown">
        <option className="first">Filter</option>
        <option className="op">All</option>
        <option className="op">Complete</option>
        <option className="op">Undone</option>
      </select>
      <ul className="task-group">
        {tasks.map((task) => (
          <Task date={task.date} text={task.text} />
        ))}
      </ul>
    </div>
  );
}

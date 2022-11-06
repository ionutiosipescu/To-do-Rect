import React from "react";

export default function Task({ text, date }) {
  // Events
  // const deleteHandler = () => {};
  return (
    <>
      <li className="task-item animate__animated animate__fadeInDown animate__fast ">
        <span className="task-info">
          <span className="text">{text}</span>
          <span className="date">{date}</span>
        </span>
        <span className="task-btn">
          <button className="btn btn-mark ">Done</button>
          <button className="btn btn-remove">Remove</button>
        </span>
      </li>
    </>
  );
}

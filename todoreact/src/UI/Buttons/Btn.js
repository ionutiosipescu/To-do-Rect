import React from "react";
import "./Btn.css";

export default function Btn(props) {
  return (
    <button
      type={props.type || "button"}
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}>
      <span>{props.children}</span>
    </button>
  );
}

import React, { useContext, useState } from "react";
import "./Header.css";
import Btn from "../../UI/Buttons/Btn";

export default function Header({ inputText, setInputText, tasks, setTasks }) {
  const [validator, setValidator] = useState(true);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTaskHandler = (e) => {
    e.preventDefault();

    if (inputText === "" || inputText.length > 40) {
      setValidator(false);
      return;
    } else {
      setValidator(true);
      setTasks([
        ...tasks,
        {
          text: inputText,
          status: false,
          id: (Date.now() + "").slice(-10),
          date: new Date().toLocaleDateString(),
        },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="header">
      <div className="typewriter">
        <h1>Task List 2022</h1>
      </div>
      <form className="form" onSubmit={submitTaskHandler}>
        <input
          onChange={inputTextHandler}
          type="text"
          className={`form_field ${validator ? "" : "error_field"}`}
          placeholder="Write your tasks here ..."
          value={inputText}
        />
        <Btn type="submit" className="btn-submit">
          Add Task
        </Btn>
      </form>
      <div className={`error-message ${validator ? "hidden" : ""}`}>
        Invalid Input
      </div>
    </div>
  );
}

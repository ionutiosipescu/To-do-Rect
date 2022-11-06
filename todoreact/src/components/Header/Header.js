import React from "react";
import "./Header.css";
import Btn from "../../UI/Buttons/Btn";

export default function Header({ inputText, setInputText, tasks, setTasks }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTaskHandler = (e) => {
    e.preventDefault();
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
    console.log(tasks);
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
          className="form_field"
          placeholder="Write your tasks here ..."
          value={inputText}
        />
        <Btn type="submit" className="btn-submit">
          Add Task
        </Btn>
      </form>
      <div className="error-message hidden">Invalid Input</div>
    </div>
  );
}

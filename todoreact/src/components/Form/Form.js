import React from "react";
import { useContext } from "react";
import { DataContext } from "../Application/Application";
import { ADD } from "../CONFIG/Config";
import Btn from "../../UI/Buttons/Btn";

export default function Form({ validator, setValidator }) {
  // states
  const { inputText, setInputText, tasks, setTasks } = useContext(DataContext);

  // On every keypress inputText is updated with e.target.value
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Submit New Task
  const submitTaskHandler = (e) => {
    e.preventDefault();
    // If incorect -> set Validator to false -> triger errormessage
    if (inputText === "" || inputText.length > 40) {
      setValidator(false);
      return;
    } else {
      // If correct => set Validator to true -> continue the function
      setValidator(true);
      // Set tasks to-> [...copy tasks before + object task]
      setTasks([
        ...tasks,
        {
          text: inputText,
          status: false,
          id: (Date.now() + "").slice(-10),
          date: new Date().toLocaleDateString(),
        },
      ]);
      // clear fields
      setInputText("");
    }
  };
  return (
    <form className="form" onSubmit={submitTaskHandler}>
      <input
        onChange={inputTextHandler}
        type="text"
        className={`form_field ${validator ? "" : "error_field"}`}
        placeholder="Write your tasks here ..."
        value={inputText}
      />
      <Btn type="submit" className="btn-submit">
        <ADD />
      </Btn>
    </form>
  );
}

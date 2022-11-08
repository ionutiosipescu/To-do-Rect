import React, { useState, useEffect, createContext } from "react";
import Form from "../Form/Form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import TaskList from "../TaskList/TaskList";
import { TITLE } from "../CONFIG/Config";
import Header from "../../UI/Header/Header";

// Create Context for all Child Components to pass data
export const DataContext = createContext();

export default function Application() {
  // States
  const [validator, setValidator] = useState(true);
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Get all data from local storage when page is reloaded
  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);

  // Use tasks arr to create new filtered arr by status
  const filterHandler = () => {
    switch (status) {
      case "Complete":
        setFilteredTasks(tasks.filter((task) => task.status === true));
        break;
      case "Undone":
        setFilteredTasks(tasks.filter((task) => task.status === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  // Save to local Storage tasks arr
  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Get localStorage tasks
  const getLocalTasks = () => {
    // if null -> set empty arr
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      // if tasks -> get local storage -> parse in new variable -> set state to the new variable
      let taskLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(taskLocal);
    }
  };

  return (
    <DataContext.Provider
      value={{
        tasks,
        setTasks,
        setStatus,
        filteredTasks,
        inputText,
        setInputText,
      }}>
      <Header className="header">
        <div className="typewriter">
          <TITLE />
        </div>
        <Form validator={validator} setValidator={setValidator} />
        <ErrorMessage validator={validator} />
      </Header>
      <TaskList />
    </DataContext.Provider>
  );
}

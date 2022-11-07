import { createContext, useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";

export const DataTasks = createContext();
export const DataHeader = createContext();

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [animState, setAnimState] = useState(false);

  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);

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

  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let taskLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(taskLocal);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <Header
          inputText={inputText}
          setTasks={setTasks}
          tasks={tasks}
          setInputText={setInputText}
        />
        <DataTasks.Provider
          value={{
            tasks,
            setTasks,
            setStatus,
            filteredTasks,
          }}>
          <TaskList />
        </DataTasks.Provider>
      </div>
    </div>
  );
}

export default App;

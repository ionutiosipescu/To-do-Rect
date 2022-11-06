import { useState } from "react";
import "./App.css";
import TaskList from "./components/Content/TaskList";
import Header from "./components/Header/Header";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="body">
      <div className="container">
        <Header
          inputText={inputText}
          setTasks={setTasks}
          tasks={tasks}
          setInputText={setInputText}
        />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { DataContext } from "../Application/Application";
import Task from "../Task/Task";
import Select from "../Select/Select";
import { SUBTITLE } from "../CONFIG/Config";
// import { TransitionGroup } from "react-transition-group";

export default function TaskList() {
  const { filteredTasks } = useContext(DataContext);

  return (
    <div className="container-list">
      <h2>
        <SUBTITLE />
      </h2>
      <Select />
      {/* <TransitionGroup component="ul" className="task-group"> */}
      <ul className="task-group">
        {filteredTasks?.map((task) => (
          <Task key={task.id} date={task.date} text={task.text} task={task} />
        ))}
      </ul>
      {/* </TransitionGroup> */}
    </div>
  );
}

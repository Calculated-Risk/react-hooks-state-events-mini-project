import React from "react";
import Task from "./Task";

function TaskList({taskData}) {
  console.log({taskData})

  const taskCardBuilder = taskData.map((task) => {
    return (
        <Task 
        key={task.text} 
        taskProp={task}
        />
    );
  })

  return (
    <div className="tasks">
      {taskCardBuilder}
    </div>
  );
}

export default TaskList;

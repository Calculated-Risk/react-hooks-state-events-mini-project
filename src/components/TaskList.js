import React from "react";
import Task from "./Task";

function TaskList({tasks, onClickXTask}) {
  

  const taskCardBuilder = tasks.map((task) => {
    return (
        <Task 
        key={task.text} 
        text={task.text}
        category={task.category}
        onClickXTask={onClickXTask}
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

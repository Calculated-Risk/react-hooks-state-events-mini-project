import React from "react";

function Task({taskProp}) {
  
 const{text, category} = taskProp

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;

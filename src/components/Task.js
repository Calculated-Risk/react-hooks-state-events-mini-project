import React from "react";

function Task({text, category, onClickXTask}) {   
 

function handleClick(){
 onClickXTask(text)
}




  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

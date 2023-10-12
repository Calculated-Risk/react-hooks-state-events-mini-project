import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const filteredTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categoryData={CATEGORIES}
      selectedCategory={category}
      setSelectedCategory={setCategory}
      />
      <NewTaskForm />
      <TaskList 
      taskData={filteredTasks} 
      onClickXTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

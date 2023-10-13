import React, {useState} from "react";

/**
 * Next, update this form to be a controlled component, so that all form inputs are captured in state.
 * 


When the form is submitted, add a new task to the list with the text and category from the form. 
For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.
 */

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')
  console.log(categories)
  
  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText('')
    setCategory('Code')
  }
  



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
          {categories.map((categ) => (
            <option key={categ}>{categ}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

/**
 * When a button is clicked, the following should happen:

 1.  Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
 2.  The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
 3.  If the button for "All" is selected, all the tasks should be displayed.
 */


import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  
    const categoryAddedToButton = categories.map(category => {
      const addClassName = category === selectedCategory ? 'selected' : null;

      return(
        <button 
        key={category} 
        className={addClassName}
        onClick={() => setSelectedCategory(category)}
        >
         {category}
        </button>
      )
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryAddedToButton}
    </div>
  );
}

export default CategoryFilter;



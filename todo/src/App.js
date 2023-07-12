//2A Import useState so we can use in #2B
import { useState } from "react";

//#1 Where React project starts (entire App)
const App = () => {
  //#2B Items and setItems are variable and a function that come from
  //useState (a concept built into react) and items starts out as an empty array
  const [items, setItems] = useState([]);
  // #5B Runs when the form is submitted
  const addItem = (event) => {
    // #6 Prevent the page from refreshing
    event.preventDefault();
    //#7 Get the item text out of the element's cvalue in the form
    const itemText = event.target.elements.task.value;
    //#8 We can't set items like a normal variable because it is a state variable.
    // Becuse of that we have to use the setItems functon from #2B.
    //The paramater of the setItems function is the new value we would like in state.
    //In this case we are taking all the existing items, spread them out in a new
    //array then put in the new itemText as another index in that array.
    setItems([...items, itemText]);
  };
  return (
    <div>
      <h1>To Do List App</h1>
      {/* #5 Trigger the addItem function above */}
      <form onSubmit={addItem}>
        <label>New To Do Item: </label>
        <input type="text" name="task" />
        <button type="submit">Add Item</button>
        {/* #3 Loop over all the items in our state variable */}
      </form>
      {items.map((item, index) => {
        // #4 Show each of the items in the bullet point...
        //but there aren't any items yet so this <li> doesn't show up at first
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default App;

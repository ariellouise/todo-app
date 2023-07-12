import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (event) => {
    event.preventDefault();
    const itemText = event.target.elements.task.value;
    setItems([...items, itemText]);
  };
  return (
    <div>
      <h1>To Do List App</h1>
      <form onSubmit={addItem}>
        <label>New To Do Item: </label>
        <input type="text" name="task" />
        <button type="submit">Add item</button>
      </form>
      {items.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};

export default App;

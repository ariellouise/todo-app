const App = () => {
  const addItem = () => {};
  return (
    <div>
      <h1>To Do List App</h1>
      <form onSubmit={addItem}>
        <label>New To Do Item: </label>
        <input type="text" />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default App;

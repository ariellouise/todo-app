import "./App.css";

function App() {
  const cars = ["Toyata", "Tesla", "Honda", "Ford"];
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <ul>
        {cars.map((car) => {
          return <li>{car}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

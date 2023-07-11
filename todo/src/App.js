import "./App.css";

function App() {
  const cars = [
    { make: "Toyota", model: "Rav4" },
    { make: "Tesla", model: "One" },
    { make: "Honda", model: "CRV" },
    { make: "Ford", model: "F150" },
  ];
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <ul>
        {cars.map((car) => {
          console.log(car);
          return (
            <li>
              {car.make} - {car.model}
            </li>
          );
        })}
      </ul>
      <CarShower />
    </div>
  );
}

const CarShower = () => {
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>Make: </span>
      <br />
      <span style={{ fontWeight: "bold" }}>Model: </span>
    </div>
  );
};

export default App;

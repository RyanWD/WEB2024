import { useState, ChangeEvent } from "react";

function CarsArray() {
  interface Car {
    year: number;
    make: string;
    model: string;
  }

  const [cars, setCars] = useState<Car[]>([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    // reset object

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index: number) {
    setCars((c) => c.filter((_element, id) => id !== index));
  }
  function handleYearChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCarYear(value);
    }
  }
  function handleMakeChange(event: ChangeEvent<HTMLInputElement>) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event: ChangeEvent<HTMLInputElement>) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li
            key={index}
            onClick={() => handleRemoveCar(index)}
            style={{ cursor: "pointer" }}
          >
            {car.year}
            {car.make}
            {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default CarsArray;

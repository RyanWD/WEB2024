import { useState, ChangeEvent } from "react";

function CarType() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCar((prevCar) => ({ ...prevCar, year: value }));
    }
  }
  function handleMakeChange(event: ChangeEvent<HTMLInputElement>) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }

  function handleModelChange(event: ChangeEvent<HTMLInputElement>) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default CarType;

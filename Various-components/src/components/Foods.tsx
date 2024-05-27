import { useState } from "react";

function Foods() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = (document.getElementById("foodInput") as HTMLFormElement)
      .value;
    (document.getElementById("foodInput") as HTMLFormElement).value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(id: number) {
    setFoods((f) => f.filter((_element, i) => i !== id));
  }

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => handleRemoveFood(index)}>
              {" "}
              Remove food
            </button>
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Foods;

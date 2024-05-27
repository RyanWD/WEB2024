import { useState } from "react";

function randomColour() {
  const [typeOfColour, setTypeOfColour] = useState<string>("hex");
  const [colour, setColour] = useState("#000");

  function handleCreateRandomColour() {
    if (typeOfColour === "rgb") {
      setColour(`rgb(${randomRgb()},${randomRgb()},${randomRgb()})`);
    } else setColour(`#${randomHex()}`);
  }

  function randomRgb() {
    return Math.floor(Math.random() * 255);
  }

  function randomHex() {
    const hexValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let randomGeneratedHex = "";

    for (let index = 0; index < 6; index++) {
      const element = hexValues[Math.floor(Math.random() * hexValues.length)];
      randomGeneratedHex += element;
    }
    return randomGeneratedHex;
  }

  return (
    <div style={{ width: "100vw", height: "100vh", background: colour }}>
      <button onClick={() => setTypeOfColour("hex")}>Create HEX colour</button>
      <button onClick={() => setTypeOfColour("rgb")}>Create RGB colour</button>
      <button onClick={handleCreateRandomColour}>Generate random colour</button>

      <h1>{colour}</h1>
    </div>
  );
}
export default randomColour;

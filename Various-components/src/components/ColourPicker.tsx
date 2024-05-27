import { ChangeEvent, useState } from "react";

function ColourPicker() {
  const [colour, setColour] = useState("#fff");

  function handleColourChange(event: ChangeEvent<HTMLInputElement>) {
    setColour(event.target.value);
  }

  return (
    <>
      <div className="colour-picker-container">
        <h1>Colour Picker</h1>
        <div className="colour-display" style={{ backgroundColor: colour }}>
          <p>Selected colour: <br /> {colour}</p>
        </div>
        <label htmlFor="colourPicker">Select a colour </label>
        <input
          type="color"
          value={colour}
          id="colourPicker"
          onChange={handleColourChange}
        />
      </div>
    </>
  );
}

export default ColourPicker;

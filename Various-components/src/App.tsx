import ColourPicker from "./components/ColourPicker";
import CarType from "./components/CarType";
import Foods from "./components/Foods";
import CarsArray from "./components/CarsArray";
import ToDo from "./components/ToDo";
import ContextA from "./components/ContextA";
import Ref from "./components/Ref";

function App() {
  return (
    <>
      <Ref />
      <hr />
      <ContextA />
      <hr />
      <ToDo />
      <hr />
      <CarsArray />
      <hr />
      <Foods />
      <hr />
      <CarType />
      <hr />
      <ColourPicker />
    </>
  );
}

export default App;

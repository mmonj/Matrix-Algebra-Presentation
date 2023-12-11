import { createSignal } from "solid-js";
import "./App.css";
import { ColorMatrix } from "./components/ColorMatrix";
import { PixelGrid } from "./components/PixelGrid";
import { adjustBrightness, generateColorList } from "./util";
import { ColorType } from "./util/types";

function App() {
  const [getColors, setColors] = createSignal<ColorType[]>(generateColorList(100));
  const [getSliderValue, setSliderValue] = createSignal<number>(0);

  function regenerateColors() {
    setColors(() => generateColorList(100));
  }

  function handleMatrixChange(newFilterValue: number) {
    const newColors = getColors().map((color) => color);

    for (let item of newColors) {
      item.color = adjustBrightness(item.startingColor, newFilterValue);
    }

    setColors(() => newColors);
  }

  function handleSliderChange(event: InputEvent) {
    const newFilterValue = parseInt((event!.target as HTMLInputElement).value);

    setSliderValue(() => newFilterValue);
    handleMatrixChange(newFilterValue);
  }

  return (
    <main>
      <h1>Image Processing with Linear Algebra</h1>

      <h2>Matrix Representation of a Simple Image</h2>

      <button
        onClick={regenerateColors}
        style={{
          "margin-right": "1rem",
        }}
      >
        New Colors
      </button>
      <input
        id="slider"
        type="range"
        min="0"
        max="100"
        value={getSliderValue()}
        oninput={handleSliderChange}
        style={{
          "margin-right": "1rem",
        }}
      />
      <span>Filter Brightness: {getSliderValue()}</span>

      <div style={{ display: "flex" }}>
        <PixelGrid colors={getColors()} setColors={setColors} />
        <ColorMatrix colors={getColors()} />
      </div>
    </main>
  );
}

export default App;

import { Setter } from "solid-js";
import { ColorType } from "../util/types";

type GridCellProps = {
  color: number;
};

function GridCell(props: GridCellProps) {
  return (
    <div
      style={{
        width: "3rem",
        height: "3rem",
        border: "1px solid #ccc",
        "background-color": `rgb(${props.color}, ${props.color}, ${props.color})`,
        cursor: "pointer",
      }}
    />
  );
}

export function PixelGrid(props: { colors: ColorType[]; setColors: Setter<ColorType[]> }) {
  return (
    <div style={{ "margin-right": "2rem" }}>
      <div style={{ display: "grid", "grid-template-columns": "repeat(10, 3rem)" }}>
        {props.colors.map((color) => (
          <GridCell color={color.color} />
        ))}
      </div>
    </div>
  );
}

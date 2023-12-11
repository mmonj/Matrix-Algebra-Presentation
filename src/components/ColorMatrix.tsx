import { ColorType } from "../util/types";

export function ColorMatrix(props: { colors: ColorType[] }) {
  const rows = Math.sqrt(props.colors.length);

  function getCellStyle() {
    return {
      border: "1px solid #000",
      padding: "8px",
    };
  }

  return (
    <div style={{ display: "grid", "grid-template-columns": `repeat(${rows}, auto)` }}>
      {props.colors.map((value) => (
        <div style={getCellStyle()}>{value.color}</div>
      ))}
    </div>
  );
}

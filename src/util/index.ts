import { ColorType } from "./types";

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateColorList(max: number): ColorType[] {
  const colorList: ColorType[] = [];

  for (let i = 0; i < max; i++) {
    const color = getRandomNumber(0, 255);

    const newColor: ColorType = {
      key: crypto.randomUUID(),
      color: color,
      startingColor: color,
    };

    colorList.push(newColor);
  }

  return colorList;
}

export function adjustBrightness(colorNumber: number, brightnessFilter: number): number {
  const changeFactor = Math.ceil(255 / 100);
  const colorChange = changeFactor * brightnessFilter;
  let newColor = colorNumber + colorChange;
  if (newColor > 255) {
    newColor = 255;
  }

  return newColor;
}

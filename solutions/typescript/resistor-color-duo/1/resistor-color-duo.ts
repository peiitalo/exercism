const resistorColors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedValue(value: string[]) {
  let valueOne = resistorColors.indexOf(value[0]).toString();

  let valueTwo = resistorColors.indexOf(value[1]).toString();

  return Number(valueOne + valueTwo)
}

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

export function decodedResistorValue(value: string[]) {
  let valueOne = resistorColors.indexOf(value[0]).toString();
  let valueTwo = resistorColors.indexOf(value[1]).toString();
  let valueThree = resistorColors.indexOf(value[2]);

  let resisNumber = Number(valueOne + valueTwo) * (10 ** valueThree)

  if (resisNumber >= 10 ** 9) {
    return `${resisNumber / (10 ** 9)} gigaohms`;
  } else if (resisNumber >= 10 ** 6) {
    return `${resisNumber / (10 ** 6)} megaohms`;
  } else if (resisNumber >= 10 ** 3) {
    return `${resisNumber / (10 ** 3)} kiloohms`;
  } else {
    return `${resisNumber} ohms`;
  }
}

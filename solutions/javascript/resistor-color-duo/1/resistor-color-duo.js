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

export const decodedValue = (data) => {
  let colorOne = resistorColors.indexOf(data[0]).toString()
  let colorTwo = resistorColors.indexOf(data[1]).toString()


  return (Number(colorOne + colorTwo))
};

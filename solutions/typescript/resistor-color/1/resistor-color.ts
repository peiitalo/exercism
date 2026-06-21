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

export const colorCode = (color: string) => {
  for (let item of resistorColors) {
    if (item === color.toLowerCase()) return resistorColors.indexOf(item);
  }
};

export const COLORS = resistorColors;
  

//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  const newData = {};

  for (let point in oldData) {
    let letters = oldData[point];

    for (let letter of letters) {
      newData[letter.toLowerCase()] = Number(point);
    }
  }

  return newData;
};
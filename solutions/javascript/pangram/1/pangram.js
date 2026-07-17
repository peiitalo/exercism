//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (pangram) => {
  const onlyLetters = pangram.toLowerCase().replace(/[^a-z]/g, '');

  return new Set(onlyLetters).size === 26
};

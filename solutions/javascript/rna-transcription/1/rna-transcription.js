//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let result = []

  if (dna === "") return ""

  for (let item of dna) {
    switch (item) {
      case "G": result.push("C"); break;
      case "C": result.push("G"); break;
      case "T": result.push("A"); break;
      case "A": result.push("U"); break;
    }
  }

  return result.join("")
};

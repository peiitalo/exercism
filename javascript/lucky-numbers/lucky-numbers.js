// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numArray1 = '';
  let numArray2 = '';

  for (let i = 0; i < array1.length; i++) {
    numArray1 += array1[i]
  }

  for (let i = 0; i < array2.length; i++) {
    numArray2 += array2[i]
  }

  return Number(numArray1) + Number(numArray2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numeroInvertido = Number(
    value
      .toString()
      .split('')
      .reverse()
      .join('')
  )

  return numeroInvertido === value
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let convertedInput = Number(input)

  if (input === '' || input === null || input === undefined) {
    return 'Required field'
  } 

  if (convertedInput === 0 || Number.isNaN(convertedInput)) {
    return 'Must be a number besides 0'
  }

  return ''
}

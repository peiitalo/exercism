//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
    let ultimoNumero =  number % 10
    let doisUltimos = number % 100

    if (ultimoNumero === 1 && doisUltimos !== 11) {
        return `${name}, you are the ${number}st customer we serve today. Thank you!`
    } else if (ultimoNumero === 2 && doisUltimos !== 12) {
        return `${name}, you are the ${number}nd customer we serve today. Thank you!`
    } else if (ultimoNumero === 3 && doisUltimos !== 13) {
        return `${name}, you are the ${number}rd customer we serve today. Thank you!`
    } else {
        return `${name}, you are the ${number}th customer we serve today. Thank you!`
    }
};
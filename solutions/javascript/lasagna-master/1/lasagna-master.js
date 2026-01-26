/// <reference path="./global.d.ts" />
// @ts-nocheck

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// @ts-ignore
export function cookingStatus(time) {
    if (time === 0) {
        return 'Lasagna is done.'
    } else if (time > 0) {
        return 'Not done, please wait.'
    } else {
        return 'You forgot to set the timer.'
    }
}

export function preparationTime(layers, time = 2) {
    let layer = layers.length;

    return layer * time
}

export function quantities(layers) {
    let massaG = 0
    let sauceL = 0
    for (let i = 0; i < layers.length; i++) {
        switch (layers[i]) {
            case 'noodles': massaG += 50; break;
            case 'sauce': sauceL += 0.2; break;
        }
    }

    return {
       noodles: massaG,
       sauce: sauceL
    }
}

export function addSecretIngredient(friendsList, myList){
    let lastElementFriend = friendsList.slice(-1)[0] 

    myList.push(lastElementFriend)
}

export function scaleRecipe(recipe, qtd) {
    let newRecipe = {}

    for (let i in recipe) {
        newRecipe[i] = (recipe[i] / 2) * qtd;
    }

    return newRecipe;
} 
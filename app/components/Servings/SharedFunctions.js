'use strict';


export const setNumberHigher = (numberOf) => {
    if (numberOf < 20) {
        return numberOf + 1;
    }
}

export const setNumberLower = (numberOf) => {
    if (numberOf > 1) {
        return numberOf - 1;
    }
}

export const priceCounter = (price, numberOf) => {
    console.log(price, numberOf)
    return price * numberOf;
}
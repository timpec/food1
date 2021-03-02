import { pizzat } from "../../../data/data";


const counter = (key, pohja, added, removed, slice) => {
    const basePrice = basepriceCount(key, pohja)
    const toppingsPrice = toppingCount(pohja, added, removed)

    if (slice == true) {
        const totalSum = basePrice + toppingsPrice + 0.5;
        return totalSum;
    } else {
        const totalSum = basePrice + toppingsPrice;
        return totalSum;
    }
}

// Base price counter
const basepriceCount = (key, pohja) => {
    const pizza = pizzat[key]
    switch(pohja) {
        case "Gluteeniton":
            return  pizza.price.normaali + 3;
        case "Ruis":
            return  pizza.price.normaali + 2.5;
        case "Normaali":
            return  pizza.price.normaali;
        case "Perhe":
            return  pizza.price.perhe;
        case "Pannu":
            return pizza.price.pannu;
    }
}

// Toppings price counter
const toppingCount = (pohja, added, removed) => {
/*
    let voner = false;
    let vegaanijuusto = false;
    for (i in added) {
        if (i == "Vöner") {
            voner = true;
        } else if (i == "Vegaanijuusto") {
            vegaanijuusto = true;
        }
    }
*/
    if (pohja == "Perhe" || pohja == "Pannu") {
        if(removed.length > 0) {
            return (added.length - 1) * 2;
        } else {
            return added.length  * 2;
        }
    } else {
        if(removed.length > 0) {
            return (added.length - 1) * 1.5;
        } else {
            return added.length * 1.5;
        }
    }
}

export default counter;
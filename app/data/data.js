const dips = [
    "Valkosipuli",
    "Paprikamajoneesi",
    "Sour-Cream",
    "Savuchili",
    "BBQ",
    "Taco",
    "Curry"
]

export const pizzat = [
    {
        type: "normal",
        key: "0",
        id: "1",
        name: "Bolognese",
        toppings: [
            "Jauheliha"
        ],
        price : {
            normaali: 8.5,
            perhe: 15,
            pannu: 14,
        },
        img: "https://pizzataxim.fi/images/pizza_01.png"
    },
    {
        type: "normal",
        key: "1",
        id: "2",
        name: "Frutti",
        toppings: [
            "Tonnikala", "Katkarapu", "Simpukka"
        ],
        price : {
            normaali: 8.5,
            perhe: 15,
            pannu: 14,
        },
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_02.png"
    },
    {
        type: "normal",
        key: "2",
        id: "3",
        name: "Romeo",
        toppings: [
            "Katkarapu", "Salami", "Sinihomejuusto", "Ananas"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_03.png"
    },
    {
        type: "normal",
        key: "3",
        id: "4",
        name: "Americano",
        toppings: [
            "Kinkku", "Ananas", "Sinihomejuusto"
        ],
        price : {
            normaali: 9,
            perhe: 15,
            pannu: 14,
        },
        img: "https://pizzataxim.fi/images/pizza_04.png"
    },
    {
        type: "normal",
        key: "4",
        id: "5",
        name: "Julia",
        toppings: [
            "Katkarapu", "Kinkku", "Ananas", "Sinihomejuusto"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_05.png"
    },
    {
        type: "normal",
        key: "5",
        id: "6",
        name: "Quatro",
        toppings: [
            "Kinkku", "Katkarapu", "Paprika", "Herkkusieni"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_06.png"
    },
    {
        type: "normal",
        key: "6",
        id: "7",
        name: "Spicyvege",
        toppings: [
            "Tomaatti", "Mozzerella", "Kapris", "Punasipuli", "Jalapeno", "Valkosipuli"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_07.png"
    },
    {
        type: "normal",
        key: "7",
        id: "8",
        name: "Green River",
        toppings: [
            "Paprika", "Tomaatti", "Punasipuli", "Oliivi", "Herkkusieni"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_08.png"
    },
    {
        type: "normal",
        key: "8",
        id: "9",
        name: "Empire Special",
        toppings: [
            "Salami", "Kinkku", "Katkarapu", "Punasipuli", "Valkosipuli", "Tuplajuusto"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_09.png"
    },
    {
        type: "normal",
        key: "9",
        id: "10",
        name: "Papa's Special",
        toppings: [
            "Salami", "Paprika", "Punasipuli", "Oliivi", "Sinihomejuusto"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_10.png"
    },
    {
        type: "normal",
        key: "10",
        id: "11",
        name: "Dillinger",
        toppings: [
            "Salami", "Kinkku", "Jauheliha", "Punasipuli"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_11.png"
    },
    {
        type: "normal",
        key: "11",
        id: "12",
        name: "Kummisetä",
        toppings: [
            "Kinkku", "Herkkusieni", "Parsa", "Katkarapu", "Valkosipuli", "Tuplajuusto"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_12.png"
    },
    {
        type: "normal",
        key: "12",
        id: "13",
        name: "Taxim Special",
        toppings: [
            "Pepperoni", "Jalapeno", "Mozzerella", "Valkosipuli"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_13.png"
    },
    {
        type: "normal",
        key: "13",
        id: "14",
        name: "Chicken Hawaii",
        toppings: [
            "Paahdettu Broileri", "Ananas", "Sinihomejuusto"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_14.png"
    },
    {
        type: "normal",
        key: "14",
        id: "15",
        name: "Margarita",
        toppings: [
            "Kirsikkatomaatti"
        ],
        price : {
            normaali: 8.5,
            perhe: 15,
            pannu: 14,
        },
        img: "https://pizzataxim.fi/images/pizza_15.png"
    },
    {
        type: "normal",
        key: "15",
        id: "16",
        name: "Mexico",
        toppings: [
            "Pepperoni", "Ananas", "Tacokastike", "Jalapeno"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_16.png"
    },
    {
        type: "normal",
        key: "16",
        id: "17",
        name: "Smetana Special",
        toppings: [
            "Salami", "Maustekurkku", "Punasipuli", "Smetana"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_17.png"
    },
    {
        type: "normal",
        key: "17",
        id: "18",
        name: "Opera Special",
        toppings: [
            "Tonnikala", "Salami", "Ananas", "Tomaatti", "Tabasco"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_18.png"
    },
    {
        type: "normal",
        key: "18",
        id: "19",
        name: "Kebabpizza",
        toppings: [
            "Kebabliha", "Tomaatti", "Jalapeno", "Punasipuli"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_19.png"
    },
    {
        type: "normal",
        key: "19",
        id: "20",
        name: "Meat Lovers",
        toppings: [
            "Paahdettu Pekoni", "Kebabliha", "Jauheliha", "Pepperoni"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_20.png"
    },
    {
        type: "normal",
        key: "20",
        id: "21",
        name: "Spicy Devil",
        toppings: [
            "Kebabliha", "Paholaisenhillo", "Punasipuli", "Jalapeno", "Mozzarella"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_21.png"
    },
    {
        type: "normal",
        key: "21",
        id: "22",
        name: "Texan Style BBQ",
        toppings: [
            "Paahdettu Broileri", "Punasipuli", "Paahdettu Pekoni", "Mozzarella", "BBQ-kastike"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_22.png"
    },
    {
        type: "normal",
        key: "22",
        id: "23",
        name: "Pulled Pork",
        toppings: [
            "Ylikypsä Possu", "Punasipuli", "Jalapeno", "Paprika", "Mozzarella", "Sinihomejuusto"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_23.png"
    },
    {
        type: "normal",
        key: "23",
        id: "24",
        name: "Fetapizza",
        toppings: [
            "Kevytfeta", "Punasipuli", "Oliivi", "Tomaatti"
        ],
        price : {
            normaali: 9.5,
            perhe: 17,
            pannu: 16,
        },
        img: "https://pizzataxim.fi/images/pizza_24.png"
    },
    {
        type: "normal",
        key: "24",
        id: "25",
        name: "Zorpas",
        toppings: [
            "Vuohenjuusto", "Paholaisenhillo", "Oliivi", "Punasipuli", "Rucola-salaatti"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_25.png"
    },
    {
        type: "normal",
        key: "25",
        id: "26",
        name: "Mozza-Pesto",
        toppings: [
            "Mozzarella", "Tomaatti", "Vihreä Pestokastike", "Mustapippuri"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_26.png"
    },
    {
        type: "normal",
        key: "26",
        id: "27",
        name: "Voodoo",
        toppings: [
            "Grillattu Artisokka", "Grillattu Kesäkurpitsa", "Kirsikkatomaatti", "Rucola-salaatti"
        ],
        price : {
            normaali: 13,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_27.png"
    },
    {
        type: "normal",
        key: "27",
        id: "28",
        name: "Nachos Ranch",
        toppings: [
            "Grillattu Broileri", "Salsakastike", "Jalapeno", "Nacho", "Kirsikkatomaatti"
        ],
        price : {
            normaali: 13,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_28.png"
    },
    {
        type: "normal",
        key: "28",
        id: "29",
        name: "Nuclear Flame",
        toppings: [
            "Chorizo Makkara", "Kebabliha", "Punasipuli", "Sriracha-kastike", "Valkosipulikrutonki"
        ],
        price : {
            normaali: 13,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_29.png"
    },
    {
        type: "normal",
        key: "29",
        id: "L1",
        name: "Chicken-BBQ",
        toppings: [
            "Kevytjuusto", "Paahdettu Broileri", "Ananas", "Punasipuli", "BBQ-kastike", "Tomaattikastike"
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_l1.png"
    },
    {
        type: "normal",
        key: "30",
        id: "L3",
        name: "Chicken Mexico",
        toppings: [
            "Kevytjuusto", "Paahdettu Broileri", "Jalapeno", "Ananas", "Tacokastike", "Tomaattikastike" 
        ],
        price : {
            normaali: 11,
            perhe: 19,
            pannu: 17,
        },
        img: "https://pizzataxim.fi/images/pizza_l3.png"
    },
    {
        type: "normal",
        key: "31",
        id: "30",
        name: "Oma Valinta",
        toppings: [

        ],
        price : {
            tayte1: {
                normaali: 8.5,
                perhe: 14.5,
                pannu: 14,
            },
            tayte2: {
                normaali: 9.5,
                perhe: 16.5,
                pannu: 16,
            },
            tayte3: {
                normaali: 10.5,
                perhe: 17.5,
                pannu: 17,
            },
            tayte4: {
                normaali: 11.5,
                perhe: 18.5,
                pannu: 18,
            },
        },
        img: "https://pizzataxim.fi/images/pizza_01.png" //Vaihda
    },
    {
        type: "vegan",
        key: "32",
        id: "VP1",
        name: "Vöner Pizza",
        toppings: [
            "Vöner", "Tomaatti", "Jalapeno", "Punasipuli" 
        ],
        price : {
            normaali: 11.9,
            perhe: 20.5,
        },
        img: "https://pizzataxim.fi/images/vegan_pizza_02.png"
    },
    {
        type: "vegan",
        key: "33",
        id: "VP2",
        name: "Vegan Special",
        toppings: [
            "Grillattu kesäkurpitsa", "Avocado", "Kirsikkatomaatti", "Rucola-salaatti" 
        ],
        price : {
            normaali: 11.9,
            perhe: 20.5,
        },
        img: "https://pizzataxim.fi/images/vegan_pizza_02.png"
    },
    {
        type: "vegan",
        key: "34",
        id: "VP3",
        name: "BBQ Vöner",
        toppings: [
            "Vöner", "BBQ-kastike", "Paprika", "Ananas" 
        ],
        price : {
            normaali: 11.9,
            perhe: 20.5,
        },
        img: "https://pizzataxim.fi/images/vegan_pizza_02.png"
    },
    {
        type: "vegan",
        key: "35",
        id: "VP4",
        name: "Vegan Taxim",
        toppings: [
            "Grillattu artisokka", "Herkkusieni", "Kapris", "Punasipuli" 
        ],
        price : {
            normaali: 11.9,
            perhe: 20.5,
        },
        img: "https://pizzataxim.fi/images/vegan_pizza_02.png"
    },
    {
        type: "vegan",
        key: "36",
        id: "VP5",
        name: "Oma Valinta",
        toppings: [

        ],
        price : {
            tayte1: {
                normaali: 10,
                perhe: 18.5,
            },
            tayte2: {
                normaali: 11,
                perhe: 19.5,
            },
            tayte3: {
                normaali: 12,
                perhe: 20.5,
            },
            tayte4: {
                normaali: 13,
                perhe: 21.5,
            },
        },
        img: "https://pizzataxim.fi/images/vegan_pizza_02.png"
    },
]

const kebabLisukkeet = [
    {id: '1', name: 'Riisillä', price: 8.5},
    {id: '2', name: 'Ranskalaisilla', price: 9.0},
    {id: '3', name: 'Ristikkoperunoilla', price: 9.5},
    {id: '4', name: 'Iskender', price: 9.0},
    {id: '5', name: 'Calzone', price: 9.0},
    {id: '6', name: 'Lohkoperunoilla', price: 9.5},
    {id: '7', name: 'Salaatilla', price: 9.0},
    {id: '8', name: 'Pita', price: 7.5},
]

export const kebabAnnokset = [
    {
        key: '0',
        id: 'K',
        name: 'Kebab',
        options: kebabLisukkeet,
        description: 'Kaikkiin kebab-annoksiin sisältyy kebabliha, chili, salaatti, kebabkastiketta sekä lisukevaihtoehto.'
    },
    {
        key: '1',
        id: 'KK',
        name: 'Kanakebab',
        options: kebabLisukkeet,
        description: 'Kaikkiin kanakebab-annoksiin sisältyy kanakebabliha, chili, salaatti, currykastiketta sekä lisukevaihtoehto.'
    }
]

const vonerLisukkeet = [
    {id: '1', name: 'Riisillä', price: 11.5},
    {id: '2', name: 'Ranskalaisilla', price: 11.7},
    {id: '3', name: 'Lohkoperunoilla', price: 11.5},
    {id: '4', name: 'Salaatilla', price: 11.5},
]

export const vonerAnnokset = [
    {
        key: '0',
        id: 'V',
        name: 'Voner',
        options: vonerLisukkeet,
        description: 'Kaikkiin vöner-annoksiin sisältyy vöner, chili, salaatti, vegaanikastiketta sekä lisukevaihtoehto.'
    }
]

const kanaLisukkeet = [
    {id: '1', name: 'Riisillä', price: 9.2},
    {id: '2', name: 'Ranskalaisilla', price: 9.2},
    {id: '3', name: 'Ristikkoperunoilla', price: 9.2},
    {id: '4', name: 'Lohkoperunoilla', price: 9.2},
    {id: '5', name: 'Salaatilla', price: 9.2},
]

export const kanaAnnokset = [
    {
        key: '0',
        id: 'BR',
        name: 'Broilerfileet currykastikkeella',
        options: kanaLisukkeet,
        description: 'Neljä broilerinfilettä, salaatti, currykastike sekä lisukevaihtoehto.'
    },
    {
        key: '1',
        id: 'KL',
        name: 'Kalafilee remoulade-kastikkeella',
        options: kanaLisukkeet,
        description: 'Kalafilee, salaatti, remouladekastike sekä lisukevaihtoehto.'
    }
]

const rullaLisukkeet = [
    {id: '1', name: 'Rulla', price: 9},
    {id: '2', name: 'Aurajuustorulla', price: 9.5},
    {id: '3', name: 'Rullamix', price: 10},
    {id: '4', name: 'Uunirulla', price: 10},
]

export const rullaAnnokset = [
    {
        key: '0',
        id: 'RK',
        name: 'Kebab',
        options: rullaLisukkeet,
        description: 'Kaikkiin kebabrulla-annoksiin sisältyy kebabia, kebabkastike, majoneesikastiketta, punasipulia, salaattia ja tomaattia.'
    },
    {
        key: '1',
        id: 'RKK',
        name: 'Kanakebab',
        options: [rullaLisukkeet[0], rullaLisukkeet[1], rullaLisukkeet[3]],
        description: 'Kaikkiin kanakebabrulla-annoksiin sisältyy kanakebabia, currykastike, majoneesikastiketta, punasipulia, salaattia ja tomaattia.'
    }
]

export const zoneAnnokset = [
    {
        key: '0',
        id: 'T1',
        name: 'BBQ-Zone',
        price: 11,
        toppings: [
            "Paahdettu broileri", "BBQ-kastike", "Paprika", "Sinihomejuusto"
        ],
        description: 'Taitettu pizza salaattitäytteellä.'
    },
    {
        key: '1',
        id: 'T2',
        name: 'Kreikkazone',
        price: 10,
        toppings: [
            "Kevytfeta", "Punasipuli", "Paprika", "Kastike"
        ],
        description: 'Taitettu pizza salaattitäytteellä.'
    },
    {
        key: '2',
        id: 'T3',
        name: 'Mexicozone',
        price: 11,
        toppings: [
            "Paahdettu broileri", "Tacokastike", "Ananas", "Punasipuli"
        ],
        description: 'Taitettu pizza salaattitäytteellä.'
    },
    {
        key: '3',
        id: 'T4',
        name: 'Taxzone',
        price: 11,
        toppings: [
            "Pepperoni", "Punasipuli", "Salaatti", "Sinihomejuusto"
        ],
        description: 'Taitettu pizza salaattitäytteellä.'
    },
    {
        key: '4',
        id: 'T5',
        name: 'Kebuzone',
        price: 10.5,
        toppings: [
            "Kebabliha", "Pepperoni", "Salaatti", "Kastike"
        ],
        description: 'Taitettu pizza salaattitäytteellä.'
    }
]

const salaattiLisukkeet = [
    {id: '1', name: 'Valkosipuli'},
    {id: '2', name: 'Ranskalainen'},
    {id: '3', name: 'Sinappi'},
    {id: '4', name: 'Kevyt'},
    {id: '5', name: 'Ei Kastiketta'}
]

export const salaattiAnnokset = [
    {
        key: '0',
        id: 'S1',
        name: 'Katkarapu- Tonnikala- Feta',
        price: 9.5,
        options: salaattiLisukkeet,
        description: 'Kaikkiin salaatti-annoksiin sisältyy jäävuorisalaattia, tomaattia, kurkkua, valitsemasi kastike sekä valitsemasi täytteet.'
    },
    {
        key: '1',
        id: 'S2',
        name: 'Feta- Oliivi- Punasipuli',
        price: 9.5,
        options: salaattiLisukkeet,
        description: 'Kaikkiin salaatti-annoksiin sisältyy jäävuorisalaattia, tomaattia, kurkkua, valitsemasi kastike sekä valitsemasi täytteet.'
    },
    {
        key: '2',
        id: 'S3',
        name: 'Lämmin broileri- Paprika- Ananas- Aurajuusto',
        price: 9.5,
        options: salaattiLisukkeet,
        description: 'Kaikkiin salaatti-annoksiin sisältyy jäävuorisalaattia, tomaattia, kurkkua, valitsemasi kastike sekä valitsemasi täytteet.'
    },
    {
        key: '3',
        id: 'S4',
        name: 'Rucola- Kesäkurpitsa- Artisokka- Avocado',
        price: 9.5,
        options: salaattiLisukkeet,
        description: 'Kaikkiin salaatti-annoksiin sisältyy jäävuorisalaattia, tomaattia, kurkkua, valitsemasi kastike sekä valitsemasi täytteet.'
    },
    {
        key: '4',
        id: 'S5',
        name: 'Oma Valinta Salaatti',
        price: 11,
        options: salaattiLisukkeet,
        description: 'Kaikkiin salaatti-annoksiin sisältyy jäävuorisalaattia, tomaattia, kurkkua, valitsemasi kastike sekä valitsemasi täytteet.',
        toppings: []
    }
]

const falafelLisukkeet = [
    {id: '1', name: 'Riisillä', price: 8.5},
    {id: '2', name: 'Ranskalaisilla', price: 8.7},
    {id: '3', name: 'Ristikkoperunoilla', price: 9.5},
    {id: '4', name: 'Lohkoperunoilla', price: 9.5},
    {id: '5', name: 'Salaatilla', price: 8.7},
    {id: '6', name: 'Pita', price: 7.5},
]

export const falafelAnnokset = [
    {
        key: '0',
        id: 'F',
        name: 'Falafel',
        options: falafelLisukkeet,
        description: 'Kaikkiin falafel-annoksiin sisältyy chili, salaatti, kastiketta sekä lisukevaihtoehto.'
    }
]

export const sides = [
    {
        key: '0',
        name: 'Wings 10 Kpl + 1 Kpl Dippi',
        dip: dips,
        free: 1,
        price: 8
    },
    {
        key: '1',
        name: 'Wings 20 Kpl + 2 Kpl Dippi',
        dip: dips,
        free: 2,
        price: 14.5
    },
    {
        key: '2',
        name: 'Wings 30 Kpl + 2 Kpl Dippi',
        dip: dips,
        free: 2,
        price: 20
    },
    {
        key: '3',
        name: '8 Kpl Onion Rings + 1 Kpl Dippi',
        dip: dips,
        free: 1,
        price: 4.9
    },
    {
        key: '4',
        name: 'Isot Ranskalaiset',
        dip: dips,
        free: 0,
        price: 3
    },
    {
        key: '5',
        name: 'Ristikkoperunat + 1 Kpl Dippi',
        dip: dips,
        free: 1,
        price: 4.5
    },
    {
        key: '6',
        name: 'Lohkoperunat + 1 Kpl Dippi',
        dip: dips,
        free: 1,
        price: 4.5
    },
]

const juomatOptions = [
    {id: '1', name: '0,33', price: 2},
    {id: '2', name: '0,5', price: 2.5},
    {id: '3', name: '1,5', price: 4.5}
]

export const juomat = [
    {
        key: '0',
        name: 'Pepsi',
        options: juomatOptions,
        img: 'https://pizzataxim.fi/images/juomat/pepsi_o.png'
    },
    {
        key: '1',
        name: 'Pepsi Max',
        options: juomatOptions,
        img: 'https://pizzataxim.fi/images/juomat/pepsi_max_o.png'
    },
    {
        key: '2',
        name: 'Jaffa',
        options: juomatOptions,
        img: 'https://pizzataxim.fi/images/juomat/jaffa_o.png'
    },
    {
        key: '3',
        name: '7UP',
        options: juomatOptions,
        img: 'https://pizzataxim.fi/images/juomat/7up_free.png'
    },
    {
        key: '4',
        name: 'Novelle',
        options: juomatOptions,
        img: 'https://pizzataxim.fi/images/juomat/novelle.png'
    },
    {
        key: '5',
        name: 'ED-energiajuoma',
        options: [{id: '4', name: '0,5', price: 3.5},],
        img: 'https://pizzataxim.fi/images/juomat/ed-energy.png'
    },
]
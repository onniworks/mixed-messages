// # MIXED MESSAGES
// ## Word arrays
const subjectarr = [
    "Man",
    "Woman",
    "The lonely butterfly",
    "A straight shooter",
    "El desperate diablo",
    "The weird teenager",
    "The brother",
    "The sister with no shame",
    "The sea",
    "A pink sky",
];

const verbarr = [
    "walks",
    "never disappears",
    "cooks",
    "showers",
    "always dances",
    "twerks",
    "craves",
    "prints",
    "constantly glides",
    "renovates",
];

const adjectivearr = [
    "quickly",
    "slowly",
    "happily",
    "with pride",
    "with shame",
    "without regrets",
    "like a tramps",
    "like a four year old",
    "cheerfully",
    "in a concentrated manner",
];

// ## Randomizer function
// when invoked, calls three random numbers, assigns each number to an array to pick a value, pieces values together and returns this value.

const mixedmessage = () => {
    const i = Math.floor(Math.random()*10);
    const n = Math.floor(Math.random()*10);
    const r = Math.floor(Math.random()*10);
    return subjectarr[i] + " " + verbarr[n] + " " + adjectivearr[r] + "."
}

console.log(mixedmessage());
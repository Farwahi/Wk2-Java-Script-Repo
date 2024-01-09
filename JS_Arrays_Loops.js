// Activity 1:`);

console.log(`
let favorite Songs = [
    "Al-Falak",
    "Al-Fatihah",
    "Al-Kauthar",
    
];

favoritesongs.push(
    "Al-Naas",
    "Al-Maida"
);

for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(`songs ${i + 1}: ${favoritesongs[i]}`);
};

_____________________________________________________________________________________
_____________________________________________________________________________________


console.log(`

Activity 2:`);

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(`Random Number ${i + 1}: ${randomNumber}`);
};
// Math.floor(Math.random() * 50) = 0 to 49
// Math.ceil(Math.random() * 50) = 1 to 50
// Math.round(Math.random() * 50) = 0 to 50

_____________________________________________________________________________________
_____________________________________________________________________________________

// Activity 3:`);
console.log(`

for (let i = 9; i >= 0; i--) {
    console.log(i);
};

_____________________________________________________________________________________
_____________________________________________________________________________________


console.log(`

Activity 4:`);

for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(`Film ${i + 1}: ${favoriteFilms[i]}`);
};

if (favoriteFilms[2] === "Ghostbusters") {
    console.log("Yay, it's Ghostbusters!");
} else {
    console.log("Boo! We want Ghostbusters.");
};


_____________________________________________________________________________________
_____________________________________________________________________________________


console.log(`

Activity 5:`);

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 30) + 1;

    if (randomNumber % 7 === 0) {
        console.log(`${randomNumber} is divisible by 7.`);
    } else {
        console.log(`${randomNumber} is not divisible by 7.`);
    }
};

_____________________________________________________________________________________
_____________________________________________________________________________________


console.log(`

Activity 6:`);

const bobsFollowers = [
"Alice",
"Bob",
"Charlie",
"David"
];

const hannahsFollowers = [
"Bob",
"Eve",
"Charlie",
"Frank"];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(`Mutual follower: ${bobsFollowers[i]}`);
        }
    }
};

_____________________________________________________________________________________
_____________________________________________________________________________________


console.log(`

Activity 7:`);

console.log("While Loop")
let i = 0;
console.log(`i=${i}`)
while (i < 5) {
    console.log(`Iteration ${i + 1}`);
    i++;
};
console.log(`i=${i}`) // At this point, i = 5

console.log("Do While Loop")
i = 0; // Reset i to 0
console.log(`i=${i}`)
do {
    console.log(`Iteration ${i + 1}`);
    i++;
} while (i < 5);
console.log(`i=${i}`)


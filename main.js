"use strict";
// Question 118: Write a loop that logs numbers from 1 to 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n");
// Question 119: Create a while loop that logs "Hello, World!" 5 times.
let count = 0;
while (count < 5) {
    console.log("Hello, World!");
    count++;
}
console.log("\n");
// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
const favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "Gattaca",
];
for (const movie of favoriteMovies) {
    console.log(movie);
}

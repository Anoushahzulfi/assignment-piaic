"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
const MagicianNames = ["Harry potter", "DavidCopperfield", "Hermoin Granger", "Ron Wasley"];
function showMagicians(magicians) {
    for (const Magician of magicians) {
        console.log(Magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(Magician => `the Great ${Magician}`);
    return greatMagicians;
}
const greatMagicianNames = make_great(MagicianNames);
console.log("orignal magicians");
showMagicians(MagicianNames);
console.log("Great Magicians");
showMagicians(greatMagicianNames);

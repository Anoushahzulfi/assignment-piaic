"use strict";
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
//first version
console.log('1st verion where alien color is green');
let alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log('congratulations youearned 5 points');
}
else if (alien_color3 === 'yelllow') {
    console.log('congratulations you earned 10 points');
}
else if (alien_color3 === 'red') {
    console.log('congratulations you earned 15 points');
}
else {
    'Unknown alien color';
}
//second version
console.log('2nd version where color is yellow');
alien_color = 'yellow';
if (alien_color3 === 'green') {
    console.log('congratulations youearned 5 points');
}
else if (alien_color3 === 'yelllow') {
    console.log('congratulations you earned 10 points');
}
else if (alien_color3 === 'red') {
    console.log('congratulations you earned 15 points');
}
else {
    'Unknown alien color';
}
//third version
console.log('3rd version where color is red');
alien_color = 'red';
if (alien_color3 === 'green') {
    console.log('congratulations youearned 5 points');
}
else if (alien_color3 === 'yelllow') {
    console.log('congratulations you earned 10 points');
}
else if (alien_color3 === 'red') {
    console.log('congratulations you earned 15 points');
}
else {
    'Unknown alien color';
}

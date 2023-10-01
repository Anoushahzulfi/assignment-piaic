"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
//LOWERCASE
let personName = "Anoushah";
console.log(`hello ${personName.toLowerCase()} would youlike to learn some python today`);
//UPPERCASE
console.log(`hello ${personName.toUpperCase()}would youlike to learn some python today`);
//TITLECASE
const titlecase = personName
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLocaleLowerCase()).join(" ");
console.log(`hello ${titlecase} would youlike to learn some python today`);

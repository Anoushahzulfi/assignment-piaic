"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings • Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators • Test whether an item is in a array
• Test whether an item is not in a array */
//• Tests for equality and inequality with strings*/
const message1 = "Anoushah";
const message2 = "Sarah";
console.log(message1 === message2); //false
console.log(message1 !== message2); //true
//Tests using the lower case function
const text1 = "Hello Anoushah";
const text2 = "hello anoushah";
console.log(text1.toLowerCase() === text2); //true
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 <= num2); //false
console.log(num1 >= num2); //true
//• Tests using "and" and "or" operators • Test whether an item is in a array 
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); //true both
console.log(x < y || y < z); //one true
console.log(x > y && y < z); //falsr both
console.log(x > y || y > z); //false both
//• Test whether an item is not in a array
const fruits = ['apple', 'banana', 'orange', 'grapes'];
console.log(fruits.includes('banana')); //true
console.log(fruits.includes('kiwi')); //false

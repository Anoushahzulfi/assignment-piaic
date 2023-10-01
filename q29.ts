/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array. 
• Make a array of your three favorite fruits and call it favorite_fruits. 
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let fruit0="banana"
let fruit1="grapes"
let fruit2="apple"
const favourite_fruit:string[]=["banana","grapes","apple"];
if(favourite_fruit.includes("banana")){
    console.log("i like banana");
}

if(favourite_fruit.includes("grapes")){
    console.log("i like grapes");
}

if (favourite_fruit.includes("apple")){
    console.log("i like apple");
}

if(favourite_fruit.includes("kiwi")){
    console.log("i like kiwi");
}
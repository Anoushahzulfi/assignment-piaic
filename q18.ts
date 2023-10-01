/* Seeing the World: Think of at least five places in the world you’d like to visit. 
• Store the locations in a array. Make sure the array is not in alphabetical order. 
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it. 
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again. 
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order.
Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order.
Print the list to show that its order has changed. */
//Step 1
let travelplaces:string[]=["Turkey","Tokyo","Paris","Dubai","SaudiaArabia","SwitzerLand"]
//Step:2
console.log("orignal order");
console.log(travelplaces);
//Step:3
console.log("Alphabetical order just to check");
console.log([...travelplaces].sort());
//Step:4
console.log("still in orignal order");
console.log(travelplaces);
//Step:5
console.log("reverse order just to check");
console.log([...travelplaces].reverse());
//Step 6
console.log("'still in orignal order");
console.log(travelplaces);
//Step 7
console.log("Reverse order to change in termial");
travelplaces.reverse()
console.log(travelplaces);
//Step 8
console.log("Again  back to orignal from");
travelplaces.reverse()
console.log(travelplaces);
//Step 9 
console.log("Alphabetical order to change in terminal");
travelplaces.sort()
console.log(travelplaces);
//Step 10
console.log("Again reverse to back in orignal form");
travelplaces.reverse()
console.log(travelplaces);














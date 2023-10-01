/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.  */
const Magiciannames:string[]= ["Harry potter","DavidCopperfield","Hermoin Granger","Ron Wasley"];
function ShowMagicians(Magicians:string[]):void{
    for (const magician of Magicians){
        console.log(magician);
        
    }
}
function make_Great(Magicians:string[]):string[]{
    const theGreatMagicians:string[]= Magicians.map(magician =>`the great ${magician}`);
    return theGreatMagicians
}
const theGreatMagiciansNames :string[]= make_Great(magicianNames)
console.log("orignal Magicians");
ShowMagicians(magicianNames)
console.log("great magicians");
showMagicians(theGreatMagiciansNames)

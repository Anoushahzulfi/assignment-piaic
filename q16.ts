/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner. • Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array. • Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
let Guest1="Akifa"
let Guest2="Naseem"
let Guest3="Saima"
let Guest4="Sobia"
let Guest5="Sadaf"
let Guest6="Hania"
let Guest7="Hadia"
let Guest8="Hajra"
let listofGuests=["Akifa","Naseem","Saima","Sobia","Sadaf","Hania","Hadia","Hajra"]
//add array in start
const addaGuest=listofGuests.unshift('Sana') 
console.log(listofGuests);
//add array in middle
listofGuests.splice(4,1,"Hibah");     
console.log(listofGuests)
//add array in last
const addanArray=listofGuests.push("Saman")
console.log(listofGuests);
listofGuests.forEach((listofGuests:string) =>{
    console.log(`dear ${listofGuests}, you are invited to dinner`);
})
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner*/
let guest1="Ahmad"
let guest2="Akram"
let guest3="Ahsan"
let guest4="Arif"
let guestsinvited=["Ahmad","Akram","Ahsan","Arif"]
console.log(`Hello ${guestsinvited[0]} you are invited to dinnet at my house tonight`);
console.log(`Hello ${guestsinvited[1]} you are invited to dinnet at my house tonight`);
console.log(`Hello ${guestsinvited[2]} you are invited to dinnet at my house tonight`);
console.log(`Hello ${guestsinvited[3]} you are invited to dinnet at my house tonight`);
//or for each method
guestsinvited.forEach((guestsinvited:string)=>{
    console.log(`dear ${guestsinvited} you are invited to dinner tonight`);
})
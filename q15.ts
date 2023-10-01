/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it. 
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
are inviting. • Print a second set of invitation messages, one for each person who is still in your list. */
let guestinvited1="Ahmad"
let guestinvited2="Akram"
let guestinvited3="Ahsan"
let guestinvited4="Arif"
let guestinvitedArray=["Ahmad","Akram","Ahsan","Arif"]
console.log(`${guestinvitedArray[2]} is not available tonight so he can not comr to the dinner` );
guestinvitedArray.splice(2,1,"Asad")
console.log(guestinvitedArray);
guestinvitedArray.forEach((guestinvitedArray:string)=>{
    console.log(`dear ${guestinvitedArray} you are invited to dinner`);
})

export{guestinvitedArray}
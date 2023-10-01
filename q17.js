"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests. • Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program. */
let invitation1 = "Sana";
let invitation2 = "Akifa";
let invitation3 = "Naseem";
let invitation4 = "Saima";
let invitation5 = "Hibah";
let invitation6 = "Sadaf";
let invitation7 = "Hania";
let invitation8 = "Hadia";
let invitation9 = "Hajra";
let invitation10 = "Saman";
let invitationArray = ["Sana", "Akifa", "Naseem", "Saima", "Hibah", "Sadaf", "Hania", "Hadia", "Hajra", "Saman"];
console.log("i can inite only two people fpr the dinner");
while (invitationArray.length > 2) {
    let removeguest = invitationArray.pop();
    console.log(`sorry ${removeguest} , i cant invite you`);
}
for (let guests of invitationArray) {
    console.log(`hello ${guests} you r invited to dinner`);
}
invitationArray.splice(0, 2);
console.log(`${invitationArray} after dinner`);

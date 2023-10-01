"use strict";
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  */
//arrays
const current_users = ["Safah", "Sibgah", "Salam", "Ali", "Ahmad", "Umer"];
const new_users = ["ali", "sibgah", "aslam", "asad", "asif"];
//function
function checkuserNames(current_users, new_users) {
    const lowercaseCurrentUsers = current_users.map(user => user.toLowerCase());
    for (const newuser of new_users) {
        const lowercaseNewUser = newuser.toLowerCase();
        if (lowercaseCurrentUsers.includes(lowercaseNewUser)) {
            console.log(`username "${newuser}" is already taken lease enter a new usrname`);
        }
        else {
            console.log(`Uername "${newuser}" is available`);
        }
    }
}
checkuserNames(current_users, new_users);

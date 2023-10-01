/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty. 
• If the list is empty, print the message We need to find some users! 
• Remove all of the usernames from your array, and make sure the correct message is printed. */
let userNames:string[]=['"admin","Anoushah","Samar","Umer","Shafaq']
function greetusers(username:string[]):void{
    if (username.length===0){
        console.log('we need to find some users!');
        return;}
    for (const userNames of username){
        if (userNames.toLowerCase()==='admin'){
            console.log('hello admin, would you like to see a report');}
             else {
            console.log(`Hello ${userNames} , thankyou for logging in again.`);}
        }
    }
console.log(`for non empty  usernames:\n`);
greetusers(userNames);
userNames=[]
console.log(`\n\n for empty username \n`);
greetusers(userNames);


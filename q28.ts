/* Stages of Life: Write an if-else chain that determines a person’s stage of life.
 Set a value for the variable age, and then: 
 • If the person is less than 2 years old, print a message that the person is a baby. 
 • If the person is at least 2 years old but less than 4, print a message that the person is a toddler. 
 • If the person is at least 4 years old but less than 13, print a message that the person is a kid. 
 • If the person is at least 13 years old but less than 20, print a message that the person is a teenager. 
 • If the person is at least 20 years old but less than 65, print a message that the person is an adult. 
 • If the person is age 65 or older, print a message that the person is an elder. */
 let age:number=25
 if (age<2){
console.log(`Age is ${age},person is a baby`);
 } else if (age<4){
    console.log(`Age is ${age}person is a toddler`);
 } else if(age<13){
console.log(`Age is ${age}person is a kid`);
 } else if(age<20){
    console.log(`Age is ${age}person is a teenager`);
 }else if(age>65){
console.log(`Age is ${age}person is an elder`);
 } else {
    console.log(`Age is ${age} the person is adult`)
 }


 let age2:number=68
 if (age2<2){
console.log(`Age is ${age2},person is a baby`);
 } else if (age2<4){
    console.log(`Age is ${age2}person is a toddler`);
 } else if(age2<13){
console.log(`Age is ${age2}person is a kid`);
 } else if(age2<20){
    console.log(`Age is ${age2}person is a teenager`);
 }else if(age2>65){
console.log(`Age is ${age2}person is an elder`);
 } else {
    console.log(`Age is ${age2} the person is adult`)
 }

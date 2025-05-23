//singleton
 // Object.create

// object literal 
const jsuser = {
    name : "god",
    level : "Infinite",
    power :"Unmesurable",
    email : "god@godmail.com"
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);

jsuser.greet = function(){
   console.log("Hello mitro");
   
}
jsuser.greet()
console.log(jsuser.greet);

//dates 
let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// let created = new Date(2025,0,6,15,48);
// console.log(created.toString());
// let created = new Date("2025-01-15");//also a way to create custum date

let mytimestamp = Date.now();
console.log(Math.floor(mytimestamp/(1000*60*60*24)));


const user={
    name:"Vatal"
    ,price:1000,
    welcome : function()
    {
        console.log(this);
        
        console.log(`${this.name} ,welcome to website`);
    }
}

// user.welcome()
// user.name ="Tanish";
// user.welcome()
// console.log(this);

// global object in browser is window object 


// function heya()
// {
//     console.log(this);
// }
// heya()

// this is a aero function

const chai = () =>{
    let username = "Ashi"
    console.log(this.username)
}
// chai()
// syntax of arrowfunction
// ()=>{}
// it can also be hold inside variable like 
// const arr = ()=>{
//     console.log("heya users");
// }

// arr()

// const sum = (num1,num2) =>{
//     return num1+num2;
// }

//implicit arrow function
const sum = (num1,num2) => (num1+num2)

console.log(sum(5,96));

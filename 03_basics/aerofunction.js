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
console.log(this);

// global object in browser is window object 

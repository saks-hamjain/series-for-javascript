const usermail = "Saksham@microsoft.com";

if(usermail)
{
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
// we assume is it's empty than it is false else it is true.

// falsy values 
// false,0,null,undefined,NaN,""

// truthy values  
// "0",'false'

if(usermail.length === 0)
{
    console.log("Mail section is Empty");
}

const obj = {}
if(Object.keys(obj).length === 0)
{
    console.log("Object is empty");
}

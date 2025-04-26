// function add(num1,num2)
// {
//     console.log(num1+num2);
// }
// // add(5,6);
// const res = add(5,6);
// console.log("Result :",res);
// this is because we have not returned any value

function add(num1,num2)
{
    let res = num1+num2;
    return res;
}
const res = add(5,6)
console.log("Result :",res);

function login(username)
{
    if(username === undefined)
    {
        return `invalid input`;
    }
    return `${username} just logged in....`
}
console.log(login("Tanish"));


function calculateCartPrice(...num1)// rest operator
{
 return num1
}
console.log(calculateCartPrice(200,5200,963))


const user={
    name :"Saksham"
    ,price:789654
}
function handleObjects(obj)
{
    console.log(`username is ${obj.name} and price is ${obj.price}`);
    
}
handleObjects(user);
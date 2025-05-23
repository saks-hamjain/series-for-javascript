const user= {
    name : "Haroon",
    id: "415263987",
    balance : 45896,
    language: "Hindi"
}

for(const i in user)
{
    console.log(`${i} => ${user[i]}`);    
}

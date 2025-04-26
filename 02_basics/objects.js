//singleton
//object literal
//Object.create()

const mysym = Symbol("Key1")
const userjs ={
    name : "Saksham",
    Age : 20,
    degree : "graduation",
    [mysym] : "mykey1"
}
console.log(userjs.name);
console.log(userjs["name"]);
console.log(userjs[mysym]);
userjs.greeting = function(){
    console.log(`hello ${this.name}`);
}
console.log(userjs.greeting());
console.log(userjs[mysym]);
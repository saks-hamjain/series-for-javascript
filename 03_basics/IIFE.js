// immediately invoked function expression
(function chai(){
    console.log("conection established");
    
})();
//chai()
// it is used to avoid global scope pollution
((name) => {
    console.log(`conection established ${name}`);
    
})("Saksham")
//function overriding//

function greet(){
    console.log("GM");
}
greet()

function greet(){
    console.log("GN");
}
greet()


console.log("********************");

//Below is the Program which shows we can avoid over riding by using Fat arrow function//

var wish = ()=>{
    console.log("Namaste");

}
wish();

var wish = ()=>{
    console.log("Hi");

}
wish();

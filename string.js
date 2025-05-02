//Trim
document.writeln("hello World");
let msg="    hello                   RUSHI    ";
document.writeln(msg.trim());
console.log(msg.trim());

console.log("     hello    world".trim());

//to Upper Case

let str="Hello World  ";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

//String method with arguemnt String methiod with argument
//indexOf
console.log(str.indexOf("Wo"));


//Method Chaining
console.log(msg.trim().toUpperCase());


//slice Method
console.log(str.slice(0,5));


//replace
console.log(str.replace("World","RUSHI"));

//repeat
console.log(str.repeat(10));

//Assignmnet
let message="help!";
console.log(message.trim().toUpperCase());


//2
let nam="ApnaCollege";
console.log(nam.slice(4,9));
console.log(nam.indexOf("na"));
console.log(nam.replace("Apna","Our"));
console.log(nam.slice(4).replaceAll("l","t"));


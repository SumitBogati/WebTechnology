alert("Hello");
console.log("welcome");
console.log("My Name is Sumit Bogati");
console.log(document.getElementById("paragraph").innerHTML);
document.getElementById("paragraph").innerHTML="Hello What's Up!";
// document.getElementById("paragraph").style.color="red";
// document.getElementById("paragraph").style.background="aqua";
document.getElementById("paragraph").style.cssText="color:red ; background:aqua";

var a = 1;
var b = "Sumit";

console.log(typeof a);
console.log(typeof b); 
console.log(typeof document);

var age=10;
age = 20;
let age1=20;
age1 = 30;
const age2=30;
// age2 = 40;

console.log(age);
console.log(age1);
console.log(age2);

console.log(prompt("Enter Your Name "));

document.getElementById("message").innerHTML="Hello My Name is : "+ b;
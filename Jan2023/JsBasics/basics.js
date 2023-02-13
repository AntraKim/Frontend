// Hoisting
//console.log(outerVar);
//console.log(outerLet);

// What is javascript?

// Netscape: it was a language to allow developers to emb executable code in webpages
// to make their webstes more dynamic and interactive

// A Black dog barks
// Dog: HTML, Black: css, barks: javascript

//Characteristics:
//Dynamically typed language
// It has no complilation step. 
// It is an interpretted language with a browser having JIT (just in time) compiler which makes 
// JS executable right before runtime.

// how to code "Hello world"
console.log("Hello World");



/*
There are three ways to declare our variables:
var, let, const
var: declaresd a varible, optionally initializing to a value
let: declares a block-scoped local variable, optional it initialize
const: declares a block-scoped read-only named constant
*/ 
/*
let firstVar = 0;
console.log(firstVar);
firstVar = true;
console.log(firstVar);
firstVar = "stringvalue";
console.log(firstVar);

const = firstConst = 4;
firstConst = 5; //error
*/

//how is var different from let?
//Scopes: global, module, function
//For variables, there is block scope
// block scope is created with a pair of curly brackets
/*
var outerVar = 5;
let outerLet = 10;
if(5 > 3){
  const blockLevelConst = 1;
  //console.log(blockLevelConst);
  var outerVar = 20;
  let outerLet = 30;
}
*/
//console.log(blockLevelConst);
//console.log(outerVar); //20
//console.log(outerLet); //10

//Data types:
/* Primitives:
Number: integer or floating number
String: A sequence of characters
Boolean: true false
null
undefined
NaN: not a number (is a number type)
Symbol: a datatype which instances are unique and immutable
*/
/*
let numval = 1;
let stringval = "1";
console.log(numval == stringval); //true
// It only look at the value, it does not look at the data type
console.log(numval === stringval); // looks at datatype & identity

let naa = 0/ "i";
console.log(naa);
*/
/*
console.log(100 + "200"); //100200
console.log(100 - "200"); //-100
console.log(100 + true); // 101

//Javascript is pretty hard to cause errors and break. conversion can happen if 
//arithmetic makes sense

//Falsy and truthy values:
//false: 0, "", null, undefined, NaN
//true: anything else
if("anystring"){
  //something happens
}
if(0){
  //nothing happens
}

//Symbol: Unique and immutable;
const firstSym = Symbol(123);
const secondSym = Symbol(123);
console.log(firstSym == secondSym);
*/

//Arrays: can hold multiple datatypes
let arr1 = ["zero", 1, 2, 3, true];

//IndexOutOfBounds
console.log(arr1[100]); //undefined
console.log(arr1.length); //5 elements inside the array
arr1[35] = "somevalue";
console.log(arr1.length); //36
console.log(arr1[20]); //undefined

// primary methods:
/*
.pop(): removes from the end
.push(): add at the end
.shift(): removes first
.unshift(): add to the beginning
*/

//Not primitive: objects
//Objects: have funcitonal common with all primitives types
/*
let student = {
  name: "Brad",
  grades:{
    year1 : 90,
    year2: 99
  },
  current: "Junior",
  attendance: false
};
console.log(student.grades.year1);
console.log(student.name);

//to access all fields:
for( let item in student){
  console.log(item);
}

//Functions:
//Typically functions are coded in the following:
function sumAdd(a, b){
  console.log(a + b);
  return a + b;
}

//how does function interact with scoping
let a = 10;
function outer(){
  let a = 20;
  console.log( a + "is currently inside function");
  a = "bird"; //functional scoping will not change outside value
  let b = 20;
  console.log(a +' this is "a" inside function');
  console.log(b +' this is "b" inside function');
}
outer();
console.log(a +' this is "a" outside function');
console.log(b +' this is "b" outside function');
*/

/*
Function scoping: If the variables are defined in the function they are
not available outside the function
if you declare a variable with the same name and keep it function scoped,
it prevents changing the data outside the function

Block scoping: scoped within block (covered with let and var)

Lexical scoping: inner functions can have access to values outside 
where the variable is instantiated. This includes nested function.
Outer functions cannot access varibles that are instantiated in the inner function
but the other way around is okay.
*/
function outer(){
  let b = 20;
  function inner(){
    let c = 10;
    console.log(b); //inner can access "b" which is defined in outer function
  }
  inner();
  console.log(c); //outer cannot access "c" which is defined in the inner function
}
outer();
//Closures are nested functions that access data outside their own scope.

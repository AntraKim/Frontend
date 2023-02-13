// Synchronous programming:

console.log("Brick 1");
console.log("Brick 2");
console.log("Brick 3");
console.log("Brick 4");
console.log("Brick 5");

function firstWayForFunction( optional, parameters){
    console.log("First way to do functions");
}

let secondWayForFunction = (optional, parameters) => {
    console.log("This is the second way to make a function");
}

function oneWith(functionParameter){
    console.log("This is step 1");
    functionParameter();
}

function steptwo(){
    console.log("This is step 2");
}

oneWith(steptwo);


function oneWithOut(){
    console.log("This is step 1");
}

function steptwo(){
    console.log("This is step 2");
}
oneWithOut();
steptwo();

/*
function oneWith(functionParameter){
    console.log("This is step 1");
    functionParameter(para, function(){
        third(para, function(){

        })
    });
}
*/
//Callback chaining, callback hell


//Promises came into existance to help clean up callback hell
// Pending, Fulfilled, or Rejected

//Promises: a callback function to initialze the process that takes in two arguements: Resolve and reject
//Resolved: means it worked
//Rejected: means it failed

//Both Resolve and Reject cna be seen as "return" 

let examplePromise = new Promise((resolve, reject) => {
    let control = false;
    if(control){
        resolve("The state is now fulfilled");
    }else{
        reject("The state is rejected");
    }
});

console.log(examplePromise);

examplePromise.then(value => {
    console.log(value);
    return value;
}).catch( err => {
    console.error(err); //logs the error
}); 


let promiseEx2 = new Promise((resolve, reject) =>{
    resolve(2);
});
promiseEx2.then(function(value1){
    console.log(value1);
    return value1 *2;
}).then(function(value2){
    console.log(value2);
    return value2 *2;
}).then(function(value3){
    console.log(value3);
    return value3*2;
})

//Fetch: promise that involves the calling of a resource and getting it back as a response

fetch("http://jsonplaceholder.typicode.com/posts").then(function(response){
    return response.json();
}).then(function(data){
    let length = data.length;
    console.log(length);
    let tblbody = document.querySelector("#tblPost tbody");
    tblbody.innerHTML="";
    for(let i = 0; i < length; i++){
        let tr = `<tr><td> ${data[i].id} </td> <td> ${data[i].title} </td> <td> ${data[i].body} </td> </tr>`;
        tblbody.innerHTML = tblbody.innerHTML + tr;
    }
});
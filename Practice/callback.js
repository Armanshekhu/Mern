//callback function is a function that is passed as an argument to another function and is 
// executed after some operation has been completed. It allows for asynchronous programming 
// and helps in handling tasks that take time to complete, such as API calls or reading files.


//Synchronous callback - that is executed immediately after being called, blocking the 
// execution of further code until it completes.

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// function callGreet(callback) {
//     callback();
// }

// callGreet(() => greet("Arman"));
// callGreet(greet("Arman"));



//Asynchronous callback - that is executed after a certain period of time or after an
// operation has completed, allowing other code to run in the meantime.


// function position(str) {
//     console.log(`reached ${str}!`);
// }

// function race(callback) {
//     console.log("Race started");
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// race(() => position("middle"));    
// race(() => position("end")); 


function login() {
    console.log("1.Logging in...");

    setTimeout(() => {
        console.log("2.Logged in successfully!");
    }, 5000);
}

function getUser(callback) {
    console.log("3.Getting user...");
    setTimeout(() => {
        console.log("4.User is loaded!");
    }, 2000);
}

function getOrders() {
    console.log("5.Getting orders...");
    setTimeout(() => {
        console.log("6.Orders are loaded!");
    }, 1000);
}

function getOrderData() {
    console.log("7.Getting order data...");
    setTimeout(() => {
        console.log("8.Order data is loaded!");
    }, 3000);
}

login(
    




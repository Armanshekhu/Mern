//callback function is a function that is passed as an argument to another function and is 
// executed after some operation has been completed. It allows for asynchronous programming 
// and helps in handling tasks that take time to complete, such as API calls or reading files.


//Synchronous callback - that is executed immediately after being called, blocking the 
// execution of further code until it completes.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function callGreet(callback) {
    callback();
}

// callGreet(() => greet("Arman"));
// callGreet(greet("Arman"));



//Asynchronous callback - that is executed after a certain period of time or after an
// operation has completed, allowing other code to run in the meantime.


function position(str) {
    console.log(`reached ${str}!`);
}

function race(callback) {
    console.log("Race started");
    setTimeout(() => {
        callback();
    }, 2000);
}

// race(() => position("middle"));    
// race(() => position("end")); 

function login(callback) {
    console.log("1. Logging in...");

    setTimeout(() => {
        console.log("2. Logged in successfully!");
        callback();
    }, 5000);
}

function getUser(callback) {
    console.log("3. Getting user...");

    setTimeout(() => {
        console.log("4. User is loaded!");
        callback();
    }, 2000);
}

function getOrders(callback) {
    console.log("5. Getting orders...");

    setTimeout(() => {
        console.log("6. Orders are loaded!");
        callback();
    }, 1000);
}

function getOrderData() {
    console.log("7. Getting order data...");

    setTimeout(() => {
        console.log("8. Order data is loaded!");
    }, 3000);
}

// login(() => {
//     getUser(() => {
//         getOrders(() => {
//             getOrderData();
//         });
//     });
// });

//Arrow function 

// function sum(a,b) {
//     console.log(a+b);
// }

// sum(5,10);

// const sumArrow = (a,b) => {
//     console.log(a+b);
// }

// sumArrow(5,10);


// let numbers = [1,2,3,4,5];

// numbers.forEach((number) => {
//     console.log(number);
// })


// let EvenNumbers = numbers.map((number) => {
//     return number * 2;
// });

// console.log(EvenNumbers);


function one(callback) {
    console.log("1. One");
    setTimeout(() => {
        console.log("2. Two");
        callback();
    }, 2000);
}

function two(callback) {
    console.log("3. Three");
    setTimeout(() => {
        console.log("4. Four");
        callback();
    }, 1000);
}

function three(callback) {
    console.log("5. Five");
    setTimeout(() => {
        console.log("6. Six");
        callback();
    }, 3000);       
}

function four() {
    console.log("7. Seven");
    setTimeout(() => {
        console.log("8. Eight");
    }, 4000);
}

one(() => {
    two(() => {
        three(() => {
            four()
        })
    })
})

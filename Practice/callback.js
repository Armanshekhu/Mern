//callback function is a function that is passed as an argument to another function and is 
// executed after some operation has been completed. It allows for asynchronous programming 
// and helps in handling tasks that take time to complete, such as API calls or reading files.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function callGreet(callback) {
    callback();
}

callGreet(() => greet("Arman"));
// callGreet(greet("Arman"));
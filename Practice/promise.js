// promise in js is an object that represents the eventual completion or failure of an asynchronous operation and its 
// resulting value.

//promise is placeholder for a value that will be available in the future

// const promise = new Promise((resolve, reject) => {
//     if(3%2==0) {
//         resolve("Even")
//     } else {
//         reject("Odd")
//     }
// })

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("number");
//     }
// )


function login() {
    console.log("1. Logging in...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2. Logged in successfully!");
            resolve();
        },5000);  
    })
}

function getUser() {
    console.log("3. Getting user...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4. User is loaded!");
            resolve();
        },2000)
    })
}

function getOrders() {
    console.log("5. Getting orders...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("6. Orders are loaded!");
            resolve();
        },1000)
    })

}

function getOrderData() {
    console.log("7. Getting order data...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("8. Order data is loaded!");
            resolve();  
        },3000)
    })
}


login()
    .then(getUser)
    .then(getOrders)
    .then(getOrderData)

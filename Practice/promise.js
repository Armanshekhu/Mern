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


// function login() {
//     console.log("1. Logging in...");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2. Logged in successfully!");
//             resolve();
//         },5000);  
//     })
// }

// function getUser() {
//     console.log("3. Getting user...");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("4. User is loaded!");
//             resolve();
//         },2000)
//     })
// }

// function getOrders() {
//     console.log("5. Getting orders...");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("6. Orders are loaded!");
//             resolve();
//         },1000)
//     })

// }

// function getOrderData() {
//     console.log("7. Getting order data...");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("8. Order data is loaded!");
//             resolve();  
//         },3000)
//     })
// }


// login()
//     .then(getUser)
//     .then(getOrders)
//     .then(getOrderData)


async function test() {
    return 5;
}

// test().then(console.log)

function test2() {
    return Promise.resolve(5);
}

// test2().then(console.log)

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let mergedArray = [...arr1, ...arr2];

// console.log(mergedArray);

// promise has 4 apis : promise.all, promise.allSettled, promise.race, promise.any

// Comparison Table
// API	                Waits for	      Success Condition    Failure Condition   Returns
// Promise.all()	    All promises	  All fulfill	       Any rejects	       Array of values
// Promise.allSettled()	All promises	  Always	           Never rejects	   Array of status objects
// Promise.race()	    First settled	  First fulfills	   First rejects	   First settled value/reason
// Promise.any()	    First fulfilled	  First fulfills	   All reject	       First fulfilled value


// Quick way to remember
// Promise.all() → All must succeed.
// Promise.allSettled() → Wait for everyone, report every result.
// Promise.race() → First to finish (success or failure) wins.
// Promise.any() → First success wins; ignore failures unless all fail.


function getProducts() {

    return new Promise((resolve, reject) => {
        let success = false;
        setTimeout(() => {
            if(success) {
                resolve(" Product loaded")
            } else {
                reject(" Product not loaded")
            }
        },1000)
    })
}

function getOffer() {

    return new Promise((resolve, reject) => {
        let success = false;
        setTimeout(() => {
            if(success) {
                resolve("Offer Received")
            } else {
                reject("Offer rejected")
            }
        },5000)
    })
}

function getCategory() {

    return new Promise((resolve, reject) => {
        let success = false;
        setTimeout(() => {
            if(success) {
                resolve("Category received")
            } else {
                reject("Category not received")
            }
        },1000)
    })

}


// Promise.any([getProducts(),getCategory(),getOffer()])
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
//     console.log(err)
// });





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

async function getOrderData() {
    console.log("7. Getting order data...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("8. Order data is loaded!");
            resolve();  
        },3000)
    })
}


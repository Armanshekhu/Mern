// promise in js is an object that represents the eventual completion or failure of an asynchronous operation and its 
// resulting value.

//promise is placeholder for a value that will be available in the future

const promise = new Promise((resolve, reject) => {
    if(3%2==0) {
        resolve("Even number")
    } else {
        reject("Odd number")
    }
})

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

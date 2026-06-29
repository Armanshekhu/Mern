sayHi();

function sayHi() {
    console.log("Hello, welcome to my portfolio!");
}

function outer() {
    let count=0;

    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer();
counter();
counter();

function createAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
                return;
            } 
            balance -= amount;
            console.log();
        },
        getBalance() {
            return balance;
        }
    }
}
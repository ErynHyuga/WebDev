import { createInterface } from "readline";


const password = 1234;
const balance = 10000;
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});


function main() {

    let failedAttempts = 0;
    
    while (failedAttempts < 3) {
        passwordEinlokken();
        if (passwordEinlokken(false)) {
            failedAttempts++;
            console.log(`Access failed.${3 - failedAttempts} attempts left`);
        }
        else if (failedAttempts === 0 <= 3 && passwordEinlokken(true)) {
            console.log("Access granted");
        }
    }
    if (failedAttempts === 3) {
        console.log("ACCESS DENIED. EXITING...");
        window.close(); 
    }
}
function passwordEinlokken() {
    readline.question("Enter your password: ", (input) => {
        switch (input) {
            case password:
                return true;
            default:
                return false;
        }    
    });
    
}
/*
function withdraw(amount) {
    if (amount > balance) {
        console.log("Insufficient balance");
    } else {
        balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${balance}`);
    }
}
function deposit(amount) {
    if (amount <= 0) {
        console.log("Invalid amount");
    } else {
        balance += amount;
        console.log(`Deposited ${amount}. New balance: ${balance}`);
    }
}
function checkBalance() {
    console.log(`Current balance: ${balance}`);
}
function exit() {
    console.log("EXITING...");
    window.close();
}
*/
main();
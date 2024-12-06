import { createInterface } from "readline";

const password = "1234";
const balance = 10000;
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});


function login() {
    readline.question("Enter your password: ", (input) => {
        if (input === password) {
            console.log("Access granted");
            return true;
        } else {
            console.log("ACCESS DENIED");
            return false;
        }
    });
}

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

function main() {
    
    let failedAttempts = 0;
    
    login();
    if (login(false)) {
        failedAttempts++;
    }
    else if (failedAttempts <= 3 && login(true)) {
        
    }
    else {
        console.log("ACCESS DENIED. EXITING...");
        window.close();
    }
    
    

}
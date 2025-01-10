import { createInterface } from "readline";

const password = 1234;
let balance = 10000;
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    
});


async function main() {
    let failedAttempts = 0;

    while (failedAttempts < 3) {
        const isPasswordCorrect = await passwordEinlokken();
        if (isPasswordCorrect) {
            console.log("Access granted \n");
            
            menu();
        } else {
            failedAttempts++;
            console.log(`Access failed. ${3 - failedAttempts} attempts left`);
        }   
    }
    if (failedAttempts === 3) {
        console.log("ACCESS DENIED. EXITING...");
        readline.close();
    }
}
function passwordEinlokken() {
    return new Promise((resolve) => {
        readline.question("Enter your password: ", (inputPw) => {
            if (parseInt(inputPw) === password) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

function withdraw(amount) {
    amount = parseInt(amount);
    if (isNaN(amount) || amount <= 0) {
        console.log("Please enter a valid positive number");
        return;
    }
    if (amount > balance) {
        console.log("Insufficient balance");
    } else {
        balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${balance}`);
    }
}
function deposit(amount) {
    amount = parseInt(amount);
    if (isNaN(amount) || amount <= 0) {
        console.log("Please enter a valid positive number");
        return;
    }
    balance += amount;
    console.log(`Deposited ${amount}. New balance: ${balance}`);
}
function checkBalance() {
    console.log(`Current balance: ${balance}`);
}
function menu() {
    readline.question("Choose your action: \n1. Withdraw \n2. Deposit \n3. Check Balance \n4. Exit \nInput: ", (inputMenu) => {
        switch (inputMenu) {
        case "1":
            readline.question("Enter the amount to withdraw: ", (inputAmount) => {
                withdraw(inputAmount);
                readline.question("Press Enter to continue", () => {
                    menu();
                });
            });
            break;
            
        case "2":
            readline.question("Enter the amount to deposit: ", (inputAmount) => {
                deposit(inputAmount);
                readline.question("Press Enter to continue", () => {
                    menu();
                });
            });
            break;
        case "3":
            checkBalance();
            readline.question("Press Enter to continue", () => {
                menu();
            });
            break;
        case "4":
            exit();
            break;
        default:
            console.log("None-possible action");
            menu();
            break;
        }

    });
}
function exit() {
    console.log("EXITING...");
    process.exit(0);
}

main();
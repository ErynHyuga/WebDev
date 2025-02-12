import { createInterface } from "readline";
 
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const readLineAsync = () => {
  return new Promise((resolve) => {  
    readline.question("", (userRes) => {
      resolve(userRes);
      //readline.close();
    });
  });
};

console.log("enter your name: ");
let name = await readLineAsync();
console.log(`Hello ${name}`);


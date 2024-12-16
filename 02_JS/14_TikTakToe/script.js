import { createInterface } from "readline";
let stopper = true;
let turn = 2;
let x = 0;
let y = 0;
let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
const readline = createInterface({ 
    input: process.stdin,
    output: process.stdout,
});


readline.question("Press Enter to start", () => {
    main();
});



function main(){
    for(let element of field) {
        console.log(element);
    }
    while(stopper){
        
        console.log("in while");
        for(let i = 0; i < 3; i++){
            console.log("in for");
            if(turn/2 === 0) {
                readline.question("Player 2, enter your row: ", (input) => {
                    x = input;
                    console.log(x);
                    readline.question("Player 2, enter your column: ", (input) => {
                        y = 1;
                        console.log(y);
                    });
                });
                field[x][y] = "O";
                turn++;
                stopper = false;
            }
            else if(turn/2 === 1){
                readline.question("Player 1, enter your row: ", (input) => {
                    x = input;
                    readline.question("Player 1, enter your column: ", (input) => {
                        y = input;
                    });
                });
                field[x][y] = "X";
                turn++;
            }
        }
        stopper = false;
    }
}

function winCondition(){
    for(let i = 0; i < 3; i++){
        if(field[i][0] === field[i][1] && field[i][1] === field[i][2]){
            return true;
        }
    }
}

euqation = "";

function add() {
  euqation = "add";
  console.log("add");
  
}
function sub(){
    euqation = "sub";
    console.log("sub");
    
}   
function mul(){
    euqation = "mul";
    console.log("mul");
}
function div(){
    euqation = "div";
    console.log("div");
    
}
function calCER(){
    switch(euqation){
    case "add":
        result = num1 + num2;
        return result;
    case "sub":
        result = num1 - num2;
        return result;
    case "mul":
        result = num1 * num2;
        return result;
    case "div":
        result = num1 / num2;
        return result;
}}


async function buttonClick() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    
    document.getElementById("result").innerHTML = "The result is " + await calCER();    
}



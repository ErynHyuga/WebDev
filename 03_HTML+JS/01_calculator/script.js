euqation = "";


function add() {
    euqation = "add";
    console.log("add");

}
function sub() {
    euqation = "sub";
    console.log("sub");

}
function mul() {
    euqation = "mul";
    console.log("mul");
}
function div() {
    euqation = "div";
    console.log("div");

}
function calCER() {
    let str1 = document.getElementById("num1").value;
    let str2 = document.getElementById("num2").value;
    let num1 = Number(str1);
    let num2 = Number(str2);
    switch (euqation) {
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
    }
    buttonClick();
}


async function buttonClick() {

    calCER();
    console.log("button clicked");

    document.getElementById("result").innerHTML = "The result is " + result;
    console.log(result);
}

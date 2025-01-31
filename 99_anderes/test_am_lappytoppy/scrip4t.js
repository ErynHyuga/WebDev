let data = "Super Duper";
let data2 = data.split("");
let newData = "";
for (let index = 0; index < data2.length; index++) {
    if (data2[index] === "u" || data2[index] === "e") {
        newData += "x";
        
    }
    else {
        newData += data2[index];
    }
}
console.log(newData);
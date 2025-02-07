const ranNumGen = () => {
    console.log("button clicked");

    let lowerStr = document.getElementById("in1").value;
    let lower = Number(lowerStr);
    console.log(lower);

    let upperStr = document.getElementById("in2").value;
    let upper = Number(upperStr);
    console.log(upper);

    if (lower > upper) {
        alert("So nicht")
        return;
    }

    var ranNum = Math.floor(Math.random() * (upper - lower) + lower) + 1;

    if (ranNum <= lower || ranNum >= upper) {
        alert("Es isch passiert");
    }

    document.getElementById('result').innerHTML = "Random Number: " + ranNum;
    console.log(ranNum);
}
/*
const testing = () => {
    for (let i = 0; i < 100; i++) {
        ranNumGen();
        if (ranNumGen() <= lower || ranNumGen() >= upper) {
            console.log("Error");
        }
    }
}
*/
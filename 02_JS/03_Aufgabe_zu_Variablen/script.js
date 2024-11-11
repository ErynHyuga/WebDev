let banana = "Banana";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaWeight = 0.34;
let appleWeight = 0.22;

let bProKilo = 1 / bananaPricePerKilo;
let aProKilo = 1 / applePricePerKilo;
console.log(bProKilo);
console.log(aProKilo);

console.log("17 bananen kosten " +(bananaWeight*17)/bananaPricePerKilo);
console.log("8 Äpfle kosten " +(appleWeight*8)/applePricePerKilo);

console.log("1000 kg bananen kosten " + bProKilo*1000);
console.log("1000 kg Äpfle kosten " + aProKilo*1000);

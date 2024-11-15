let ran2 = Math.floor(Math.random() * 100);
let ran1 = Math.floor(Math.random() * 100);
console.log(ran1, ran2);
if (ran1 < ran2 && ran1 < 50) {
    console.log("Zahl 1 ist kleiner als 2 und Mini");
}else if (ran1<30 || ran2<30){
    console.log(" Eine der beiden ist kleiner als 30");
}else if(ran1<50 &&  ran2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger");
    
}
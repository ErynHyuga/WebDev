//functio

function ranTemp() {
    return Math.floor(Math.random() * 31);
}
function printMenu(name, age, place) {
    
    console.log("Heile " + name + "! In " + place + " hat es folgende Temperatur" + ranTemp);
    console.log("Drücke 1 für eine Addition");
    console.log("Drücke 2 für eine Subtraktion");
    console.log("Drücke 3 für eine Multiplikation");
    console.log("Drücke 4 für eine eine Komplexe Formel");
    console.log("Drücke 5 für das Osterdatum");
}
function add(a, b) {
    return a + " + " + b + " Ergibt " + (a + b);
}
function sub(a, b) {    
    return a +" - " + b + " Erbigt " + a - b;
}
function mul(a, b) {
    return  a + " mal " + b + " Erbigt " +  a *  b ;
}
function superCalc(a, b) {
    return "(" + a + "+"  + b + ")/2" + a + "Ergibt" + (a+b)/2*a;
}
function easterDate(year) {
    N = year - 1900;
    A = N % 19;
    B = [(7 * A + 1) / 19];
    M = (11 * A + 4 - B) % 29;
    Q = N / 4;
    W = (N + Q + 31 - M) %7;
    P = 25 - M - W;
    if (P > 0) {
        return "Ostersonntag ist der " + P + ". März.";
    } else if (P == 0) {
        return "Ostersonntag ist der 31. März.";
    }
}

printMenu("Maximilia", 25, "Wien");
printMenu("Pyotr", 30, "Felkliner Butze");
printMenu("Hans-Diether", 60, "Brand");
printMenu("Sonja", 45, "Brand");


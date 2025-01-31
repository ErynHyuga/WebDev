
let sum = 0;
for (let i = 7; i < 344; i++) {
    if (i % 2 == 0 && i % 12 != 0) {
        sum += i;
    } else if (i % 12 == 0) {
        sum += 3 * i;
    }
}
console.log(sum);



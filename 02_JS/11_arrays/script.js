const arList = [4, 1, 2, 3];
console.log(arList);

arList.push(17, 199);
console.log(arList);

const sum = arList.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const freunde = ["Susi", "Paula", "Hans"];

const freundesliste = () => freunde.join(", ");

console.log(`Meine Freunde sind ${freundesliste()}`);


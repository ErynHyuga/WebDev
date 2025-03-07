const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Book', price: 55 },
];


const filteredItems = items.filter((item) => {
    return item.price <= 10;
});

console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.name + 1;
});

console.log(itemNames);

const foundItem = items.find((item) => {
    return item.name === 'Book';
});
console.log(foundItem);

items.forEach((item) => {
    console.log(item.name);
});


const hasInexpensiveItems = items.some((item) => {
    return item.price <= 10;
});
console.log(hasInexpensiveItems);

const hasExpensiveItems = items.every((item) => {
    return item.price <= 10;
});
console.log(hasExpensiveItems);

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log(total);


const includesBook = items.some(item => item.name === 'Book');
console.log(includesBook);

const nums = [1, 2, 3, 4, 5];
const includes2 = nums.includes(2);
console.log(includes2);


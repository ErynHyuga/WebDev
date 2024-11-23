let arList = [4,1,2,3];
console.log(arList);

arList.push(17, 199);
console.log(arList);
let o = 0;
for (let i = 0; i < arList.length; i++) {
    o = arList[i] ;
    o += arList[i];
    console.log(o);
    
}
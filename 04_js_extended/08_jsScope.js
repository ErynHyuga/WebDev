console.log(vVariable + " vVar isch undefiniert, aber existiert  " + " lVariable & cVariable müan zersch definiert werda ");


var vVariable = "alice"
let lVariable = "bob"
const cVariable = {name: "Aeneas"}

function test() {
    console.log(vVariable + " " + lVariable + " " + cVariable.name);
    vVariable = "notalice"
    lVariable = "ausgebobt"
    //cVariable = 20 wörd net fun/zen. ka net öberschreba werda
    cVariable.name = "Baenaes"
    console.log(vVariable + " " + lVariable + " " + cVariable.name);//ma ka efach sacha us am const array usser snipen
}
test()


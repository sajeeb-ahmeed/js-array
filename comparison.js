console.log(7 > 9);
console.log(9 < 10);
console.log(9 == 9);



var chikenPrice = 170;
var MyBudget = 110;
// if (chikenPrice > MyBudget) {
//     console.log("Ami Muri Khamu Give me 1 pcs Chiken")
// } else {
//     console.log("Alu Borta dia vat den 1 plate")
// }
if (chikenPrice < MyBudget) {
    console.log("Ami Muri Khamu Give me 1 pcs Chiken")
} else {
    console.log("Alu Borta dia vat den 1 plate")
}

var sojib = 1100;
var shakib = 1050;

if (sojib > shakib) {
    console.log("Sojib Well Done")
} else {
    console.log(" Shakib well done")
}
// multiple condition 
var gotJob = true;
var moneySaved = 2000;
var haveHouse = true;
var buyFlat = false;

if ((gotJob == true && moneySaved > 300000) || haveHouse == false) {
    console.log("biye kore felo");

} else {
    console.log("tor kopale biye nai....!!")
}
if (gotJob == true && haveHouse == true && moneySaved < 2200) {
    console.log("hey ami tumr ");
} else {
    console.log("tumi keda ami chini na ------- Like a selfish")
}
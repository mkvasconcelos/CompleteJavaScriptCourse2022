var bill = [125, 555, 44]

//arrow function and if in line
// var tip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

var total = bill.map((bill) => bill >= 50 && bill <= 300 ? console.log(bill, bill * 0.15, bill * 1.15) : console.log(bill, bill * 0.2, bill * 1.2))

// Rodar Node JS crtl + alt + n
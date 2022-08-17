var dolphins = [97, 112, 101]
var koalas = [109, 95, 106]
var totalScore = 0

for (var i = 0; i < dolphins.length; i++) {
    totalScore += dolphins[i]
}
dolphinsScore = totalScore / dolphins.length
totalScore = 0
for (i = 0; i < koalas.length; i++) {
    totalScore += koalas[i]
}
koalasScore = totalScore / koalas.length

if (koalasScore > dolphinsScore && koalasScore > 100) {
    console.log("Koalas wins!")
    console.log("Koalas: " + koalasScore + ", Dolphins: " + dolphinsScore)
} else if (koalasScore < dolphinsScore && koalasScore > 100) {
    console.log("Dolphins wins!")
    console.log("Koalas: " + koalasScore + ", Dolphins: " + dolphinsScore)
} else {
    console.log("It's a draw.")
    console.log("Koalas: " + koalasScore + ", Dolphins: " + dolphinsScore)
}


// Rodar Node JS crtl + alt + n
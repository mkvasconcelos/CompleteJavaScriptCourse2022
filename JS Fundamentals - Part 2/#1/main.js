var dolphins = [44, 23, 71]
var koalas = [65, 54, 49]

var dolphins1 = [85, 54, 41]
var koalas1 = [23, 34, 27]

var calcAverage = (scores) => {
    var calcAvg = 0
    for (var i = 0; i < scores.length; i++) {
        calcAvg += scores[i]
    }
    calcAvg = calcAvg / scores.length
    return calcAvg
}

var checkWinner = function (score1, score2) {
    if (score1 >= 2 * score2) {
        return "Dolphins win (" + score1 + " vs. " + score2 + ")"
    } else if (score2 >= 2 * score1) {
        return "Koalas win (" + score2 + " vs. " + score1 + ")"
    }
}

console.log(checkWinner(calcAverage(dolphins), calcAverage(koalas)))
console.log(checkWinner(calcAverage(dolphins1), calcAverage(koalas1)))




// Rodar Node JS crtl + alt + n
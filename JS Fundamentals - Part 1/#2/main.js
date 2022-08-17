function bmi(mass, height) {
    return mass / (height ** 2)
}

massMarks = 78
heightMarks = 1.69
massJohn = 92
heightJohn = 1.95

bmiMarks = Math.round(bmi(massMarks, heightMarks) * 10) / 10
bmiJohn = Math.round(bmi(massJohn, heightJohn) * 10) / 10

if (bmiMarks > bmiJohn) {
    console.log("Mark's BMI (" + bmiMarks + ") is higher than John's (" + bmiJohn + ")!")
} else {
    console.log("Mark's BMI (" + bmiMarks + ") is lower than John's (" + bmiJohn + ")!")
}
// Rodar Node JS crtl + alt + n
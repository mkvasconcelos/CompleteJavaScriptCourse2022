function bmi(mass, height) {
    return mass / (height ** 2)
}

massMarks = 78
heightMarks = 1.69
massJohn = 92
heightJohn = 1.95

bmiMarks = bmi(massMarks, heightMarks)
bmiJohn = bmi(massJohn, heightJohn)

markHigherBMI = false

if (bmiMarks > bmiJohn) {
    markHigherBMI = true
}

console.log(markHigherBMI)

massMarks = 95
heightMarks = 1.88
massJohn = 85
heightJohn = 1.76

bmiMarks = bmi(massMarks, heightMarks)
bmiJohn = bmi(massJohn, heightJohn)

markHigherBMI = false

if (bmiMarks > bmiJohn) {
    markHigherBMI = true
}

console.log(markHigherBMI)



// Rodar Node JS crtl + alt + n
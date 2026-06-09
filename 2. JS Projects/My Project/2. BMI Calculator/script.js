// BMI Calculator

// Input from user
let height = Number(prompt("Enter your Height(cm)")); // 181
let weight = Number(prompt("Enter your Weight(Kg)")); // 85

// Validate the input
if (isNaN(height) || isNaN(weight) || weight <= 0 || height <= 0) {
    alert("Invalid Input");
}

// Convert height in m
height = height / 100; // 181/100 = 1.81

// Calculate BMI
let bmi = weight / (height * height); // 85/(1.81 * 1.81) 

if (bmi < 18.5) {
    document.write("<h1 class='yellow'>Underweight</h1>");
    document.write(
        `<h1>Your BMI is <span class="yellow">${bmi.toFixed(1)}</span>.</h1>`,
    );
} else if (bmi > 18.5 && bmi <= 24.9) {
    document.write("<h1 class='green'>Normal</h1>");
    document.write(
        `<h1>Your BMI is <span class="green">${bmi.toFixed(1)}</span>.</h1>`,
    );
} else if (bmi > 24.9 && bmi <= 29.9) {
    document.write("<h1 class='orange'>Overweight</h1>");
    document.write(
        `<h1>Your BMI is <span class="orange">${bmi.toFixed(1)}</span>.</h1>`,
    );
} else {
    document.write("<h1 class='red'>Obese</h1>");
    document.write(
        `<h1>Your BMI is <span class="red">${bmi.toFixed(1)}</span>.</h1>`,
    );
}

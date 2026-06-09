function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        return alert("Enter valid inputs");
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").innerText =
        `BMI: ${bmi.toFixed(2)} (${category})`;
}

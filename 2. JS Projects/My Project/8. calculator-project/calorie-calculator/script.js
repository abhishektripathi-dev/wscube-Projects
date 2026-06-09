function calculateCalories() {
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let activity = parseFloat(document.getElementById("activity").value);

    if (!age || !weight || !height) {
        return alert("Fill all fields correctly");
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories = bmr * activity;

    document.getElementById("result").innerText =
        `Daily Calories: ${calories.toFixed(0)} kcal`;
}

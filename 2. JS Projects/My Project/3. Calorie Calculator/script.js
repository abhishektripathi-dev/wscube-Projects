// Calorie Calculator

// Taking Inputs
let age = parseInt(prompt("Enter your Age (years):"));
let gender = prompt("Enter your Gender (male/female):").toLowerCase(); 
let weight = parseFloat(prompt("Enter your Weight (kg):"));
let height = parseFloat(prompt("Enter your Height (cm):"));

let activity = parseInt(
    prompt(
        `Select Activity Level:
1. Sedentary (little or no exercise)
2. Light Exercise (1-3 days/week)
3. Moderate Exercise (3-5 days/week)
4. Active (6-7 days/week)
5. Very Active (intense exercise daily)

Enter choice (1-5):`,
    ),
);

let bmr;
let activityFactor;

// Calculate BMR
if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
} else if (gender === "female") {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
} else {
    document.write("Invalid Gender Entered!");
    throw new Error("Invalid Gender");
}

// Activity Multiplier
switch (activity) {
    case 1:
        activityFactor = 1.2;
        break;
    case 2:
        activityFactor = 1.375;
        break;
    case 3:
        activityFactor = 1.55;
        break;
    case 4:
        activityFactor = 1.725;
        break;
    case 5:
        activityFactor = 1.9;
        break;
    default:
        document.write("Invalid Activity Choice!");
        throw new Error("Invalid Activity");
}

// Daily Calorie Requirement
let dailyCalories = bmr * activityFactor;

// Output
document.write("<h2>Calorie Calculator Result</h2>");
document.write("Age: " + age + " years<br>");
document.write("Gender: " + gender + "<br>");
document.write("Weight: " + weight + " kg<br>");
document.write("Height: " + height + " cm<br><br>");

document.write("<b>BMR:</b> " + bmr.toFixed(2) + " calories/day<br>");
document.write(
    "<b>Daily Calorie Requirement:</b> " +
        dailyCalories.toFixed(2) +
        " calories/day",
);

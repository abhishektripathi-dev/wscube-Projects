//Simple Interest Calculator

// Input from user
let principal = Number(prompt("Enter the Principal amount(₹):"));
let roi = Number(prompt("Enter the Rate of Interest(%) per year:"));
let time = Number(prompt("Enter the Loan duration in years:"));

if (isNaN(principal) || isNaN(roi) || isNaN(time)) {
    alert("Invalid input");
} else {
    let SI = (principal * roi * time) / 100;
    console.log(
        `Interest Amount = ₹${SI} per year for ${time} ${time > 1 ? "years" : "year"}.`,
    );

    let totalAmount = principal + time * SI;

    console.log(`Total Amount to pay = ₹${totalAmount}.`);
}

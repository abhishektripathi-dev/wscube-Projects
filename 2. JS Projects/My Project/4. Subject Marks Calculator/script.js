function calculate() {
    let maths = document.getElementById("maths").value;
    let science = document.getElementById("science").value;
    let english = document.getElementById("english").value;
    let hindi = document.getElementById("hindi").value;
    let sst = document.getElementById("sst").value;

    // Convert to numbers
    maths = Number(maths);
    science = Number(science);
    english = Number(english);
    hindi = Number(hindi);
    sst = Number(sst);

    // Validation
    if (
        isNaN(maths) || isNaN(science) || isNaN(english) ||
        isNaN(hindi) || isNaN(sst)
    ) {
        alert("Please enter valid numbers in all subjects.");
        return;
    }

    if (
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        english < 0 || english > 100 ||
        hindi < 0 || hindi > 100 ||
        sst < 0 || sst > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    let total = maths + science + english + hindi + sst;
    let percentage = (total / 500) * 100;

    document.getElementById("total").innerText = total;
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("bar").style.width = percentage + "%";

    let division = "";
    let grade = "";

    if (percentage >= 60) {
        division = "First Division";
        grade = "A Grade 🏆";
    } else if (percentage >= 50) {
        division = "Second Division";
        grade = "B Grade";
    } else if (percentage >= 40) {
        division = "Third Division";
        grade = "C Grade";
    } else {
        division = "Fail";
        grade = "Fail ❌";
        document.getElementById("bar").style.backgroundColor = "red";
    }

    document.getElementById("division").innerText = division;
    document.getElementById("grade").innerText = grade;
}
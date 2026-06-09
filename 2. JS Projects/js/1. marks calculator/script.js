let chart;

function calculate() {
    let name = document.getElementById("name").value;

    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);
    let hindi = Number(document.getElementById("hindi").value);
    let sst = Number(document.getElementById("sst").value);

    if (
        !name ||
        maths > 100 ||
        science > 100 ||
        english > 100 ||
        hindi > 100 ||
        sst > 100
    ) {
        alert("Please enter valid marks (0-100)");

        return;
    }

    let total = maths + science + english + hindi + sst;

    let percentage = (total / 500) * 100;

    document.getElementById("studentName").innerText = name;

    document.getElementById("total").innerText = total + " / 500";

    document.getElementById("percentage").innerText =
        percentage.toFixed(2) + "%";

    document.getElementById("bar").style.width = percentage + "%";

    /* Grade system */

    let division = "";
    let grade = "";

    if (percentage >= 90) {
        grade = "A+";
        division = "Excellent";
    } else if (percentage >= 75) {
        grade = "A";
        division = "First Division";
    } else if (percentage >= 60) {
        grade = "B";
        division = "Second Division";
    } else if (percentage >= 50) {
        grade = "C";
        division = "Third Division";
    } else if (percentage >= 40) {
        grade = "D";
        division = "Pass";
    } else {
        grade = "F";
        division = "Fail";
    }

    document.getElementById("division").innerText = division;

    document.getElementById("grade").innerText = grade;

    /* Chart */

    let ctx = document.getElementById("chart");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Maths", "Science", "English", "Hindi", "S.St"],
            datasets: [
                {
                    label: "Marks",
                    data: [maths, science, english, hindi, sst],
                },
            ],
        },
    });

    /* Save history */

    let history = JSON.parse(localStorage.getItem("results")) || [];

    history.push(name + " - " + percentage.toFixed(2) + "%");

    localStorage.setItem("results", JSON.stringify(history));

    displayHistory();
}

function displayHistory() {
    let history = JSON.parse(localStorage.getItem("results")) || [];

    let list = document.getElementById("history");

    list.innerHTML = "";

    history.forEach((item) => {
        let li = document.createElement("li");

        li.innerText = item;

        list.appendChild(li);
    });
}

displayHistory();

/* Dark Mode */

function toggleTheme() {
    document.body.classList.toggle("dark");
}

/* PDF Download */

function downloadPDF() {
    let element = document.getElementById("reportCard");

    html2pdf().from(element).save("ReportCard.pdf");
}

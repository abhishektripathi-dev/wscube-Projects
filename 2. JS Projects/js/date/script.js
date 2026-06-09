let divEl = document.querySelectorAll(".countdown-value");
// console.log(divEl);

function calculateDate() {
    let date = new Date();
    // console.log(date);

    let currentDateMs = date.getTime();

    // console.log(currentDateMs)

    let newDate = new Date(
        "Sat Mar 25 2026 23:59:59 GMT+0530 (India Standard Time)",
    );

    // console.log(newDate);
    let newDateMs = newDate.getTime();

    let diff = (newDateMs - currentDateMs) / 1000;

    // console.log(diff);

    let days = Math.floor(diff / 86400);
    let hours = Math.floor((diff % 86400) / 3600);
    let mins = Math.floor(((diff % 86400) % 3600) / 60);
    let sec = Math.floor((diff % 86400) % 3600) % 60;
    let arr = [
        days < 10 ? "0" + days : days,
        hours < 10 ? "0" + hours : hours,
        mins < 10 ? "0" + mins : mins,
        sec < 10 ? "0" + sec : sec,
    ];

    // console.log(days);
    // console.log(hours);
    // console.log(mins);
    // console.log(sec);
    // console.log(days, hours, mins, sec);
    divEl.forEach((item, index) => {
        item.innerText = arr[index];
    });
}
calculateDate();
setInterval(() => {
    calculateDate();
}, 1000);

const allHeading = document.querySelectorAll(".faq h3");

// console.log(allHeading);

allHeading.forEach((el, index) => {
    // console.log(el, index);
    el.addEventListener("click", (e) => {
        // console.log(e.target, index)

        allHeading.forEach((item, i) => {
            if (index != i) {
                item.nextElementSibling.classList.remove("showAns");
                item.firstElementChild.innerHTML = "+";
            }
        });

        e.target.nextElementSibling.classList.toggle("showAns");

        if (e.target.nextElementSibling.classList.contains("showAns")) {
            e.target.firstElementChild.innerHTML = "-";
        } else {
            e.target.firstElementChild.innerHTML = "+";
        }

        // console.log(e.target.nextElementSibling)
    });
});

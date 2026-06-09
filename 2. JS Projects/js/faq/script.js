const heading = document.querySelectorAll(".faq h3");

heading.forEach((h, i) => {
    h.addEventListener("click", (e) => {
        // console.log(e.target);

        heading.forEach((item, index)=>{
            if(i != index){
                item.nextElementSibling.classList.remove("showAns")
                item.lastElementChild.innerText ="+"
            }
        })

        if (e.target.lastElementChild.innerText == "+") {
            e.target.lastElementChild.innerText = "-";
        } else {
            e.target.lastElementChild.innerText = "+";
        }

        e.target.nextElementSibling.classList.toggle("showAns");
    });
});

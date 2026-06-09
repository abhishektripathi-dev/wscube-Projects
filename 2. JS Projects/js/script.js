const btnEl = document.querySelectorAll(".btn");

btnEl[0].addEventListener("click", (e)=>{
    btnEl[1].classList.add("gold")
    btnEl[0].classList.remove("gold")
})

btnEl[1].addEventListener("click", (e)=>{
    btnEl[0].classList.add("gold")
    btnEl[1].classList.remove("gold")
})
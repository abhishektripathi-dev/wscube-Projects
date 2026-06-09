const mainEl = document.querySelector(".main");
const btnEl = document.querySelector(".main button");

mainEl.addEventListener("click", (e) => {
    // alert("Main Element");
    // console.log(e.target);
    e.target.style.color = "blue";
});

btnEl.addEventListener("click", (e) => {
    e.stopPropagation();
    e.target.style.color = "red";
});

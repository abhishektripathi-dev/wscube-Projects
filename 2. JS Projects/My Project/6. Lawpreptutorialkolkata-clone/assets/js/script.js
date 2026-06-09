let downloadBrochure = document.querySelector(".download-brochure");
let model = document.querySelector(".model");
let closeModel = document.querySelector(".close-model");

downloadBrochure.addEventListener("click", (e) => {
    model.classList.add("open-model");
});

closeModel.addEventListener("click", (e)=>{
    model.classList.remove("open-model");
})
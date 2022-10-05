
const popUpButton = document.querySelector(".pop-up-desktop")

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY < "300"){
        popUpButton.classList.add("hide")
    } else {
        popUpButton.classList.remove("hide")
    }
})
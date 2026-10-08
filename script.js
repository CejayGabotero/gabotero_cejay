
const button = document.getElementById("btn");
const target = document.querySelector(".nav-links");

if (button && target) {
    button.addEventListener("click", () => {
        target.classList.toggle("active");
    });
}

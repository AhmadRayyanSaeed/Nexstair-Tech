const headerButton = document.getElementById("header_button");
const headNav = document.getElementById("head_nav");
const overlay = document.getElementById("overlay");


headerButton.addEventListener("click", function () {
    headNav.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    headNav.classList.remove("show");
    overlay.classList.remove("show");
});

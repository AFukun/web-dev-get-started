const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

thumbBar.addEventListener("click", changeImage);

function changeImage(e) {
    displayedImage.setAttribute("src", e.target.getAttribute("src"));
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function() {
    if (btn.textContent === "Darken") {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});
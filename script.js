
const text = ["Full Stack Developer", "Web Developer", "Tech Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, 100);
}

type();

/* SCROLL ANIMATION */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});
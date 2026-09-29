// ================================
// Jakariya Ahmed - Website Hub
// ================================

// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// ================================
// Project Counter
// ================================

const cards = document.querySelectorAll(".card");
const projectCount = document.getElementById("projectCount");

if (projectCount) {
    projectCount.textContent =
        `${cards.length} Project${cards.length === 1 ? "" : "s"}`;
}


// ================================
// Card Click Animation
// ================================

cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "translateY(-2px)";

        setTimeout(() => {
            card.style.transform = "";
        }, 150);

    });

});


// ================================
// Page Loaded
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ================================
// Console Message
// ================================

console.log(
    "🚀 Welcome to Jakariya Ahmed's Website Hub!"
);

console.log(
    `📂 Total Projects: ${cards.length}`
);
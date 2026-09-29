// ================================
// Jakariya Ahmed Portfolio
// ================================


// Current Year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Project Counter

const projectCount = document.getElementById("projectCount");

if (projectCount) {
    projectCount.textContent = "5+";
}


// Smooth navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Small console message

console.log(
    "🚀 Welcome to Jakariya Ahmed's Portfolio!"
);

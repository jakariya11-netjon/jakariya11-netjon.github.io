// Current Year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Project Count

const projectCount = document.getElementById("projectCount");

if (projectCount) {
    projectCount.textContent = "5+";
}


// Smooth Scroll

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


console.log(
    "🚀 Welcome to Jakariya Ahmed's Website!"
);

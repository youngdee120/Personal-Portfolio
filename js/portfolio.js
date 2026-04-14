document.addEventListener("DOMContentLoaded", function () {
    const works = document.querySelectorAll(".work");
    const showMoreBtn = document.getElementById("showMoreBtn");

    if (!showMoreBtn || works.length === 0) return;

    let visibleCount = 10;
    const increment = 4;

    works.forEach((work, index) => {
        work.style.animationDelay = `${index * 70}ms`;

        if (index >= visibleCount) {
            work.classList.add("hidden");
        }
    });

    if (works.length <= visibleCount) {
        showMoreBtn.style.display = "none";
    }

    showMoreBtn.addEventListener("click", function () {
        for (let i = visibleCount; i < visibleCount + increment && i < works.length; i++) {
            works[i].classList.remove("hidden");
        }

        visibleCount += increment;

        if (visibleCount >= works.length) {
            showMoreBtn.style.display = "none";
        }
    });
});
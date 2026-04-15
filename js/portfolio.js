document.addEventListener("DOMContentLoaded", function () {
    const works = Array.from(document.querySelectorAll(".work"));
    const showMoreBtn = document.getElementById("showMoreBtn");
    const grid = document.querySelector(".work-list");

    if (!showMoreBtn || !grid || works.length === 0) return;

    let visibleCount = 0;
    let columns = 1;

    function getColumnCount() {
        const styles = window.getComputedStyle(grid);
        const template = styles.gridTemplateColumns;

        if (!template || template === "none") return 1;

        return template.split(" ").length;
    }

    function updateColumns() {
        columns = getColumnCount();
    }

    function renderItems() {
        works.forEach((work, index) => {
            if (index < visibleCount) {
                work.classList.remove("hidden");
            } else {
                work.classList.add("hidden");
            }
        });

        showMoreBtn.style.display =
            visibleCount >= works.length ? "none" : "inline-block";
    }

    function init() {
        updateColumns();

        // 👇 ALWAYS fill full rows
        visibleCount = columns;

        renderItems();
    }

    showMoreBtn.addEventListener("click", function () {
        updateColumns();

        // 👇 add full rows only
        visibleCount = Math.min(visibleCount + columns, works.length);

        renderItems();
    });

    // Handle resize properly
    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const prevColumns = columns;
            updateColumns();

            if (columns !== prevColumns) {
                // Adjust visible items to nearest full row
                visibleCount = Math.ceil(visibleCount / columns) * columns;
                visibleCount = Math.min(visibleCount, works.length);
                renderItems();
            }
        }, 150);
    });

    // Animation delay
    works.forEach((work, index) => {
        work.style.animationDelay = `${index * 60}ms`;
    });

    init();
});
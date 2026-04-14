function getMenu() {
    return document.getElementById("sidemenu");
}

function openmenu() {
    const sidemen = getMenu();
    if (sidemen) sidemen.style.right = "0";
}

function closemenu() {
    const sidemen = getMenu();
    if (sidemen) sidemen.style.right = "-240px";
}

async function loadPartial(targetId, filePath) {
    const target = document.getElementById(targetId);
    if (!target) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        target.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
        target.innerHTML = "";
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const iconClass = theme === "light" ? "fas fa-sun" : "fas fa-moon";

    const updateIcon = (buttonId) => {
        const button = document.getElementById(buttonId);
        if (!button) return;
        const icon = button.querySelector("i");
        if (icon) icon.className = iconClass;
    };

    updateIcon("themeToggle");
    updateIcon("themeToggleDesktop");
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    document.addEventListener("click", function (e) {
        if (e.target.closest("#themeToggle") || e.target.closest("#themeToggleDesktop")) {
            const current = document.documentElement.getAttribute("data-theme") || "dark";
            applyTheme(current === "dark" ? "light" : "dark");
        }
    });
}

function initActiveNav() {
    const page = document.body.dataset.page;
    document.querySelectorAll("[data-nav]").forEach((link) => {
        if (link.getAttribute("data-nav") === page) {
            link.classList.add("active-nav");
        }
    });
}

function initStickyNav() {
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        if (!nav) return;

        if (window.scrollY > 50) nav.classList.add("sticky");
        else nav.classList.remove("sticky");
    });
}

function initPageTransitions() {
    document.body.classList.add("page-ready");

    document.addEventListener("click", function (e) {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute("href");
        const isExternal =
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("#") ||
            link.hasAttribute("download");

        if (isExternal) return;

        e.preventDefault();
        document.body.classList.add("page-leaving");

        setTimeout(() => {
            window.location.href = href;
        }, 180);
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    await Promise.all([
        loadPartial("site-header", "partials/header.html"),
        loadPartial("site-footer", "partials/footer.html"),
        loadPartial("chatbot-widget", "partials/chatbot.html")
    ]);

    initTheme();
    initActiveNav();
    initStickyNav();
    initPageTransitions();

    if (typeof window.initChatbot === "function") {
        window.initChatbot();
    }

    document.body.classList.add("page-ready");
});
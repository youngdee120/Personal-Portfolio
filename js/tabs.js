window.opentab = function (event, tabname) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach((link) => link.classList.remove("active-link"));
    tabcontents.forEach((content) => content.classList.remove("active-tab"));

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active-link");
    }

    const activeTab = document.getElementById(tabname);
    if (activeTab) {
        activeTab.classList.add("active-tab");
    }
};
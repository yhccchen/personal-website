document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    const links = document.querySelectorAll(".nav-menu a");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    links.forEach((link) => {
        link.addEventListener("click", () => {
            menu?.classList.remove("is-open");
            toggle?.setAttribute("aria-expanded", "false");
        });
    });

    document.querySelectorAll('a[href^="http"]').forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

    const newsList = document.querySelector(".news-list");
    const newsToggle = document.querySelector(".news-toggle");

    if (newsList && newsToggle && newsList.children.length > 3) {
        newsList.classList.add("is-collapsible");
        newsToggle.hidden = false;

        newsToggle.addEventListener("click", () => {
            const isExpanded = newsList.classList.toggle("is-expanded");
            newsToggle.setAttribute("aria-expanded", String(isExpanded));

            const label = newsToggle.querySelector("span");
            if (label) {
                label.textContent = isExpanded ? "Show less" : "Show more";
            }
        });
    }
});

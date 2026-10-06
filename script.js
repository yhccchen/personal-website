document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    const links = document.querySelectorAll(".nav-menu a");

    const closeMenu = () => {
        menu?.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
        toggle?.setAttribute("aria-label", "Open navigation");
    };

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menu.classList.contains("is-open")) {
                closeMenu();
                toggle.focus();
            }
        });

        window.matchMedia("(min-width: 721px)").addEventListener("change", closeMenu);
    }

    links.forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.querySelectorAll('a[href^="http"], a[href$=".pdf"]').forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll(".hero-actions i").forEach((icon) => {
        icon.setAttribute("aria-hidden", "true");
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

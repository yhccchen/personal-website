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
});

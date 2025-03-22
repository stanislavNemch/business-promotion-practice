document.addEventListener("DOMContentLoaded", function () {
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll(".faq-list li");

    faqItems.forEach((item) => {
        const question = item.querySelector("h4");
        const answer = item.querySelector("p");
        const icon = question.querySelector(".faq-icon use");

        question.addEventListener("click", () => {
            const isVisible = answer.style.display === "block";
            answer.style.display = isVisible ? "none" : "block";
            question.classList.toggle("active", !isVisible);
            icon.setAttribute(
                "href",
                isVisible
                    ? "./images/icons.svg#plus-circle"
                    : "./images/icons.svg#minus-circle"
            );
        });
    });

    // Price table item activation on hover
    const initialActiveItem = document.querySelector(
        ".price-table-item.active"
    );
    const priceTableItems = document.querySelectorAll(".price-table-item");

    priceTableItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            priceTableItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("active");
            if (!Array.from(priceTableItems).some((i) => i.matches(":hover"))) {
                if (initialActiveItem) {
                    initialActiveItem.classList.add("active");
                }
            }
        });
    });

    // Navigation toggle
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === `./${currentPath}`) {
            link.classList.add("active");
        }
    });
});

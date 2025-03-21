document.addEventListener("DOMContentLoaded", function () {
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
            ); // Change the icon
        });
    });
});

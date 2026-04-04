const cards = document.querySelectorAll(".faq-card");
cards.forEach(card => {
    const header = card.querySelector(".faq-header");
    header.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

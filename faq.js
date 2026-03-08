const cards = document.querySelectorAll(".faq-card");

cards.forEach(card => {

let header = card.querySelector(".faq-header");

header.addEventListener("click", () => {

card.classList.toggle("active");

});

});
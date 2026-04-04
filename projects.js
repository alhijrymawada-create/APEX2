const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('h3').innerText;
        alert(`فتح المشروع: ${projectTitle}`);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.getElementById('starfield');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 7 + 3; 
        const duration = Math.random() * 4 + 2; 
        const delay = Math.random() * 10;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.setProperty('--duration', `${duration}s`);

        starContainer.appendChild(star);
    }
});
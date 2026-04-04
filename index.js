window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll(".nav-links li").forEach(li => li.classList.remove("active"));
                navLink.parentElement.classList.add("active");
                current.classList.add("active");
            }
        }
    });
});

const logo = document.querySelector('.main-logo');
let t = 0;
if (logo) {
    setInterval(() => {
        t += 0.05;
        logo.style.transform = `translateY(${Math.sin(t) * 15}px)`;
    }, 30);
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .ambition-card, .flip-card, .about-image-wrapper').forEach(el => {
    revealObserver.observe(el);
});

const slider = document.getElementById('mainSlider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        slider.scrollLeft += 350;
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollLeft -= 350;
    });
}

const sideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-left').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-50px)";
    el.style.transition = "1s ease-out";
    sideObserver.observe(el);
});

document.querySelectorAll('.reveal-right').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateX(50px)";
    el.style.transition = "1s ease-out";
    sideObserver.observe(el);
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
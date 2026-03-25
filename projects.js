// يمكن إضافة تأثيرات إضافية عند الضغط على المشروع
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // مثال: يمكن فتح المشروع في صفحة منفصلة أو نافذة منبثقة
        const projectTitle = card.querySelector('h3').innerText;
        alert(`فتح المشروع: ${projectTitle}`);
    });
});
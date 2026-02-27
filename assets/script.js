document.addEventListener('DOMContentLoaded', () => {
    const headerBg = document.querySelector('.header-bg');
    const heroContent = document.querySelector('.hero-content');

    
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        
        
        let blurValue = Math.min(scrollPos / 50, 10);
        
        if (headerBg) {
            headerBg.style.filter = `blur(${blurValue}px)`;
        }

        
        const containerText = document.querySelector('.my-auto');
        if (containerText) {
            containerText.style.opacity = 1 - (scrollPos / 600);
        }
    });

    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! Nos contactaremos pronto.');
            contactForm.reset();
        });
    }
});

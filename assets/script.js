document.addEventListener('DOMContentLoaded', () => {
    const headerBg = document.querySelector('.header-bg');
    const heroContent = document.querySelector('.hero-content');

    // 1. Efecto de Desenfoque al hacer Scroll
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        
        // Calculamos el desenfoque: 1px de blur por cada 50px de scroll (máximo 10px)
        let blurValue = Math.min(scrollPos / 50, 10);
        
        // Desenfoque a la capa de fondo
        if (headerBg) {
            headerBg.style.filter = `blur(${blurValue}px)`;
        }

        // Opcional: El texto se desvanece suavemente mientras bajas
        const containerText = document.querySelector('.my-auto');
        if (containerText) {
            containerText.style.opacity = 1 - (scrollPos / 600);
        }
    });

    // 2. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! Nos contactaremos pronto.');
            contactForm.reset();
        });
    }
});

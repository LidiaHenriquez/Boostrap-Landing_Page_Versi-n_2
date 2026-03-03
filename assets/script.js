
function saludar() {
    alert("¡Gracias por visitarnos! Desliza hacia abajo para ver nuestras delicias.");
    
    const titulo = document.getElementById('main-title');
    if (titulo) {
        titulo.innerText = "¡La mejor experiencia de Sushi!";
        titulo.style.color = "#C5A059"; 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;

            
            alert(`¡Gracias, ${nombre}! Hemos recibido tu solicitud. Contactaremos a ${email} pronto.`);

            
            form.innerHTML = `
                <div class="text-center py-4">
                    <i class="fas fa-check-circle fa-3x mb-3" style="color: #C5A059;"></i>
                    <h4 style="color: #121212;">Reserva Enviada</h4>
                    <p class="text-muted">Te esperamos pronto en SaboresApp.</p>
                    <button class="btn btn-outline-dark btn-sm" onclick="location.reload()">Nueva Reserva</button>
                </div>`;
        });
    }
});
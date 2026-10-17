// Función para mostrar mensaje al agendar cita
function mostrarMensaje() {
    alert('✅ ¡Gracias por elegirnos! Te contactaremos pronto para confirmar tu cita.');
}

// Función para mostrar/ocultar menú en móviles
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Manejar el envío del formulario
document.getElementById('formContacto').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    const respuesta = document.getElementById('respuesta');

    respuesta.textContent = `🎉 ¡Hola ${nombre}! Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.`;
    
    // Limpiar el formulario
    this.reset();

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        respuesta.textContent = '';
    }, 5000);
});
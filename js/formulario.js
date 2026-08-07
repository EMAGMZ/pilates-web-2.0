// =============================================
// FORMULARIO DE INSCRIPCIÓN
// Envía los datos al webhook de n8n
// =============================================

const formulario = document.querySelector('.formPilates');

formulario.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const datos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        edad: document.getElementById('edad').value,
        dias: document.getElementById('dias').value,
        patologia: document.getElementById('patologia').value
    };

    try {
        const respuesta = await fetch('https://jimepilates.duckdns.org/webhook/inscripcion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            alert('¡Inscripción enviada con éxito!');
            formulario.reset();
        } else {
            alert('Error al enviar. Intentá de nuevo.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudo conectar con el servidor.');
    }
});
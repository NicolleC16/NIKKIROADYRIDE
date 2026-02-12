// Simular envío de invitación a ser miembro al registrar
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    const correo = document.getElementById("correo").value;

    alert(`¡Gracias por registrarte! Se ha enviado una invitación a ${correo} para ser miembro de NIKKI ROAD & RIDE.`);

    // Aquí se puede agregar funcionalidad para redirigir o limpiar el formulario si es necesario
});


// Función de pop-up flotante para WhatsApp
const whatsappPopup = document.createElement("div");
whatsappPopup.id = "whatsapp-popup";
whatsappPopup.innerHTML = `<a href="whatsapp://send?phone=+123456789">
                              <img src="whatsapp.gif" alt="WhatsApp">
                           </a>`;
document.body.appendChild(whatsappPopup);
function abrirVentanaRegistro() {
    window.open("register.html", "_blank", "width=600,height=600");
}

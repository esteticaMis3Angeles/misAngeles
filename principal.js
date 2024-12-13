// principal.js

// Obtener el estado desde localStorage (simula la conexión con el panel de administración)
document.addEventListener("DOMContentLoaded", () => {
    const statusText = document.getElementById("status-text");
    const status = JSON.parse(localStorage.getItem("currentStatus"));

    if (status) {
        if (status.current === "Abierto") {
            statusText.textContent = "¡Estamos Abiertos!";
            statusText.style.color = "#28a745";
        } else if (status.current === "Ocupado") {
            statusText.textContent = "Estamos Ocupados, por favor espere.";
            statusText.style.color = "#ffc107";
        } else if (status.current === "Cerrado") {
            statusText.textContent = "Lo sentimos, estamos cerrados.";
            statusText.style.color = "#dc3545";
        } else if (status.current === "Cerrado vuelvo a las HH:MM") {
            statusText.textContent = `Cerrado, volvemos a las ${status.nextOpeningTime}`;
            statusText.style.color = "#6c757d";
        }
    } else {
        statusText.textContent = "Estado no disponible.";
    }
});

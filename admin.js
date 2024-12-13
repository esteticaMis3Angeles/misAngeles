// admin.js

// Mostrar el campo de hora solo si el estado seleccionado es "Cerrado vuelvo a las HH:MM"
const statusSelect = document.getElementById("status-select");
const timeInput = document.getElementById("time-input");

statusSelect.addEventListener("change", () => {
    if (statusSelect.value === "Cerrado vuelvo a las HH:MM") {
        timeInput.style.display = "block";
    } else {
        timeInput.style.display = "none";
    }
});

// Guardar el estado en localStorage
function saveStatus() {
    const selectedStatus = statusSelect.value;
    const nextOpeningTime = document.getElementById("next-opening-time").value;

    const status = {
        current: selectedStatus,
        nextOpeningTime: nextOpeningTime
    };

    localStorage.setItem("currentStatus", JSON.stringify(status));
    alert("Estado actualizado.");
}


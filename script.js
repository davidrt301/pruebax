// script.js
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
    document.getElementById("date").textContent = now.toLocaleDateString();
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById("location").textContent = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
        }, () => {
            document.getElementById("location").textContent = "Ubicación no disponible";
        });
    } else {
        document.getElementById("location").textContent = "Geolocalización no soportada";
    }
}

setInterval(updateTime, 1000);
updateTime();
updateLocation();

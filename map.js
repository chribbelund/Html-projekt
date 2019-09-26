
var map = L.map('map', {
    dragging: false,
    zoomControl: true,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    keyboard: false
}).setView([59.254445, 15.243815], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([59.254445, 15.243815]).addTo(map)
    .bindPopup('Här kan man va.<br> Kul va?')
    .openPopup();

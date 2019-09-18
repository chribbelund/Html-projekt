var map = L.map('map').setView([59.258411, 15.256976], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([59.258411, 15.256976]).addTo(map)
    .bindPopup('Här bor jag.<br> Kul va?')
    .openPopup();
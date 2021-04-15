var map = L.map('mapid').setView([-8.0421584,-35.008676], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl : "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage?id=1" class="chose-orphanage"> <img src="/images/arrow-white.svg" ></a> ')

//create and add marker
L.marker([-8.0421584,-35.008676], {icon})
.addTo(map)
.bindPopup(popup)

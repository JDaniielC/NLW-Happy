const options = {
    dragging: false,
    touchzoom: false,
    doubleClickZoom: false,
    scrollWheelZoom : false,
    zoomControl: false
 }

var map = L.map('mapid', options).setView([-8.0421584,-35.008676], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl : "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-8.0421584,-35.008676], {icon})
.addTo(map)

function selectImage(event) {
    const button = event.currentTarget

    //remoever todas as classes Active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        return button.classList.remove("active")
    })
    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de image
    imageContainer.src = image.src
    //adcionar a classe .active para esse botao
    button.classList.add('active')
}
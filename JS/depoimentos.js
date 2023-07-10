const lamp = document.getElementById('lamp');

function lampOn() {
    lamp.src = '/img/ligado.webp';
}

function lampOff() {
    lamp.src = '/img/desl.webp';
}



lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
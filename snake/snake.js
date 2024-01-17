let header = document.getElementById('firstHeader')

function headerFunc() {
    header.innerHTML = 'Yoooo'
}

function gameStart() {
    document.getElementById('game').innerHTML = 'Welcome to the game';
}

window.addEventListener('load', headerFunc())
let botaoMenu = document.querySelector('#menu')
let menuMobile = document.querySelector('#menu-mobile')

let menuAberto = false

function AbrirOuFecharMenu() {
    switch (menuAberto) {
        case false:
            menuAberto = true
            menuMobile.classList.add('menu-mobile')
            break;
        case true:
            menuAberto = false
            menuMobile.classList.remove('menu-mobile')
            break;
    }
}

botaoMenu.onclick = AbrirOuFecharMenu

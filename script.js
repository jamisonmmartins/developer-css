let botaoMenu = document.querySelector('#menu')
let menuMobile = document.querySelector('#menu-mobile')

let menuAberto = false

function AbrirOuFecharMenu() {
    switch (menuAberto) {
        case false:
            document.querySelector('#menu p').innerText = 'Fechar'
            menuAberto = true
            menuMobile.classList.add('menu-mobile')
            break;
        case true:
            document.querySelector('#menu p').innerText = 'menu'
            menuAberto = false
            menuMobile.classList.remove('menu-mobile')
            break;
    }
}

botaoMenu.onclick = AbrirOuFecharMenu

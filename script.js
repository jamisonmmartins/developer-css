let botaoMenu = querySelector('#menu')
let menuAberto = 'false'

function AbrirOuFecharMenu(menuAberto) {
    if (menuAberto === false) {
        bataoMenu.innerText = 'Fechar'
    }
}


botaoMenu.onclick = AbrirOuFecharMenu()

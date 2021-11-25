function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'assets-hora-js/imagem/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'assets-hora-js/imagem/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        img.src = 'assets-hora-js/imagem/noite.jpg'
        document.body.style.background = '#515154'
    }
}
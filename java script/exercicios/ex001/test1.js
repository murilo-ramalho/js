function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('i')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}
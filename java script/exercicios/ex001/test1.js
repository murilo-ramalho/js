function carregar() {
    var msg = window.document.querySelector(div.msg)
    var imagem = window.document.querySelector(div.i)
    var msg = String(msg)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}
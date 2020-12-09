function carregar() {
    var msg = window.document.querySelector(div.msg)
    var imagem = window.document.querySelector(img.i)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}
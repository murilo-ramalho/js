function carregar() {
    var msg = window.document.getElementById(i)
    var imagem = window.document.getElementById(foto)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}
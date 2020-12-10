function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('i')
    var f = window.document.getElementById('fundo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    //manha
    if (hora<12 && hora>-1) {
        imagem.src = 'manha.png'
        msg.innerHTML += ' <strong>bom dia</strong>'
        f.style.backgroundColor = '#3299c9'
    //tarde
    } else if (hora>12 && hora<18) {
        imagem.src  = 'tarde1.png'
        msg.innerHTML += ' <strong>boa tarde</strong>'
        f.style.backgroundColor = '#b17526'
    //noite
    } else {
        imagem.src = 'noite.png'
        msg.innerHTML += ' <strong>boa noite</strong>'
        f.style.backgroundColor = '#170555'
    }
}
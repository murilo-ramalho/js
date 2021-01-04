function magica() {
    var c = 0
    for (var nS = Number(document.getElementById('nE').value) ; nS>10; ) {
            window.alert(`preencha corretamente`)
            nS = 0
    }
    var S = document.getElementById('E')
    S.innerHTML = `o número digitado é ${nS}`
}
function entra() {
    var t = document.querySelector('h1')
    var data = new Date()
    var hora = data.getHours()
    //manha
    if (hora<12 && hora>-1) {
        t.innerHTML = "bom dia"
    //tarde
    } else if (hora>12 && hora<18) {
        t.innerHTML = "boa tarde"
    //noite
    } else {
        t.innerHTML = "boa noite"
    }
    
}
function saiu() {
    var t = document.querySelector('h1')
    t.innerHTML = 'esse script é um teste de for'
}
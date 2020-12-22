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
    t.innerHTML = "ps: deu errado"
}
function saiu() {
    var t = document.querySelector('h1')
    t.innerHTML = 'esse script é um teste de for'
}
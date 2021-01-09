var n = Number(window.document.getElementById('nE').value)
let addN = document.getElementById('sadd')
let S = document.getElementById('E')
let vetor = []

function vr(n) {
    if (n >= 1 && n<=100) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (vr(n)==true) {
        window.alert('deu certo')
    } else {
        window.alert('deu errado')
    }
}
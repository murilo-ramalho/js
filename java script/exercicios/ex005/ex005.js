let n = Number(document.getElementById('nsE').value)
let lista = document.getElementById('amosN')
let S = document.getElementById('E')
let vetor = []

function isN(n) {
    if (n>=1 && n<=100) {
        return true
    } else {
        return false
    }
} 

function inL(n, l) {
    if(l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isN(n) && Intl(n, vetor)) {

    } else {
        window.alert('valor invalido ou já existente')
    }
}
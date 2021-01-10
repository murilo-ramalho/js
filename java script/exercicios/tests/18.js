let n = document.getElementById('nE')
let addN = document.getElementById('sadd')
let S = document.getElementById('E')
let vetor = []

function vr(n) {
    if (Number(n) >= 1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (vr(n.value)) {
        addN = document.createElement("option")
    } else {
        window.alert('deu errado')
    }
}
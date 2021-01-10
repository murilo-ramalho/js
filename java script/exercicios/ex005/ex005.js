let n = document.getElementById('nsE')
let lista = document.getElementById('amosN')
let S = document.getElementById('E')
let vetor = []

function isN(n) {
    if (Number(n)>=1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
} 

function inL(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isN(n.value) && !inL(n.value, vetor)) {
        vetor.push(Number(n.value))
        let i = document.createElement("option")
        i.text = `valor ${n.value} adicionado`
        lista.appendChild(i)
        S.innerHTML = ''
    } else {
        window.alert('valor invalido ou já existente')
    }
    n.value = ''
    n.focus
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        let t = vetor.length
        let mr = vetor[0]
        let mnr = vetor[0]
        let soma = 0
        let med = 0
        for(let c in vetor) {
            soma += vetor[c]
            if (vetor[c] > mr) {
                mr = vetor[c]
            }
            if (vetor[c] < mnr) {
                mnr = vetor[c]
            } 
        }
        med = soma/t
        S.innerHTML = ''
        S.innerHTML += `<p>temos ${t} números cadastrados</p>` 
        S.innerHTML += `<p>o maior número digitado é ${mr} e o menor número digitado é ${mnr}</p>`
        S.innerHTML += `<p>a soma de todos os valore é ${soma}</p>`
        S.innerHTML += `<p>a media dos valores ${med}</p>`
    }
}
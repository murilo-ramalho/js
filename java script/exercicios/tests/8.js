function magica() {
    var nS = Number(document.getElementById('nE').value)
    var S = document.getElementById('E')
    if (Number.isInteger(nS)) {
        nS.toFixed().replace('.', ',')
    }
    if (Number.isInteger(nS)) {
        S.innerHTML = `o número ${nS} é um número inteiro`
    } else {
        S.innerHTML = `o número ${nS} é um número decimal`
    }
}
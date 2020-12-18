function magica() {
    var nS = document.getElementById('nE').value
    var S = document.getElementById('E')
    if (nS<0) {
        S.innerHTML = `o número ${nS} é negativo`
    } else {
        S.innerHTML = `o número ${nS} é positivo`
    }
}
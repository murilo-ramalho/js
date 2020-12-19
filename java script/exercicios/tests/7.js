function magica() {
    var nS = Number(document.getElementById('nE').value)
    var S = document.getElementById('E')
    if (nS%2==0) {
        S.innerHTML = `o número ${nS} é par`
    } else {
        S.innerHTML = `o número ${nS} é inpar`
    }
}
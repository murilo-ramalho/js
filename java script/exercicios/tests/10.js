function magica() {
    var mb = Number(document.getElementById('mbE').value)
    var v = Number(document.getElementById('vE').value)
    var S = document.getElementById('E')
    var tS = mb/v/60
    S.innerHTML = `o tempo de download será de ${tS} segundos`
}
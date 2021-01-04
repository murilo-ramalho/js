function magica() {
    var n1 = Number(document.getElementById('n1E').value)
    var n2 = Number(document.getElementById('n2E').value)
    var S = document.getElementById('E')
    var ax = 0
    if (n1<n2) {
        ax = n2
        n2 = n1
        n1 = ax
    }
    for (var c = n1 ; c<n2 ; c++) {
        if (c=n1) {
            S.innerHTML = `${c}`
        } else {
            S.innerHTML += `${c}`
        }
    }
}
function uau() {
    document.location.reload()
}
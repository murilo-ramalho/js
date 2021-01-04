function magica() {
    let n1 = Number(document.getElementById('n1E').value)
    let n2 = Number(document.getElementById('n2E').value)
    let p = Number(document.getElementById('pE').value)
    let S = document.getElementById('E')
    if (n1.lenght == 0 || n2.lenght == 0 || p.lenght == 0) {
        window.alert('preencha corretamente')
    } else {
        S.innerHTML = ''
        if (n1<n2) {
            for (let c = n1; c<=n2; c += p) {
                S.innerHTML += `▷ ${c}`
            }
        } else {
            for (let c = n1; c>=n2; c -= p) {
                S.innerHTML += `▷ ${c}`
            }
        }
    }
}
function uau() {
    document.location.reload()
}
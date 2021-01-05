function magica() {
    let n = Number(document.getElementById('nE').value)
    let S = document.getElementById('E')
    let ax = true
    let ax2 = 0
    for (let c = 1; c<=n; c++) {
        if (n%c==0) {
            ax = true
            ax2++
        } else {
            ax = false
        }
    }
    if (ax = true && ax2 == 2) {
        S.innerHTML = `o número ${n} é primo`
    } else {
        S.innerHTML = `o número ${n} não é primo`
    }
}
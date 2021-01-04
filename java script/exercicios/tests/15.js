function magica() {
    let n = Number(document.getElementById('nE').value)
    let S = document.getElementById('E')
    if (n.lenght == 0) {
        window.alert('prencha corretamente')
    } else {
        S.innerHTML = `${n}. `
        for (let c = n;c<=1 ;c--) {
            S.innerHTML += `${c} `
        }
    }
}
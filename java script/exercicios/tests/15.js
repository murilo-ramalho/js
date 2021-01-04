function magica() {
    let n = Number(document.getElementById('nE').value)
    let S = document.getElementById('E')
    if (n.lenght == 0 || n<0) {
        window.alert('prencha corretamente')
    } else {
        S.innerHTML = `${n}! `
        let ax = n
        n--
        for (let c = n;c>=1 ; c--) {
            S.innerHTML += `${c} `
            ax *= c
        }
        S.innerHTML += `! = ${ax}`
    }
}
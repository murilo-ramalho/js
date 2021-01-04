function magica() {
    let n = Number(document.getElementById('nE').value)
    let S = document.getElementById('E')
    let p = 1
    S.innerHTML = ''
    let ax = 0
        for (let c = 1; c<=10; c+=p) {
            ax=n*c
            S.innerHTML += `<p>${n} X ${c} = ${ax}</p>`
        }
}
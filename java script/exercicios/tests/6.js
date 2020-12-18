function magica() {
    var n1S = Number(document.getElementById('v1E').value)
    var n2S = Number(document.getElementById('v2E').value)
    var n3S = Number(document.getElementById('v3E').value)
    var S = document.getElementById('E')
    if (n1S>n2S && n1S>n3S) {
        if (n2S>n3S) {
            S.innerHTML = `${n1S} ,${n2S}, ${n3S}`
        } else {
            S.innerHTML = `${n1S}, ${n3S}, ${n2S}`
        }
    } else if (n2S>n1S && n2S>n3S) {
        if (n1S>n3S) {
            S.innerHTML = `${n2S}, ${n1S}, ${n3S}`
        } else {
            S.innerHTML = `${n2S}, ${n3S}, ${n1S}`
        }
    } else {
        if (n2S>n1S) {
            S.innerHTML = `${n3S}, ${n2S}, ${n1S}`
        } else {
            S.innerHTML = `${n3S}, ${n1S}, ${n2S}`
        }
    }
}
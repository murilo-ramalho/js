function magica() {
    var v1S = document.getElementById('v1E')
    var v2S =  document.getElementById('v2E')
    var S = document.getElementById('E')
    if (v1S.Value>v2S.Value) {
        S.innerHTML = `o maior valor é ${v1S.Value}`
    } else {
        S.innerHTML = `o maior valor é ${v2S.Value}`
    }
}
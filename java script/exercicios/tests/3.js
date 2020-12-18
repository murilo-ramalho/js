function magica() {
    var v1S = window.document.getElementById('v1').value
    var v2S = window.document.getElementById('v2').value
    var S = window.document.getElementById('E')
    if (v1S>v2S) {
        S.innerHTML = `o maior valor é ${v1S}`
    } else {
        S.innerHTML = `o maior valor é `
    }
}
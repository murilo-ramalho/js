function magica() {
    var n1S = document.getElementById('n1E').value
    var n2S = document.getElementById('n2E').value
    var S = document.getElementById('E')
    var m = (n1S+n2S)/2
    S.innerHTML = `a media de ${n1S} e de ${n2S} é ${m}`
}
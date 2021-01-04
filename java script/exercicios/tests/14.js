var n = 1
var n2 = 0
var ax = 0
var S = document.getElementById('E')
S.innerHTML = ''
function magica() {
    ax = n2
    n2 += n
    n = ax
    S.innerHTML += `> ${n}`
}
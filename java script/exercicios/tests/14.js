var n = 1
var n2 = 0
var ax = 0
var S = document.getElementById('E')
function magica() {
    S.style.backgroundColor = 'peru'
    S.style.color = 'black'
    S.style.fontFamily = 'Arial'
    S.style.fontSize = '40px'
    S.style.padding = '10px'
    S.style.borderRadius = '10px'
    ax = n2
    n2 += n
    n = ax
    S.innerHTML += `> <strong>${n}</strong>`
}
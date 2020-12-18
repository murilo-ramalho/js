function magica() {
    var anoS = document.getElementById('anoE').value
    var mS = document.getElementById('mE')
    if (anoS%4==0 && anoS%100==0 && anoS%400==0) {
        mS.innerHTML = `${anoS} é um ano bissexto`
    } else {
        mS.innerHTML = `${anoS} não é um ano bissexto`
    }
}
function magica() {
    var anoS = document.getElementById('anoE')
    var mS = document.getElementById('mE')
    anoS = anoS.value.length
    if (anoS%4==0 && anoS%100==0 && anoS%400==0) {
        mS.innerHTML = `o ano digitado é um ano bissexto`
    } else {
        mS.innerHTML = `o ano digitado não é um ano bissexto`
    }
}
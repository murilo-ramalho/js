function magica() {
    var anoS = document.getElementById('anoE')
    var mS = document.getElementById('mE')
    anoV1 = (anoS.value.length)%4
    anoV2 = (anoS.value.length)%100
    anoV3 = (anoS.value.length)%400
    anot = anoV1+anoV2+anoV3
    switch (anot) {
        case 0:
            mS.innerHTML = `o ano digitado é um ano bissexto`
            break
        default:
            mS.innerHTML = `o ano digitado não é um ano bissexto`
    }
}
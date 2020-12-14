function magica() {
    var anoS = document.getElementById('anoE')
    var mS = document.getElementById('mE')
    if ((anoS.Value)%4==0 && (anoS.Value)%100==0) {
        mS.innerHTML = `o ano ${anoS.Value} é bissexto`
    }
}
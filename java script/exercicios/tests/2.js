function magica() {
    var anoS = document.getElementById('anoE')
    var mS = document.getElementById('mE')
    anoS = (anoS.Value)
    if (anoS%4==0 && anoS%100==0 && anoS%400==0) {
        mS.innerHTML = 'oi'
    }
}
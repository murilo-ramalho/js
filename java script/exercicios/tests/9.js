function magica() {
    var sh = Number(document.getElementById('shE').value)
    var ht = Number(document.getElementById('htE').value) 
    var S = document.getElementById('E')
    if (sh<0 && ht<0) {
        window.alert('preencha corretamente')
    } else {
        var sb = sh*ht
        var IR = sb*11/100
        var INSS = sb*8/100
        var sin = sb*5/100
        var des = IR+INSS+sin
        var sl = sb-des
        S.innerHTML = `<p>seu salario total é de <strong>${sl} reais</strong></p>`
        S.innerHTML += `<p><small>seu salario bruto é ${sb} reais</small></p>`
        S.innerHTML += `<p><small>os descontos de impostos são ${des} reais</small></p>`
    }

}
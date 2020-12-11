function verificar() {
    var diaS = document.getElementById('diaE')
    var vS = document.getElementById('vE')
    var mS = document.getElementById('mE')
    var data = new Date()
    var diaDaS = data.getDay()
    switch(diaS.Value) {
        case 0:
            window.alert('preencha o campo corretamente')
            break
        case 1:
            mS.innerHTML = 'o dia digitado é domingo '
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        case 2:
            mS.innerHTML = 'o dia digitado é segunda-feira'
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        case 3:
            mS.innerHTML = 'o dia digitado é terça-feira '
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        case 4: 
            mS.innerHTML = 'o dia digitado é quarta-feira '
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        case 5:
            mS.innerHTML = 'o dia digitado é quinta-feira '
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        case 6:
            mS.innerHTML = 'o dia digitado é sexta-feira '
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        case 7:
            mS.innerHTML = 'o dia digitado é sábado'
            mS.innerHTML += `mais hoje é ${diaDaS}`
            break
        default:
            window.alert('preencha o campo correntamente')
            break
    } 
}
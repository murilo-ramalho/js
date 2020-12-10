function v() {
    var data = new Date()
    var ano = data.getFullYear()
    var i = document.getElementById('nas')
    var mudar = document.getElementById('mudar')
    if (i.value.length == 0 || i.value > ano) {
        window.alert('preencha o formulario corretamente')
    } else {
        var rsex = document.getElementsByName('sex')
        var idade = ano-Number(i.value)
        if (idade >150) {
            window.alert('preencha o formulario corretamente')
        } else {
            g = ''
            if (rsex[0].checked) {
                g = 'homem'
            } else if (rsex[1].checked){
                g = 'mulher'
            }
            mudar.innerHTML = `você é ${g} com ${idade} anos`
        }
        
    }
}
function verificar() {
    var dS = document.getElementById('dE')
    var mS = document.getElementById('mE')
    switch(dS.value.length) {
        case 0:
            mS.innerHTML = `dia digitado é domingo `
            break
        case 1:
            mS.innerHTML = `o dia digitado é segunda-feira `
            break
        case 2:
            mS.innerHTML = `o dia digitado é terça-feira `
            break
        case 3:
            mS.innerHTML = `o dia digitado é quarta-feira `
            break
        case 4: 
            mS.innerHTML = `o dia digitado é quinta-feira `
            break
        case 5:
            mS.innerHTML = `o dia digitado é sexta-feira `
            break
        case 6:
            mS.innerHTML = `o dia digitado é sábado `
            break
        default:
            window.alert('preencha o campo correntamente')
    } 
}
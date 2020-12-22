function magica() {
    var t = Number(document.getElementById('tE').value)
    t = t.toFixed(t).replace(',', '.')
    var S = document.getElementById('E')
    var es1 = document.getElementsByName('temp')
    var es2 = document.getElementsByName('temp2')
    var r = 0
    //de celsius para fahrenheit
    if (es1[0].checked && es2[1].checked) {
        r = t*9/5+32
        es1 = 'Celsius'
        es2 = 'Fahrenheit'
    //de celsius para kelvin
    } else if (es1[0].checked && es2[2].checked){
        r += 273.15
        es1 = 'Celsius'
        es2 = 'Kelvin'
    //de fahrenheit para celsius
    } else if (es1[1].checked &&  es2[0].checked) {
        r =  (t-32)*5/9
        es1 = 'Fahrenheit'
        es2 = 'Celsius'
        //de fahrenheit para Kelvin
    } else if (es1[1].checked && es2[2].checked) {
        r =  ((t-32)*5/9)+273.15
        es1 = 'Fahrenheit'
        es2 = 'Kelvin'
    //de Kelvin para Celsius
    } else if (es1[2].checked && es2[0].checked) {
        r -= 273.15
        es1 = 'Kelvin'
        es2 = 'celsius'
    //de Kelvin para Fahrenheit
    } else if (es1[2].checked && es2[1].checked) {
        r = (t-273.15)*9/5+32
        es1 = 'Kelvin'
        es2 = 'Fahrenheit'
    //se for a msm escolha de temperatura
    } else {
        window.alert('escolha um temperatura diferentes')
    }
    S.innerHTML = `<strong>${t}</strong> graus <strong>${es1}</strong> são <strong>${r}</strong> graus <strong>${es2}</strong>`    
}
var m = document.getElementById('oi') 
function entro() {
    var hd = new Date()
    var h = hd.getHours()
    if (h>00 && h<12) {
        m.innerHTML = 'bom dia'
    } else if (h<18) {
        m.innerHTML = 'boa tarde'
    } else {
        m.innerHTML = 'boa noite'
    }
} 
function saiu() {
    m.innerHTML = '<h1>conversor de temperatura</h1>'
}
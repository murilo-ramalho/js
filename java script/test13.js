
var agr = new Date()
var hora = agr.getHours()
console.log(`agora são ${hora} horas`)
if (hora>0 && hora<6) {
    console.log('boa magrugada')
} else if (hora<12) {
    console.log('bom dia')
} else if (hora<=18) {
    console.log('boa tarde')
} else if (hora<24) {
    console.log('boa noite')
} else {
    console.log('hora invalida')
}
//let obj = {nome: 'murilo', sexo: 'm', peso: 65}
let obj = {nome: 'murilo', 
sexo: 'm', 
peso: 65,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
obj.engordar(2)
console.log(`o ${obj.nome} pesa ${obj.peso}`)
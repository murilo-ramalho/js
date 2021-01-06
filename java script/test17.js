let n = [1,4,3]
n[3] = 5
n.push(2)
console.log(n)
n.sort()
console.log(`esse vetor tem ${n.length} valores, os valores são ${n}`)
console.log(`o primeiro valor é ${n[0]}`)
let pos = n.indexOf(3)
if (pos == -1) {
    console.log('o valor n foi encontrado')
} else {
    console.log(`o valor 3 está na posição ${pos}`)
}
//let n = [2,4,6,8,97,5,56,8,5,4,6,24,8,0,5,4,29,9273,927,023,284]
let n = []
for (let pc = 5; pc<20; pc+=2) {
    n.push(pc*3)
}
/*for(let c=0; c<n.length; c++) {
    console.log(`a posição ${c} tem o valor ${n[c]}`)
}*/
for (let c in n) {
    console.log(`a posição ${c} tem o valor ${n[c]}`)
}
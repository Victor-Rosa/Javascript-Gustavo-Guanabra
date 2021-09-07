var num = [5,8,2,9]
num.push(1)
num.sort()
/*
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes `) 
console.log(num[0])

for(var pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
var posi = num.indexOf(68)
if(posi == -1){
    console.log('o valor nao foi encontrado ')
}else{
    console.log(num)
console.log(`o valor 5 esta na posição ${posi}`)
}

 
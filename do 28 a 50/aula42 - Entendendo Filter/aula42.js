// exemplo 01
// const filtrosMaior18 = (valor,indice,arr)=>{
/* const filtrosMaior18 = (valor)=>{
    if(valor >= 18)
    return valor
} */

// const idades=[15, 21, 30, 17, 18, 44, 12, 50]
// const maior=idades.filter(filtrosMaior18)

// console.log(idades)
// console.log(maior)


// exemplo 02
// const filtrosMaior18 = (valor,indice,arr)=>{
const filtrosMaior18 = (valor)=>{
    if(valor >= 18)
    return valor
}

const idades=[15, 21, 30, 17, 18, 44, 12, 50]
const maior=idades.filter(filtrosMaior18)

//usando o filter em uma arrowFunction
const menor = idades.filter((val,ind,arr)=>{
    if(val < 18){
        return val
    }
})



console.log(idades)
console.log(maior)
console.log(menor)
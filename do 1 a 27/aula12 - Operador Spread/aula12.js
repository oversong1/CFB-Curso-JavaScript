// const jogador1={nome:"Bruno", energia:100, vidas:3, magia:150}
// const jogador2={nome:"Emerson", energia:100, vidas:5, velocidade:80}
// const jogador3={...jogador1, ...jogador2}
// console.log(jogador3)

// let n1 = [10,20,30]
// let n2 = [11,22,33,44,55]
// let n3 = [...n1, ...n2] //espalha os itens do elementos itens a itens

// console.log("N1: " + n1)
// console.log("N2: " + n2)
// console.log("N3: " + n3)
// console.log("Tipo de N3 : " + typeof(n3))

/* const soma=(v1,v2,v3)=>{
    return v1+v2+v3
} */

// let valores = [1,5,4,10];

// console.log(soma(...valores));//espalhou os elementos
// console.log(soma(10,10,23));

// const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]
// const objs3 = document.getElementsByTagName("div")

//exemplo sem ser function da erro
/* objs1.array.forEach(element => {
    console.log(element);   
});
 */

//exemplo 2 da certo porq o operador spread transformou em uma função
objs2.forEach(element => {
    console.log(element);   
});

// console.log(objs1)
console.log(objs2)   
// console.log(objs3)
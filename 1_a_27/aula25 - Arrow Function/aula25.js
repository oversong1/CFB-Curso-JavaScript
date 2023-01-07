/* Versão normal */
// const soma =function(v1,v2){return v1 + v2};

/* Com Arrow Function */
const soma = (v1, v2)=>{
    let res = v1 + v2;
    return res;
}
console.log(soma(10, 5));

const nome =n=>n
console.log(nome("Emerson"));

const add = n=>n+10
console.log(add(10))
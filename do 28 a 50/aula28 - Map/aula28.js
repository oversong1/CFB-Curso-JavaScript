/* O método map() é invocado a partir de um array e recebe 
como parâmetro uma função de callback, que é invocada para 
cada item e retorna o valor do item equivalente no array 
resultante.*/

// exemplo01
/* const cursos=['HTML','CSS','JavaScript','PHP','React'];
let c = cursos.map((el, i) =>{
    return el
})

console.log(c) */
// console.log("Curso:" + el + " - Posição do Curso: " + i)

// exemplo02
/* const cursos2=['HTML','CSS','JavaScript','PHP','React'];
const ver = cursos2.map(function(item){
    return item;
});
console.log(ver); */

// exemplo03
/* let el=document.getElementsByTagName("div");
el = [...el];
el.map((e,i)=>{
    console.log("Emerson antes");
    e.innerHTML = "Curso de JavaScript";
    console.log(e);
    console.log(e.innerHTML);
    console.log("Emerson depois");
}) */

// exemplo04
/* const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML)
console.log(val); */

//EXEMPLO05
const converterInt=(e)=>parseInt(e)
let num=['1','2','3','4','5']
let num2=1;
console.log(typeof(num2))
num.map(converterInt)
console.log(typeof(num))
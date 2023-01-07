//Usando parametros REST
/* function soma(...valores){
  let tam = valores.length;
  let res = 0;
  for(let i = 0; i < tam; i++){
    res += valores[i];
  }
  return "Valores para serem somando " + valores + " || " +
  "Valores somado " + res + "\n";
}

console.log(soma(10, 4, 5, 5, 2))
 */

// Exemplo 2
function soma2(...valores){
  let res = 0;
  for(let v of valores){
    res += v;
  }
  return "Valores para serem somando " + valores + " || " +
  "Valores somado " + res + "\n";
}

console.log(soma2(10, 4, 5, 5, 2))
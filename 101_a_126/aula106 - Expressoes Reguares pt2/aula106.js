let nome = new String("Bruno Pinho Campos")
let email = "bruno@bruno.com.br"
let numeros = "1, 10, 100, 100"

// console.log(nome)

// console.log(nome.search(/pinho/i))

// console.log(nome.match(/O/ig))

// console.log(nome.replace(/o/ig,"Teste"))

console.log(nome.search(/[a-g|h-z|0-9]/ig))

//Metacaracteres
console.log(nome.search(/\d/ig)) //Numeros
console.log(nome.search(/\s/ig)) //Espaços
console.log(nome.search(/\bP/ig)) //DWORD

//Quantificadores
console.log(numeros)
console.log(nome.match(/o+|s+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))
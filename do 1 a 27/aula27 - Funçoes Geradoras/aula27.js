//para transformar em Geradores basta adicionar
//um ' * ' na function

/* function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value); */
// console.log(itc.next().value); não tem mais nada 

/* function* perguntas(){
    const nome=yield'Qual seu nome?'
    const esporte=yield'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ", seu esporte favorito é "
    +  esporte;
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Emerson').value)
console.log(itp.next('Corrida').value)
 */

function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itc = contador()
for(let i = 0; i<10; i++){
    console.log(itc.next().value)
    console.log(itc.next().value)
    console.log(itc.next().value)
}


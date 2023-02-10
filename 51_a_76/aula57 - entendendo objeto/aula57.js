// exemplo 01 sem parametro no construtor

/*  se o construtor estiver vazio 
    nao precisamos passar nehuma 
    parametro quando ele for instanciado ou chamado
*/
/* class Pessoa{   
    constructor(){
        this.nome ="Emerson"
    }
}
*/

// let p1 = new Pessoa()
// console.log(p1)

//pegar diretamente o objeto
// console.log(p1.nome) 



// exemplo 02 construtor com parametro
/*  Agora se o parametro tiver um parametro
    ai significa que teremos que passar 
    algo para que ele seja usado
*/
class Pessoa{   
    // parametro no construtor
    constructor(pnome){
        // chamando o parametro dentro de uma variavel
        this.nome =pnome
    }
}

/** perceba que agora colocamos uma string 
 * dentro do new Pessoa("exemplo"), isso 
 * é igual colocar um nome no parametro
 * que criamos la em cima o "pnome"
*/

//criando o parametro na chamada da class
let p1 = new Pessoa("Emerson")
let p2 = new Pessoa("Claudia")
let p3 = new Pessoa("Roberta")

console.log(p1)
console.log(p2)
console.log(p3)

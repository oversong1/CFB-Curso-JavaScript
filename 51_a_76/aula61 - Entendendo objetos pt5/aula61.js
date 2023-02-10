//exemplo 01
/* const Pessoa={
    nome: "Emerson",
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome = nome
    },
}

const p2 = Pessoa
const p3 = Pessoa

//Formas de passa o parametro
p3.nome="Cladisvardson"
// p2["nome"] = "Bridger"
// Pessoa.setNome("Patrick")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome) */


const Pessoa={
    nome : '', 
    idade: '',
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome = nome
    },
    setNome:function(idade){
        this.idade = idade
    },
}

const p2 = Pessoa
const p3 = Pessoa

//Formas de passa o parametro
p3.nome="Cladisvardson"
p2["nome"] = "Bridger"
Pessoa.setNome("Patrick")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)
class Carro{ // Classe PAI
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ //classe filho
    constructor(nome, portas,blindagem,municao){
        // o super é usado quando eu quero invocar algo da classe pai
        super(nome,portas)
        this.blindagem  = blindagem
        this.municao = municao
        this.setCor("Verde Musgo")//cor dentro do construtor
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

// Sem usar as funções ligar e cor
/* const c1 = new Carro("Normal", 4)
console.log(c1)
console.log(`Nome : ${c1.nome}`)
console.log(`Portas : ${c1.portas}`)
console.log(`Ligado : ${c1.ligado?"Sim":"Não"}`)
console.log(`Velocidade : ${c1.vel}`)
console.log(`Cor : ${c1.cor}`) */

// Usando usar as funções ligar e cor
/* const c2 = new Carro("Militar", 2)
c2.ligar()
c2.setCor("Cinza")
console.log(c2)
console.log(`Nome : ${c2.nome}`)
console.log(`Portas : ${c2.portas}`)
console.log(`Ligado : ${c2.ligado?"Sim":"Não"}`)
console.log(`Velocidade : ${c2.vel}`)
console.log(`Cor : ${c2.cor}`) */


// Usando usar as funções ligar e cor
/**
 * Nesse exemplos vamos trazer 4 parametros do construtor
 * sendo o nome e portas que ja tem na classe pai
 * e mais dois parametros que foi criada na classe filho
 * que seria blindagem e municao
 * e eles são obrigatorios pois é do construtor
 * e no se é tido no construtor é obrigatorio
 */
const c3 = new Militar("Hammer Tech", 4, 4, 4)
c3.ligar()
// c3.setCor("Verde Musgo")//cor fora do construtor
console.log(c3)
console.log(`Nome : ${c3.nome}`)
console.log(`Portas : ${c3.portas}`)
console.log(`Ligado : ${c3.ligado?"Sim":"Não"}`)
console.log(`Velocidade : ${c3.vel}`)
console.log(`Cor : ${c3.cor}`)
console.log(`Blindagem : ${c3.blindagem}`)
console.log(`Munição : ${c3.municao}`)

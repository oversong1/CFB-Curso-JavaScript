class Carro{   
    canal = "Curso Javascript"
    constructor(pnome, ptipo){
        this.nome =pnome
        this.canal = "Youtube"
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = "Utilitario"
            this.velmax = 100
        }else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }else{
            this.tipo = "Militar"
            this.velmax = 260
        }
    }
    //OBS O parametro GET pega a informação
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    //OBS O parametro SET seta a informação ou envia a informação
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(velmax){
        this.velmax = velmax
    }

    info(){
        //Exemplo 01
        // console.log("Nome: " + this.nome)
        // console.log("Tipo: " + this.tipo)
        // console.log("V.max: " + this.velmax)
        // console.log("----------------")

        //Exemplo 02
        console.log(`Nome:  ${this.nome}`)
        console.log(`Nome:  ${this.tipo}`)
        console.log(`Nome:  ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log("----------------")
    }
}

let c1 = new Carro("Ferrari", 1)
let c2 = new Carro("Fusca", 2)
let c3 = new Carro("Golf", 3)
let c4 = new Carro("Hammer")

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)


console.log(c1.nome)
console.log(c1.tipo)
console.log(c1.velmax)

c1.info()
c2.info()

console.log(c1.getNome())
console.log(c2.getTipo())
console.log(c3.getVelMax())
console.log(c3.getInfo())

c1.setNome("Super Veloz")
c1.setVelMax(500)
c1.setNome("Super Veloz")
console.log(c1)

/**
 * OBSERVAÇÃO lembrando que esse THIS, esta sendo criado
 * na hora e ele signifca que esta pegando de uma variavel de fora do escopo, OU SEJA É COMO SE ESTIVESSE DIZENDO QUE A VARIAVEL QUE ESTA SENDO USADA ESTA FOOOOORA DO CONSTRUTOR.
 * E para ela ser visivel temos que usar THIS, no entando nesse caso nao existe uma variavel fora do construtor, ele esta instanciando ou CRIANDO ela na hora mesmo.
 */
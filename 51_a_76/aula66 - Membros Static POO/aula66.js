class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
        this.alerta = false
    }
    //Meu Teste com um parametro no info
    // info=function(alerta){
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${this.alerta?"Sim":"Não"}`)
        // console.log(`Alerta: ${this.alerta}`)
        // console.log(`Alerta: ${this.alerta = alerta}`)
        console.log("----------------------")
    }
    static alerta = function(){
        Npc.alerta = true
    }
}

//Passamos um objeto no npc para a energia
const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Npc.alerta = true //Global
// npc1.alerta = true ///unico
Npc.alerta()

//Passamos aqui um parametro para
// npc1.info(true)
npc1.info()
npc2.info()
npc3.info()
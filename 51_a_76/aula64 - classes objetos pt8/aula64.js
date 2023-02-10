const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros=document.querySelector(".carros")
const btn_addCarro=document.querySelector("#btn_addCarro")

let a_carros=[]

const removerCarro=(quem)=>{
    a_carros=a_carros.filter((el)=>{
        return el.nome!=quem
    })
}

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
    // carro.innerHTML="Esperando.... Você passar as informações"
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
    // carro.innerHTML = "Emerson"
})


const gerenciarExibicaoCarros=()=>{
    carros.innerHTML =""
    a_carros.forEach((c)=>{
        const div=document.createElement("div")
        const btn=document.createElement("button")
        btn.innerHTML = "Remover"
        btn.addEventListener("click",(evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            console.log(evt.target.parentNode.dataset.nome)
            gerenciarExibicaoCarros()
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML=`Nome: ${c.nome}</br>`
        div.innerHTML+=`Portas: ${c.portas}</br>`
        div.innerHTML+=`Cor: ${c.cor}</br>`
        div.innerHTML+=`Blindagem: ${c.blindagem}</br>`
        div.innerHTML+=`Munição: ${c.municao}</br>`
        div.appendChild(btn)
        carros.appendChild(div)
    })

}

btn_addCarro.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value,f_portas.value, f_blindagem.value,f_municao.value)
        a_carros.push(c)
    }else{
        const c = new Carro(f_nome.value, f_portas.value,f_blindagem.value,f_municao.value)
        console.log(c)
        a_carros.push(c.f_blindagem)
    }
    gerenciarExibicaoCarros()
    console.log(gerenciarExibicaoCarros())
})

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
/* const c3 = new Militar("Hammer Tech", 4, 4, 4)
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
 */
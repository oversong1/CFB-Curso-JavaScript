const palco = document.getElementById("palco")
const num_objatos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")


let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola{
    construtor(){
        this.tam=Math.floor(Math.random()*15)+10
        this.r=Math.floor(Math.random()*255)
        this.g=Math.floor(Math.random()*255)
        this.b=Math.floor(Math.random()*255)
        this.px=Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py=Math.floor(Math.random()*(alturaPalco-this.tam))
    }
}

window.addEventListener("resize",(evt)=>{
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
})

btn_add.addEventListener("click",(evt)=>{
    const qtde = txt_qtde.value
    for(let i = 0; i < qtde; i++){
        //Instanciar novas bolinhas
    }
})

btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        //Remover a bolinha
    })
})
const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1,2,3,4,5]
let ant = []
let atualmente = []
let posterior = []
let dobro = []

p_array.innerHTML = "["+elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos)=>{
        ant.push(anterior)
        atualmente.push(atual)
        posterior.push(pos)
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+="<br> V.anterior: "+ant
    resultado.innerHTML+="<br> V.atual: "+atualmente
    resultado.innerHTML+="<br> V.pos: "+posterior
    resultado.innerHTML+="<br> V.Dobro: "+dobro
})
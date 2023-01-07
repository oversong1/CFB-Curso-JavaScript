const caixa = document.querySelector("#caixa")

const carros = ["Polo","Golf","T-Cross","HRV"]
// const curso = "JavaScript"
// const canal = "Curso JavaScript"
// const frase = "Este é o <br/> curso de" + curso + " do canal " + canal
// const frase = `Este é o <br/> curso de ${curso} do canal ${canal}`

// console.log(frase)
// caixa.innerHTML = frase

let ul = `<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li`
})

ul+`</ul>`

caixa.innerHTML = ul
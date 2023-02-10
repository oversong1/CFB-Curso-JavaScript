const caixa = document.querySelector("#caixa")

// let cursos=["HTML","CSS","Javacript"]
let cores = ["azul", "verde", "vermelho", ["claro","escuro","médio"]]

let cursos = ["HTML", "CSS", "Javascript",cores]


// cursos[0] = 2023

// cursos.push("C++") //Adicionado no final
// cursos.push("Python") //Adicionado no final
// cursos.unshift("Python") //Adicionado no inicio
// cursos.shift() //REmove do começo
// cursos.pop() //Romeve no final

console.log(cursos[3][3][2])

console.log(cursos)
// console.log(cursos[0])

cursos.map((evt)=>{
    let p = document.createElement("p")
    p.innerHTML = evt
    caixa.appendChild(p)
})
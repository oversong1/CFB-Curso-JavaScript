const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_transferir= document.querySelector("#btn_transferir")
const todosCuros = [...document.querySelectorAll(".curso")]

todosCuros.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click", ()=>{
    const cursosSelescionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelescionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelescionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelescionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
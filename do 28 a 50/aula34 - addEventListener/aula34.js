//Usando função direto no html
/* function msg(){
    alert("Clicou")
} */


const msg = ()=>{
    alert("Clicou")
}

//Formas de chamar 
// const c1 = document.getElementById("c1")
// const c1 = document.querySelector("#c1")
// const curso = document.querySelector(".c1")

//para usar temos que espalhar com espred
const cursos = [...document.querySelectorAll(".curso")]

//dispara um avento 
/* c1.addEventListener("click",()=>{
    msg();
}) */

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("destaque")
    })
})

//pega quem disparou o evento
//adicionar classList
/* c1.addEventListener("click",(evt)=>{
    const el =  evt.target
    el.classList.add("destaque")
   
})
 */
 
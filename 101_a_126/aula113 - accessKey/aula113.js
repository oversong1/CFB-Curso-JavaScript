const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const posx=document.getElementById("posx")
const posy=document.getElementById("posy")
const largura=document.getElementById("largura")
const altura=document.getElementById("altura")

q1.accessKey="b"
q2.accessKey="n"

console.log("q1: " + q1.accessKey)
console.log("q2: " + q2.accessKey)

let DOMReact_q1 = q1.getBoundingClientRect()

const info=(el)=>{
    let DOMReact_q = el.getBoundingClientRect()
    posx.innerHTML=`posx:${DOMReact_q.x}`
    posy.innerHTML=`posx:${DOMReact_q.y}`
    largura.innerHTML=`largura:${DOMReact_q.width}`
    altura.innerHTML=`altura:${DOMReact_q.height}`
}

q1.addEventListener("click",(evt)=>{
    info(evt.target)
})

q2.addEventListener("click",(evt)=>{
    info(evt.target)
})

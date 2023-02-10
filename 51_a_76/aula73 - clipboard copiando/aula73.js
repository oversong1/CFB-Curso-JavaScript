const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const ton=document.getElementById("ton")
const tcpy=document.getElementById("tcpy")
const teste=document.getElementById("teste")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")

let sinal = false
let decimal = false

teclasNum.forEach((el) =>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) =>{
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML =""
            }
            if(evt.target.innerHTML =="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML= "0"
}) 

tigual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
}) 

tcpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})

tcpy.addEventListener("click",(evt)=>{
    /*usamos com esse metodo select para dispositivos mobiles*/
    teste.select()// para mobile
    teste.setSelectionRange(0,9999) // para mobile
    navigator.clipboard.writeText(teste.value)
})
const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array =[21,25,19,20,16,18,22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret = elementos_array.some((e,i)=>{
        if(e <18){
            resultado.innerHTML = "Array não conforme na posição " +i
        }
        return e >= 1
    })

    if(ret){
        resultado.innerHTML = "OK"
    }
    
})
const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evtg)=>{
    alert("Ola, como você esta!")
})

btn_confirm.addEventListener("click",(evtg)=>{
    const ret = confirm("Você aprendendo muito?")
    if(confirm("Você está aprendendo muito?")){
        console.log("Botão está OK pressionado")
    }else{
        console.log("Botão ok Pressionado")
    }
})

btn_prompt.addEventListener("click",(evtg)=>{
    const nome = prompt("Digite eu nome")
    if(nome == null){
        console.log("Botão Cancelar pressionado","Digite seu nome")
    }else{
        console.log("Nome digitado: ", nome)
    }
})
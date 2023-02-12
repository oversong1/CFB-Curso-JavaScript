const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg = null
    if(f_nota.validity.valueMissing){
        msg="Poxa, este campo é obrigatorio"
    }else if(f_nota.validity.rangeOverflow){
        msg = "Nossa, que nota alta você digitou"
    }else if(f_nota.validity.rangeOverflow){
        msg = "Credo, que nota alta você digitou"
    }

/*     if(!f_nota.checkValidity){
        msg=f_nota.validationMessage
    } */

    f_msg.innerHTML=msg
    evt.preventDefault()
})


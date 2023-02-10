const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("promessa") 

// Exemplo 01 chamado direto
/* btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML = "Processando"
    let promise = new Promise((resolve,reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                //True ou certo
                resolve("Deu Tudo Certo")
            }else{
                //False ou errado
                reject("Deu Tudo errado")
            }
        }, tempo)
    })

    promise.then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    promise.catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
}) */

/* btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML = "Processando"
    promessa()
})
 */
/* 
Exemplo02 criando uma função forae chamando ela quando precisar
no entando com o then dentro da função ou seja 
com eles dentro 
*/
/* const promessa=()=>{
    let promise = new Promise((resolve,reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                //True ou certo
                resolve("Deu Tudo Certo")
            }else{
                //False ou errado
                reject("Deu Tudo errado")
            }
        }, tempo)
    })

    promise.then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    promise.catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
} */


/* 
Exemplo03 com the e o catch sendo chamado fora da função
*/

btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML = "Processando"
    console.log(promessa())
    /* promessa()
        .then((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        })
        .catch((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        }) */
})

const promessa=()=>{
    let p = new Promise((resolve,reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                //True ou certo
                resolve("Deu Tudo Certo")
                numero.innerHTML="Deu Tudo Certo"
                numero.classList.remove("erro")
                numero.classList.add("ok")
            }else{
                //False ou errado
                reject("Deu Tudo errado")
                numero.innerHTML="Deu Tudo errado"
                numero.classList.add("erro")
                numero.classList.remove("ok")
            }
        }, tempo)
    })
    return p
}

numero.innerHTML="Esperando..."
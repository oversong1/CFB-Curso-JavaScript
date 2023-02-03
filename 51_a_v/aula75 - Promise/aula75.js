const numero = document.getElementById("numero")

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

/* if(resultado){
    numero.innerHTML="Deu tudo Certo"
    numero.classList.remove("erro")
    numero.classList.add("ok")
}else{
    numero.innerHTML="Deu tudo errado"
    numero.classList.add("erro")
    numero.classList.remove("ok")
} */

numero.innerHTML="Processando..."
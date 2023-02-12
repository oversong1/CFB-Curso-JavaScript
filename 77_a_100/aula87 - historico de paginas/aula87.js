const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    // window.location="https://www.google.com.br"

    //Deleta a url correta do histortico
    //ou seja vc vai não tem a opção na seta de voltar
    // window.location.replace("https://www.google.com.br")
    
    //não deleta a url corrente mantem o historico
    // window.location.assign("https://www.google.com.br")

    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)
    // console.log(window.history.length)
    console.log(url.value)
    // window.location=url.value
})
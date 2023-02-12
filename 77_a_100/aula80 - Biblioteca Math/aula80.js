const mat = document.getElementById("mat")

// mat.innerHTML = Math.random()*10

/*
a função do flor serve para retorna a 
parte inteira do numero
 */
// mat.innerHTML = Math.floor(Math.random()*10)

// const num = Math.random()*10
// mat.innerHTML = Math.floor(num)

/**
 * Gerando numero randomico de 1 a 9
 * a multiplicação serve para multiplicar a expressao
 * e ai entender que é o valor 10
 */
setInterval(()=>{
    const num = Math.random()*10
    // mat.innerHTML = Math.floor(num)

    //usando o Round vai do zero a 10
    mat.innerHTML = Math.round(num)
    
    //usando o sqtr faz a raiz quadrada
    mat.innerHTML = Math.sqrt(num)
    
    //usando o pow  potenciação 
    mat.innerHTML = Math.sqrt(num)
},1000)



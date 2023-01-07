const caixa = document.querySelector("#caixa")

let mapa = new Map()

//A coleção MAP, trabalha com os parametros chave e valor
/**
 * Podemos ter valores iguais o que não podemos ter 
 * é chave igual, sempre lembrando que o padrão é 
 * chave e depois o valor e sendo que no map 
 * a chave pode ser string ou numerica assim como o valor 
 * igual esta no exemplo abaixo
*/

//bonus
const nome = "Emerson"

mapa.set("curso","JavaScript")
mapa.set(10,"CursoJava")
mapa.set(1,100)
mapa.set("Canal",100)
mapa.set("valor", nome)

// mapa.delete(0)

console.log(mapa)

// caixa.innerHtML = mapa // Errado nao acessa

//Com o parametro Get pegamos algo
// caixa.innerHTML = mapa.get("curso")
// caixa.innerHTML = mapa.get(10)
// caixa.innerHTML = mapa.get("valor")

let pes = "teste"
let res = ""

if(mapa.has(pes)){
    res="A chave existe na coleção com o valor: " + mapa.get(pes)
}else{
    res = "A chave Não está na coleção"
}

res+="</br> O tamanho da coleção e " + mapa.size
caixa.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})
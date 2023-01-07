const caixa = document.querySelector("#caixa")

let musicas = new Set(["musica01", "musica02", "musica03"])

musicas.add("musica muito legal")
musicas.add("musica Pop")
musicas.add("musica MPB")
musicas.add("musica ROCK")

musicas.delete("musica01")
// musicas.clear()

console.log(musicas)
/* 
musicas.forEach((el)=>{
    caixa.innerHTML += el+"</br>"
})
 */
for(let m of musicas){
    caixa.innerHTML += m+"</br>"
}
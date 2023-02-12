const endpoint = "https://cfbcursos.repl.co/"
// let res=fetch(endpoint)
// console.log(res)
// .then(res=>console.log(res))
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})
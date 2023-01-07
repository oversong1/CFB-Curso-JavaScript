//sem parametro
function nome(){
   console.log("Ola"); 
}

//com parametro
/* function nome2($nome){
   console.log("Ola " + $nome); 
}
 */
// nome();

/* esse nome Emerson é um 
parametro, ou seja ele é passado
quando chamamos a função nome2
e dentro da " ($nome) " espera algo ser passado
entao o nome Emerson é colocado no lugar 
da $nome e que depois é impresso no console.log */
// nome2("Emerson");

/* for(let i = 0; i <= 10; i++){
    nome();
} */

function mudarTexto(){
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");

    d1.innerHTML="Curso JavaSCript";
    d2.innerHTML="Curso PHP";
    d3.innerHTML="Curso Java";
}


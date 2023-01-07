const caixa1=document.querySelector("#caixa1");
const btn_c=[...document.querySelectorAll(".curso")];
const c1_2=document.querySelector("#c1_2");
const cursos=["HTML", "CSS", "Javascript","PHP", "React", "MySQL", "ReactNative"];

cursos.map((el,chave)=>{
    const novoElemento = document.createElement("div")
    //setando um id unico para todos 
    novoElemento.setAttribute("id", "c")
    // novoElemento.setAttribute("id", "c"+chave+1)
    
    //com a chave cada div tem um id unico
    novoElemento.setAttribute("id", "c"+chave)
    
    //setando uma class unica para todos 
    novoElemento.setAttribute("class", "curso c1")

    //com a chave cada class tem uma class unica
    novoElemento.setAttribute("class", "curso c1"+chave)
    
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})

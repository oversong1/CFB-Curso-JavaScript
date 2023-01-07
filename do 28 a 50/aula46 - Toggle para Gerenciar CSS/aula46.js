const caixaCursos=document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript","PHP","React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const nomeCurso = document.getElementById("nomeCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")

let indice = 0;
const tirarSelecao=()=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso) =>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    /* const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos) */
    return novoElemento;
}

cursos.map((el, chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++;
})

const cursoSelecionado=()=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    
    return cursoSelecionados[0]
}
//modelo antigo
/* const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })

    return radioSelecionado[0]
}
 */
btnCursoSelecionado.addEventListener("click", (evt)=>{

    //exemplo com if
    /* if(rsSelecionado != undefined){
        const cursoSelecionado = rsSelecionado.parentNode.previousSibling.textContent
        alert("Curso Selecionado " + cursoSelecionado)
    }else{
        alert("Selecione um Curso")

    } */

    //Exemplo com try catch
    try{
        alert("Curso Selecionado " + cursoSelecionado().innerHTML)
    }catch(exception){
        alert("Selecione um Curso")

    }
    
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    const cs = cursoSelecionado()
    
    //remove somente o texto do Radio com o previousSibling
    // const cursoSelecionado = rsSelecionado.parentNode.previousSibling.textContent
    
    //ja com o parentNode.parentNode, remove a div toda
    if(cs != undefined){
        // const cursoSelecionado = rsSelecionado.parentNode.parentNode
        cs.remove();
        // console.log(cursoSelecionado)
    }else{
        alert("Selecione um Curso")

    }
    
   
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    // const rsSelecionado = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            // const cursoSelecionado = rsSelecionado.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
            // console.log(cursoSelecionado)
        }else{
            alert("Digite o nome do Curso")

        }
    }catch(ex){
        alert("Selecione um Curso")

    }
    
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    // const rsSelecionado = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            // const cursoSelecionado = rsSelecionado.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
            // console.log(cursoSelecionado)
        }else{
            alert("Digite o nome do Curso")
        }
    }catch(ex){
        alert("Selecione um Curso")

    }
})

//parentnNode
//childNodes[nodenumber]
//firstChild
//lastChild
//nextSibling
//previousSibling
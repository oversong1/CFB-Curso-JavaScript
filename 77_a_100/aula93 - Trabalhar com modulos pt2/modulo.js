const cursos = ["Javacript", "HTML","CSS","Arduino","Raspberry","C++","Python","Java","C#"];

//Modo 01
/* const getTodosCursos = ()=>{
    return cursos
}
 */

//Modo 02
/* function getTodosCursos(){
    return cursos
}

export{cursos}
export default getTodosCursos */

//Modo 03
export default function getTodosCursos(){
    return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export{cursos, getCurso}
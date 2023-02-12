class Cursos{
    static cursos = ["javascript", "HTML","CSS","Arduino", "Raspberry","C++","Python","Java","C#"]

    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getcurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos
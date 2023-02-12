// o getTodosCursos fica fora das chaves porq ele é o padrao
import getTodosCursos,{cursos, getCurso} from './modulo.js'

console.log('Servidor Rodando')

console.log(cursos)
console.log(getTodosCursos())
console.log(getCurso(1))
// o getTodosCursos fica fora das chaves porq ele é o padrao
// import getTodosCursos,{cursos as c, getCurso as gc} from './modulo.js'
import * as m_cursos from './modulo.js'

console.log('Servidor Rodando')

console.log(m_cursos.cursos)
// console.log(m_cursos.getTodosCursos(1))
console.log(m_cursos.getCurso(1))
console.log(m_cursos.default())
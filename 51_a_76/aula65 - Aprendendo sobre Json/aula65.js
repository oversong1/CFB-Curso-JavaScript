const pessoa={
    nome:"Emerson",
    canal:"Curso",
    curso:"JavaScript",
    aulas:{
        aula01:"Indrodução",
        aula02:"Variaveis",
        aula03:"Condicionais",
    }
}

const string_pessoa = '{"nome":"Emerson","canal":"Curso","curso":"JavaScript","aulas":{"aula01":"Indrodução","aula02":"Variaveis","aula03":"Condicionais"}}'

const s_json_pessoa = JSON.stringify(pessoa) // O stringify Converte objeto em string JSON

//com o parse convertemos para string do objeto
const o_json_pessoa = JSON.parse(s_json_pessoa)//O Parse Converte o String JSON em objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)
function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;

    //exemplo 01
   /*  this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(nome);
            console.log(nota);
        }, 2000)
    } */
    this.dados_anonimo = ()=>{
        setTimeout(()=>{
            console.log(nome);
            console.log(nota);
        }, 2000)
    }

 
}

const al1= new aluno("Emerson", 100)
al1.dados_anonimo();
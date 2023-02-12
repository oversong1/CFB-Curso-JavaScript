let numeros = [10,20,30,40,50,60,70,80,90]
// let[a,b,c,d]=numeros
let[a,b,c,...d]=numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)


let obj={
    nome:"Emerson",
    canal:"Curso",
    curso:"Javascript",
}
let{nome,canal} = obj
console.log(nome)
console.log(canal)

const cores=()=>{
    return["verde","amarelo","azul","branco"]
}
let[c1,c2,c3]=cores()
// let[c1,c2,...c3]=cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto="Curso de Javacript"
console.log(texto.split(" "))

let texto1="Curso-de-Javacript"
console.log(texto1.split("-"))

let [t] = texto.split(" ")
console.log(t)//vem uma palavra
console.log(...t)//vem todas palavras


/**
 * OBS : LEMBRANDO DA EXPERESSÃO SPLIT
 * QUE SERVE SEPARAR EM ARRAY AS INFORMAÇÕES
 * QUANDO ENCONTRAR ALGO QUE DETERMINAMOS 
 * 
 * EX "texto de exemplo"
 * perceba que no texto acima temos 3 palavras
 * e que essas palavras tem o espço entre elas e se fosse uma informação unica que quisermos pegar e separar
 * NESSE CASO USARIAMOS A FUNÇÃO SPLIT 
 * DESSA FOMA texto.split(" ")
 * perceba que estamos dizendo assim, olha 
 * função split quando vc achar um espaçõ vazio corte 
 * e faça oq veio antes do espaço um array
 * agora podemos fazer isso tbm se fosse um traço uma virgula e afins 
 */
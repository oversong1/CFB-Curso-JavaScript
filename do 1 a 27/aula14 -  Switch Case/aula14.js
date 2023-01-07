// let colocacao = 1;
let colocacao = parseInt(prompt("Digite o Valor"));

switch(colocacao){
    case 1:
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;
    default:
        console.log("Não subiu ao podio");
        break;
}
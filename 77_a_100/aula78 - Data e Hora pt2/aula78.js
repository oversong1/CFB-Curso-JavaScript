const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")

/* setInterval(() => {
    const data = new Date()
    divdata.innerHTML = data
}, 1000);
 */

const data = new Date()
// console.log(Date.now()) //TimeStamp

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia // ternario
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes
const data_r = dia +"/"+mes+"/"+data.getFullYear()
div_data.innerHTML = data_r

const relogio=()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?"0"+hora:hora //ternario
    let minuto = data.getMinutes()
    minuto = minuto<10?"0"+minuto:minuto //ternario
    let segundos = data.getSeconds()
    segundos = segundos<10?"0"+segundos:segundos //ternario
    
    const hora_completa = hora+":"+minuto+":"+segundos
    div_relogio.innerHTML = hora_completa
}

/*o setInterval precisa de um callback, ou seja alguem para mostrar ele 
e de quanto em quanto tempo vai mostrar em milisegundos
que nesse caso vamos deixar com 1 segundos "1000" */
const intervalo = setInterval(relogio,1000)

//forma 02
/* setInterval(()=>{
    relogio()

},1000)
 */


// getDate() = Dia do mes
// getDay() = Dia da semana (numero)
// getFullYear() = Ano com 4 Digitos
// getHours() = Horas
// getMilliseconds = MiliSegundos
// getMinutes = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = TimeStamp (Milisegundos desde 1 de janeiro 1970)
// Date.now() = TimeStamp (Milisegundos desde 1 de janeiro 1970)
// getTimezoneOffset() = Timezone da locaidade
// setDate() = Define um dia do mes para a data
// setMonth() = Define um mes para a data
// setFullYear() = Define um ano para data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data

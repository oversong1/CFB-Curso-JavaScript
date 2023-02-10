const div_data = document.getElementById("div_data")

/* setInterval(() => {
    const data = new Date()
    divdata.innerHTML = data
}, 1000);
 */

const data = new Date()
// console.log(Date.now()) //TimeStamp

let dia = data.getDate()
// ternario
dia = dia < 10 ? "0" + dia : dia 

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const data_r = dia +"/"+mes+"/"+data.getFullYear()

div_data.innerHTML = data_r

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

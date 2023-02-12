const objetos = document.getElementById("objetos")

const computador={
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}

computador["monitor"] = "22pol"
computador.placaVideo = "rtx"
delete(computador.hd)
// console.log(computador)
// console.log(computador.cpu)
// console.log(computador["monitor"])

//O assign clono as informações
const c1 = Object.assign({}, computador)
console.log(computador)
c1.info()

const c2 = Object.create(computador)
c2.cpu="i9"
c2.ram="32gb"
c2.hd="1tb"
c2.info()

const o1={obj1:'1'}
const o2={obj1:'2'}
const o3={obj1:'3'}
const o4=Object.assign(o1,o2,o3)
console.log(o4)


const computadores=[
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    },
    {
        cpu:"i7",
        ram:"32gb",
        hd:"2tb"
    },
    {
        cpu:"i5",
        ram:"16gb",
        hd:"2tb"
    },
]

computadores.forEach((c) => {
    const div = document.createElement("div")
    div.innerHTML = c.cpu+"</br>"+c.ram+"</br>"+c.hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
});
// console.log(computador)
// console.log(computadores)
// objetos.innerHTML=JSON.stringify(computador)
// objetos.innerHTML=JSON.stringify(computadores)
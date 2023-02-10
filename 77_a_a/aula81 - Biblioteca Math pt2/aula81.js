const olhos = [...document.getElementsByClassName("olho")]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener("mousemove",(evt)=>{
    posx_mouse=evt.clientX
    posy_mouse=evt.clientY
    const rot = Math.atan2(posy_mouse, posx_mouse) * 360/Math.PI
    olhos.forEach((o)=>{
        o.style.transform="rotate("+rot+"deg)"
    })
    // console.log(posx_mouse)
})

// olhos[0].style.transform="rotate("+90+"deg)"
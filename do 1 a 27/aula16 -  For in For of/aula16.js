const objs = document.getElementsByTagName("div");

let num = [10,20,30,40,50];

for(o of objs){
    console.log(o);
}

for(o in objs){
    console.log(o);
}

/* for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}
 */
/** Pega a posição  */
/* for(n in num){
    console.log(num[n]);
} */

/** Pega os elementos  */
/* for(n of num){
    console.log(num[n]);
} */

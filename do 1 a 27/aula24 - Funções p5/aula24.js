const f = function(v1, v2){
  return v1 + v2;
}

console.log(f(10,5));

const g = function(...valores){
  let res=0;
  for(v of valores){
    res+=v;
  }
  return res;
}

console.log(f(10,7));

//Função anonima Construtor 
const h = new Function("v1", "v2", "v3", "return v1+v2+v3")

console.log(h(10,5,15));  
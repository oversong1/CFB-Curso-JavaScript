const soma=(...valores)=>{
    const somar = val=>{
        let res = 0
        for(v of val)
            res+=v;
            return res
        }
        return somar(valores);
}

console.log(soma(3,5));
valores=[1,5,17];
console.log(soma(...valores));
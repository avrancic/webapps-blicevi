function jedanKljuc(arr){
    jedanArr = [];
    arr.forEach(element => {
        if(Object.keys(element).length == 1){
            jedanArr.push(element);
        }
    })
    return jedanArr;
}
console.log(jedanKljuc([{a:1},{a:1,b:2},{c:8,f:4},{b:2}]));
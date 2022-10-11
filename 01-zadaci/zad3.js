function sortiraj(str){
    var brojevi = [];
    var stringovi = [];
    

    str.forEach(e => {
        if(!Number.isNaN(parseInt(e))){
            brojevi.push(e);
        }else{
            stringovi.push(e);
        }
    });
    brojevi.sort(function(a,b){return a - b});
    stringovi.sort(function(a,b){return a.length - b.length});

    return brojevi.concat(stringovi);
}

console.log(sortiraj([1,"Zgrada",8,2,"Pas",56,"Auto",4,3,]));
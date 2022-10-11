function drugaPolovica(str){
    return str.slice(Math.floor(str.length*0.5)-1, str.length);
}

console.log(drugaPolovica("Javascript i nije toliko loš"));
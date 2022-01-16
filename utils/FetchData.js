let XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest;
//Creamos una función que nos permitirá hacer el request
//a la API de Rick & Morty, lo que desencadena un callback
//Esto nos permite ejecutar los llamados necesarios

const fetchData = (url_api)=>{
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        //El tercer valor activa el asincronismo 
        xhttp.onreadystatechange = (()=>{
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;
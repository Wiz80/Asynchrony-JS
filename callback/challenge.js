let XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest;
//Url de la API
let API =  "https://rickandmortyapi.com/api/character/";


//Creamos una función que nos permitirá hacer el request
//a la API de Rick & Morty, lo que desencadena un callback
//Esto nos permite ejecutar los llamados necesarios


function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    //El tercer valor activa el asincronismo 
    xhttp.onreadystatechange = function (event){
        //Se valida si el estado del request es satisfactorio
        //En este caso el caso 4 es completado
        if(xhttp.readyState === 4){
            //Se valida el status --- IMPORTANTE
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}
//Acceso a los datos de todos los personajes
fetchData(API, function(error1, data1){
    //Manejo de errores
    if(error1) return console.error(error1);
    //results[0].id -> primer personaje en los datos de la API
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        //Info del primer personaje
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})

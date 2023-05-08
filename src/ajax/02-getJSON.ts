import { ajax } from "rxjs/ajax";


//const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.org/delay/1'; // endpoint que simula retraso al hacer una peticion

/**
 * con getJson se pueden realizar peticiones con cabeceras
 */
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token'    : 'ABC123'
});

obs$.subscribe( res => console.log(res))
import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";


//const url = 'https://api.github.com/users?per_page=5';
const url = 'https://httpbin.odrg/delay/1'; // endpoint que simula retraso al hacer una peticion

//manejador de errores para usar catchError
const manejaError = (err: AjaxError) => {
    console.warn('error: ',err.message);
    //Siempre es conveniente hacer un return para que los operadores trabajen correctamente
    return of({
        ok: false,
        usuarios: []
    })
}

//DIRFERENCIAS EN RESPUESTAS


const ajaxGetJSON$ = ajax.getJSON(url)
/*
.pipe(
    catchError(manejaError) //el error responde igual en ambos metodos
);
*/

const ajax$ = ajax(url).pipe(
    catchError(manejaError) // el error responde igual en ambos metodos
);


//ajax$.subscribe( res => console.log('ajax', res)); //trae respuesta completa
//ajaxGetJSON$.subscribe(res => console.log('getJSON', res)); // trae la respuesta exitoza

/**
 * sin catchError no se ejecuta el next ni el complete,
 * al usar catchError regresa una respuesta controlada y se ejecuta next y complete
 */
ajaxGetJSON$.subscribe({
    next: res => console.log('next: ', res),
    error: err => console.log('err: ', err),
    complete: () => console.log('completado')
})
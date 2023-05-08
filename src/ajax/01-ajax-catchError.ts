import { catchError, map, of, pluck } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response) => {

    if (!response.ok) { throw new Error(response.statusText); }

    return response;

}

const fetchPromesa = fetch(url);


/*
fetchPromesa
.then( resp => resp.json())
.then( data => console.log('data: ', data))
.catch( err => console.warn('error en usuarios: ', err))
*/

/*
fetchPromesa
.then(manejaErrores)
.then( resp => resp.json())
.then( data => console.log('data: ', data))
.catch( err => console.warn('error en usuarios: ', err))
*/

/**
 * Funcion que regresa un error
 * @param err 
 * @returns 
 */
const atrapaError = (err: AjaxError) => {

    console.warn('ha ocurrido un error: ', err.message);

    return of([]) //retorna un observable (of)

};

ajax(url).pipe(
    //pluck('response') // deprecado
    map( res => res.response),
    catchError (atrapaError) // atrapaError es una funcion que podria ejecutarse dentro del parentesis pero para mejor comprensión se genera una funcion 
).subscribe( usr => console.log('los usuarios son: ', usr))
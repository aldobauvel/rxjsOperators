import { catchError, exhaustMap, fromEvent, map, mergeAll, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

//Helper
const peticionHttpLogin = (userPass) => 
ajax.post('https://reqres.in/api/login?delay/1', userPass)
.pipe(
    //pluck('response', 'token')
    map( (res:any) => res.response.token ),
    catchError(err => of('error'))
)


//HTML
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap (evt => evt.preventDefault()),
    map(evt => ({
        email    : evt.target[0].value,
        password : evt.target[1].value,
    })),
    //mergeMap(peticionHttpLogin) // dejará pasar todas las peticiones
    //switchMap(peticionHttpLogin)  // deja pasar todas pero cancela la ultima si recibe otra
    exhaustMap(peticionHttpLogin) // solo dejara pasar si se completa con exito la ultima peticion
);
submitForm$.subscribe( token => console.log(token))
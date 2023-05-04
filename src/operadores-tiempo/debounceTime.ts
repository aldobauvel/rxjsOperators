import { debounceTime, distinctUntilChanged, fromEvent, pluck } from 'rxjs';

const obs$ = fromEvent<PointerEvent>(document, 'click')

obs$.pipe(
    debounceTime(2000) // imprimira el ultimo click dado (si se ha dado) en los ultimos 2 segundos
)
//.subscribe({ next: res => console.log(res.timeStamp)})

/**EJEMPLO DOS */
/**EJEMPLO DOS */
/**EJEMPLO DOS */

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    pluck('target', 'value'), //accede al key value del objeto target
    debounceTime(500), // dejará pasar los valores emitidos por el observable cada medio segundo
    distinctUntilChanged((prev, curr) => prev === curr) // dejará pasar el valor solo si la ultima emision del observable es diferente al ultimo valor ingresado
    
)
.subscribe({ 
    next: console.log       
})


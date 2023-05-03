import { debounceTime, distinctUntilChanged, fromEvent, pluck } from "rxjs";

const obs$ = fromEvent(document, 'click')
/*
obs$.pipe(
    //Imprimirá evento click dos segundos despues de ser emitido, si dentro de ese lapso se clickea mas de una vez, solo se imprimira el ultimo click dado
    debounceTime(2000)
)
.subscribe({
    next: clickInfo => console.log(clickInfo)
})
*/

//Practica
const input = document.createElement('input');
document.querySelector('body').append(input)

const inputObs$ = fromEvent<KeyboardEvent>(input, 'keyup')

inputObs$.pipe(
    pluck('target', 'value'),
    debounceTime(500),
    distinctUntilChanged()
)
.subscribe({
    next: res => console.log(res)
})

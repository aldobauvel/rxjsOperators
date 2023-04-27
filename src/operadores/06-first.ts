import { first, from, fromEvent, of, tap } from "rxjs";

const obs$ = fromEvent<PointerEvent >(document, 'click')
const obs2$ = of(1,2,3,4,5,6,7,8,9,10)

obs$.pipe(
    first() // se ejecuta el click una sola vez
).subscribe({
    next: res => console.log(res),
    complete: () => console.log('complete')    
});

obs2$.pipe(
    tap(console.log), //comprueba que no se emitan mas valores
    first(res => res>5) // el primero en cumplir esta condicion es el numero 6 se imprimirá y terminará el observable
)
.subscribe({
    next: res => console.log(res)
    
});

import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5, 6); // recibe 6 parametros
//const obs$ = of( [1, 2, 3, 4, 5, 6]); // recibe 1 parametro

console.log('Inicio de obs$');

obs$.subscribe({
    next:     res => console.log('next:', res),
    error:    err => console.log(err),
    complete: () => console.log('Terminamos la secuencia')
})

console.log('Fin del obs$');

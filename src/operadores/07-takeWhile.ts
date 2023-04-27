import { of, takeWhile } from "rxjs";

const obs$ = of(1,2,3,4,5,6,7,8,9)

obs$.pipe(
    takeWhile( res => res < 6)
)
.subscribe({
    next: res => {
        console.log(res);  // imprimirá: 1 2 3 4 5
    },
    complete: () => console.log('completado')    
})

obs$.pipe(
    //TODO: notar que imprime el valor que causó que no se cunmpliera la condicion
    takeWhile( res => res < 6, true) //imprimirá: 1 2 3 4 5 6
)
.subscribe({
    next: res => console.log(res),
    complete: () => console.log('complete2')
        
})
import { forkJoin, interval, of, take } from "rxjs";

const numeros$ = of (1,2,3,4)
const intervalo$ = interval(1000).pipe(take(3)) // 0 1 2
const letras$ = of('a','b','c')

// los observables deben ser finitos
forkJoin(
    numeros$,
    intervalo$,
    letras$
).subscribe(console.log)
//output: [4,2,'c']
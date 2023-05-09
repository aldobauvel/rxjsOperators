import { concat, interval, of, take } from "rxjs";

const intervalo$ = interval(1000);

concat(
    intervalo$.pipe(take(3)),
    of(true),
    intervalo$.pipe(take(1)),
    [-3,-2,-1],
).subscribe(console.log)
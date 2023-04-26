import { asyncScheduler, observeOn, range } from "rxjs";

//const obs$ = range(1, 5); // syncrono output: 1 2 3 4 5
const obs$ = range(1,5).pipe(observeOn(asyncScheduler)); // asyncrono
//const obs$ = range(-5, 10); // output: -5 -4 -3 -2 -1 0 1 2 3 4

console.log('inicio observable');
obs$.subscribe(console.log); // expected output: 1 2 3 4 5
console.log('fin observable');//
import { from, of, Observer } from 'rxjs';

/**
 * of   = toma argu,emtos y genera una secuencia
 * from = array, promise, iterable, observable 
 */

const observer = {
    next: val => console.log('val: ',val),
    complete : () => console.log('complete')
}

//const obs1$ = of(1,2,3,4,5,6); //output: 1 2 3 4 5 6
const obs1$ = of([1,2,3,4,5,6]); //output: [1, 2, 3, 4, 5, 6]
const obs2$ = from([1,2,3,4,5,6]); //output: 1 2 3 4 5 6

obs1$.subscribe(observer);
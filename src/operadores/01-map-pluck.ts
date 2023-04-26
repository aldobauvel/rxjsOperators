import { fromEvent, map, pluck, range } from "rxjs";

const obs$ = range(1, 5);

//map transforma los datos emitidos por el observable
obs$.pipe(
    map( val => (val * 10))
).subscribe(console.log)

//desarrollar keyup

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyup$.pipe(
    map( event => event.code)
).subscribe(console.log);

// uso de pluck

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
).
subscribe( res =>
    console.log(res)    
)




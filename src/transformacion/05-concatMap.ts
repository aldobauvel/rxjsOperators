import { concatMap, fromEvent, interval, mergeMap, switchMap, take } from "rxjs";

const click$ = fromEvent(document, 'click')

const interval$ = interval(500).pipe(take(4))

click$.pipe(
    concatMap( () => interval$) //por cada click dado imprimirá del 0 al 4
).subscribe(console.log)
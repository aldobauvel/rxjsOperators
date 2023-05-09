import { exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000).pipe(take(4));

click$.pipe(
    exhaustMap( () => interval$) // ignorará cualquier click mientras el intervalo este
).subscribe(console.log)
import { fromEvent, interval, skip, takeUntil } from "rxjs";

const click$ = fromEvent(document, 'click').pipe(
    skip(1)
);
const contador$ = interval(1000);

 contador$.pipe(
    takeUntil(click$)
 )
 .subscribe({
    next: res => console.log(res),
    complete: () => console.log('completo')    
 })
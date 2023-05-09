import { fromEvent, interval, mergeAll, mergeMap, switchMap } from "rxjs";

const click$    = fromEvent(document, 'click');
const interval$ = interval(1000);

//SWITCHMAP VS MERGEMAP
//SWITCHMAP VS MERGEMAP
//SWITCHMAP VS MERGEMAP

click$.pipe(
    //mergeMap(() => interval$),
    switchMap( () => interval$)
)
.subscribe(console.log)
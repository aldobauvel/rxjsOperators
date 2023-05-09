import { fromEvent, map, merge, pluck } from "rxjs";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(map(res => res.type)), 
    click$.pipe(map( res => res.type))
).subscribe(console.log)
//En caso de que se den exactamente al mismo tiempo tomará prioridad al orden dado al merge 1: keyup$ 2: clicl$
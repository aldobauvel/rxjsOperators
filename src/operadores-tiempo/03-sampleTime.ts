import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click')

click$.pipe(
    sampleTime(2000), // colocar el sample time antes de la desestructuracion ahorrará memoria
    map( ({x,y}) => ({x,y}))
)
.subscribe({ next: console.log})
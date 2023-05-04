import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click')

click$.pipe(
    map(({x}) => ({x})),
    tap( val => console.log('tap',val)),
    auditTime(3000)
).subscribe(console.log)
//en cuanto suceda un click empezará el contador de 3 segundos e imprimirá la ultimoa coordenada x que se haya dado en ese lapso de 3 segundos
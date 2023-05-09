import { combineLatest, fromEvent, map, merge } from "rxjs";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');
//se da un click
combineLatest(
    keyup$.pipe(map (res => res['key'])), 
    click$.pipe(map( res => res.type))
).subscribe(console.log)
//regresará la ultima tecla presionada y el click si ambos han emitido algun producto
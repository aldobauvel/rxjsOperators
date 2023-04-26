import { fromEvent, map, mapTo } from "rxjs";


const observable$ = fromEvent<KeyboardEvent>(document, 'keyup');

observable$.pipe(
    mapTo( 'a') //depre
).subscribe(
    {
        next: res => console.log(res)
        
    }
)
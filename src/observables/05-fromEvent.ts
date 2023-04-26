import { fromEvent } from "rxjs";

const observer = {
    next: res => console.log(res),    
}

const obs1$ = fromEvent<PointerEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent >(document,'keyup');

obs1$.subscribe( ({x, y}) => console.log(x,y)); //Destructuracion de la respuesta
obs2$.subscribe( res => console.log(res.key));
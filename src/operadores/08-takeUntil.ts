import { fromEvent, interval, takeUntil } from "rxjs";


const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';
document.querySelector('body').append(boton);

const obs1$ = interval(1000);
const click$ = fromEvent(boton, 'click');

obs1$.pipe(
    takeUntil(click$) //recibe un observable sin subscribirse
    )
.subscribe({
    next: res => console.log(res),
    complete: () => console.log('completo')    
})
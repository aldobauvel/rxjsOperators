import { Observer, interval } from "rxjs";

const observer = {
    next: val => console.log('next: '+val),
    complete: () => console.log('complete')
}


//interval es por default asyncrono
const obs$ = interval(1000);
console.log('inicio sync');
obs$.subscribe(observer); // emite valor cada 1s empezando por 0
console.log('termina sync');